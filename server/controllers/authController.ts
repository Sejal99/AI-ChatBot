import { Request, Response } from 'express';
import User from '../models/userModel'; 
import qrcode from 'qrcode';
import { authenticator } from 'otplib';

interface CustomRequest extends Request {
  cookies: {
    id: string;
  };
}

export const login = async (req: CustomRequest, res: Response) => {
  try {
    const { id, password, code } = req.query;
    const user = await User.findOne({ id });

    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
//@ts-ignore
    if (user.twoFactorAuth.enabled) {
      if (!code) {
        return res.send({
          codeRequested: true,
        });
        
      }
      //@ts-ignore
      const verified = authenticator.check(code as string, user.twoFactorAuth.secret);
      if (!verified) throw new Error('Invalid code');
    }

    return res.cookie('id', id).send({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
        //@ts-ignore
      error: err.message || 'Invalid credentials',
    });
  }
};

export const generateQRImage = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.cookies;
    const user = await User.findOne({ id });

    if (!user) {
      throw new Error('User not found');
    }

    const secret = authenticator.generateSecret();
    const uri = authenticator.keyuri(id, '2FA Tutorial', secret);
    const image = await qrcode.toDataURL(uri);
//@ts-ignore
    user.twoFactorAuth.tempSecret = secret;
    await user.save();

    return res.send({
      success: true,
      image,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      //@ts-ignore
      error: err.message || 'Failed to generate QR image',
    });
  }
};

export const set2FA = async (req: CustomRequest, res: Response) => {
  try {
    const { id } = req.cookies;
    const { code } = req.query;
    const user= await User.findOne({ id });

    if (!user) {
      throw new Error('User not found');
    }
//@ts-ignore
    const verified = authenticator.check(code as string, user.twoFactorAuth.tempSecret);
    if (!verified) throw new Error('Invalid code');

    user.twoFactorAuth = {
      enabled: true,
      //@ts-ignore
      secret: user.twoFactorAuth.tempSecret,
    };
    await user.save();

    return res.send({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      //@ts-ignore
      error: err.message || 'Failed to enable 2FA',
    });
  }
};

export const checkSession = (req: CustomRequest, res: Response) => {
  const { id } = req.cookies;
  if (id) {
    return res.send({
      success: true,
      id,
    });
  }
  return res.status(500).send({
    success: false,
    error: 'Session not found',
  });
};

export const logout = (req: CustomRequest, res: Response) => {
  res.clearCookie('id');
  res.send({
    success: true,
  });
};
