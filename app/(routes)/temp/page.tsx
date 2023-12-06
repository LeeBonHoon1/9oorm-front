"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import usePrompt from "@/store/prompt";
import { useEffect, useState } from "react";

const TempPage = () => {
  const [mounted, setMounted] = useState(false);
  const { result } = usePrompt();
  const { text, uri } = result?.[0] ?? [];
  const router = useRouter();
  const images = [
    {
      id: 1,
      url: "coastline1.png",
    },
    {
      id: 2,
      url: "coastline2.png",
    },
    {
      id: 3,
      url: "coastline3.png",
    },
    {
      id: 4,
      url: "coastline4.png",
    },
  ];

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
          {/* {images.map((item: any, index: number) => (
            <div
              className={cn(
                "relative flex px-2 carousel-item w-[300px] h-[300px] overflow-hidden space-x-3",
                item.id == 1 ? "pl-6" : ""
              )}
              key={index}
            >
              <Image
                key={item.id}
                src={`/${item.url}`}
                objectFit="cover"
                alt={`${item.url} image`}
                className="rounded-2xl carousel"
                width={300}
                height={300}
              />
            </div>
          ))} */}
        </div>
        {text &&
          text.map((item: string, index: number) => {
            return (
              <div key={index} className="px-5 py-5">
                {item.split("<br />").map((line, index) => (
                  <div key={index}>{line}</div>
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
