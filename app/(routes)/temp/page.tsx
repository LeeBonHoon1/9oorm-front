"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import usePrompt from "@/store/prompt";
import { useEffect, useState } from "react";

const TempPage = () => {
  const [mounted, setMounted] = useState(false);
  const { result } = usePrompt();
  const { text, uri } = result?.[0] ?? [];
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col pt-9">
      <div className="">
        <div className="flex items-center justify-center gap-3 px-2 py-4 ">
          <Image
            src={uri}
            objectFit="cover"
            alt={`image`}
            className="rounded-2xl carousel"
            width={300}
            height={300}
          />
        </div>
        {text &&
          text.map((item: string, index: number) => {
            return (
              <div key={index} className="px-10 py-5">
                {item.split("<br />").map((line, index) => (
                  <div key={index}>{line.replaceAll(`"`, "")}</div>
                ))}
              </div>
            );
          })}
        <Button
          className="w-10/12 h-[56px] ml-8 my-6 text-white rounded-[12px] bg-[#6955df]"
          onClick={() => router.push("/finish")}
        >
          종료하기
        </Button>
      </div>
    </div>
  );
};

export default TempPage;
