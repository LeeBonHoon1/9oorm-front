"use client";

import { Button } from "@/components/ui/button";
import usePrompt from "@/store/prompt";
import { Langueges } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const langueges: Langueges[] = [
  {
    id: 1,
    value: "한국어",
    code: "ko",
  },
  {
    id: 2,
    value: "日本語",
    code: "ja",
  },
  {
    id: 3,
    value: "汉语",
    code: "zh-CN",
  },
  {
    id: 4,
    value: "English",
    code: "en",
  },
];

const HomePage = () => {
  const { addPrompt } = usePrompt();
  const router = useRouter();

  const selectCardHandler = (lang: string) => {
    router.push("/select");
    addPrompt({ lang: lang });
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col px-12 w-full">
        <div className="flex flex-col items-center space-y-10">
          <Image src={"/lang.png"} width={150} height={150} alt="image" />
          <div className="pb-10 text-[24px]">{`What's Your Language?`}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {langueges.map((item) => {
            return (
              <Button
                variant={"primary"}
                size={"primary"}
                key={item.id}
                onClick={() => selectCardHandler(item.code)}
                //onClick={click}
              >
                {item.value}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
