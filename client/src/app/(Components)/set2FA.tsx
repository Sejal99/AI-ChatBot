'use client'
import { useState } from "react";
import { useRouter } from "next/router";

const Set2FAPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSet2FA = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/set2FA?code=${code}`);
      const data = await response.json();
      if (data.success) {
        router.push("/");
      } else {
        alert("Failed to enable 2FA");
      }
    } catch (error) {
      console.error("Error setting 2FA:", error);
      alert("Failed to set 2FA");
    }
  };

  return (
    <div>
      <h1>Set 2FA</h1>
      <form onSubmit={handleSet2FA}>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter Code" />
        <button type="submit">Enable 2FA</button>
      </form>
    </div>
  );
};

export default Set2FAPage;
