"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center bg-transparent h-[60px]">
      <Image
        src={"/tamraon.svg"}
        width={105}
        height={100}
        alt="logo"
        onClick={() => router.push("/home")}
      />
    </div>
  );
};

export default Header;
