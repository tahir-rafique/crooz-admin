import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className=" h-screen w-screen bg-white flex gap-10 p-[50px] relative overflow-hidden">
      {/*  background-layer image */}
      <Image
        src={"/assets/images/bg-layer.svg"}
        height={810}
        width={660}
        className=" absolute left-0 right-0 top-0 bottom-0 w-full z-10"
        alt="auth-image"
      />

      <Image
        src={"/assets/images/auth-img.webp"}
        height={910}
        width={660}
        className=" relative  z-[999] "
        alt="auth-image"
      />

      <div className=" h-full  w-full max-w-[500px] mx-auto relative z-[999]">
        {children}
      </div>
    </div>
  );
}
