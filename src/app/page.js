"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to /dashboard after the component mounts
    router.push("/dashboard");
  }, [router]);

  return <div className="w-[100vw] h-[100vh] flex justify-center items-center ">Redirecting...</div>;
};

export default Page;
