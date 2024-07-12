'use client'
import { useEffect, useState } from "react";

const QRImagePage = () => {
  const [qrImage, setQRImage] = useState("");

  useEffect(() => {
    const fetchQRImage = async () => {
      try {
        const response = await fetch("/api/qrImage");
        const data = await response.json();
        if (data.success) {
          setQRImage(data.image);
        } else {
          console.error("Failed to fetch QR image");
        }
      } catch (error) {
        console.error("Error fetching QR image:", error);
      }
    };

    fetchQRImage();
  }, []);

  return (
    <div>
      <h1>Setup 2FA</h1>
      {qrImage && <img src={qrImage} alt="QR Code" />}
    </div>
  );
};

export default QRImagePage;
