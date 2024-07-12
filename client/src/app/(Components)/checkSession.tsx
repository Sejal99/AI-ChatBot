'use client'
import { useEffect } from "react";
import { useRouter } from "next/router";

const CheckSessionPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/check");
        const data = await response.json();
        if (!data.success) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking session:", error);
        router.push("/login");
      }
    };

    checkSession();
  }, []);

  return (
    <div>
      <h1>Checking Session...</h1>
    </div>
  );
};

export default CheckSessionPage;
