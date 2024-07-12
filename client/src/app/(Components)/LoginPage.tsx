'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [codeRequested, setCodeRequested] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3006/api/login?id=${id}&password=${password}&code=${code}`);
      const data = await response.json();
      if (data.success) {
        router.push("/");
      } else if (data.codeRequested) {
        setCodeRequested(true);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        {codeRequested && (
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter Code" />
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
