"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { places, Place } from "@/mok/index";
import History from "@/components/ui/history";
import usePrompt from "@/store/prompt";
import { useDirectionStore } from "@/store/direction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ResultPage = () => {
  const { promptData } = usePrompt();
  const { direction } = useDirectionStore();
  const router = useRouter();

  let langauge: keyof Place;

  if (promptData.lang === "ko") {
    langauge = "kr";
  } else if (promptData.lang === "en") {
    langauge = "en";
  } else if (promptData.lang === "ja") {
    langauge = "jp";
  } else if (promptData.lang === "zh-CN") {
    langauge = "zh";
  } else {
    langauge = "en";
  }

  return (
    <div className="flex flex-col pt-9">
      <div className="w-full">
        <div className="flex gap-3 px-6 py-4 carousel rounded-box">
          {places[langauge][direction].map((item) => (
            <>
              <div
                className={cn(
                  "relative flex px-2 carousel-item w-[300px] h-[200px] overflow-hidden space-x-3",
                  item.id == 1 ? "" : ""
                )}
              >
                <Image
                  key={item.id}
                  src={`/${item.href}`}
                  objectFit="cover"
                  alt={`${item.value} image`}
                  className="rounded-2xl carousel-item absolute"
                  fill
                />
              </div>
            </>
          ))}
        </div>
        <div className="bg-transparent pt-10">
          <History data={places[langauge]} direction={direction} />
        </div>
      </div>
      <Button
        className="w-10/12 h-[56px] ml-8 my-6 text-white rounded-[12px] bg-[#6955df]"
        onClick={() => router.push("/finish")}
      >
        종료하기
      </Button>
    </div>
  );
};

export default ResultPage;
