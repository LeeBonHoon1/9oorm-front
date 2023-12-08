"use client";

import { useState, ChangeEvent, useEffect } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/pregress";
import usePrompt from "@/store/prompt";
import Loading from "@/components/loading";
import axios from "axios";
import APIs from "@/apis";
import { useToast } from "@/components/ui/use-toast";

const Selectpage = () => {
  const { toast } = useToast();
  const { addResult, promptData } = usePrompt();
  const { lang } = promptData || {};
  const [visible, setVisible] = useState(false);
  const [start, setStart] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submit = async () => {
    setStart(true);
    setLoading(true);
    const param = {
      lang,
      keyword: input,
    };
    await APIs.getPromptResult(param)
      .then((res) => {
        addResult(res);
        router.push("/temp");
        setLoading(false);
        setStart(false);
      })
      .catch((err) => {
        setLoading(false);
        setStart(false);
        toast({
          title: "입력하신 장소를 찾지 못했어요.",
          description: "정확한 장소명을 입력해주세요!",
        });
      });
  };

  useEffect(() => {
    if (percent === 100) {
      router.push("/temp");
    }
  }, [percent, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <div className="flex flex-col items-center space-y-10">
          {!start ? (
            <Image
              src={`/${"search"}.png`}
              width={150}
              height={150}
              alt="image"
            />
          ) : (
            <Loading />
          )}
          {start && (
            <div className="space-y-3">
              {/* <ProgressBar percent={percent} /> */}
              <div className="text-[24px]">{"Please Wait for a Minute"}</div>
            </div>
          )}

          <div className="pb-10 text-[24px] px-10">
            {!visible ? (
              <div className="flex flex-col items-center justify-center">
                <div>Would You Like to Get a</div>
                <div>Place Recommendation?</div>
              </div>
            ) : !start ? (
              <div className="flex flex-col items-center justify-center">
                <div>
                  <div>Which Place Do You</div>
                  <div>Want to Go?</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {visible ? (
            <div className="space-y-5">
              {!start && (
                <Input
                  onChange={handleInputChange}
                  value={input}
                  className="bg-[#EDF2F7] text-[#191919] h-[48px] w-[294px] font-[16px] font-weight-[500]"
                  placeholder="Seongsan Ilchulbong"
                />
              )}
              {!start && (
                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      setVisible(false);
                      setInput("");
                    }}
                    className="bg-[#47445c] text-[#edfef7] rounded-[12px] w-[112px]"
                    size={"primary"}
                  >
                    {"BACK"}
                  </Button>
                  <Button
                    variant={"primary"}
                    size={"primary"}
                    className="w-[170px]"
                    // onClick={handleSubmit}
                    onClick={submit}
                    disabled={!input}
                  >
                    {"NEXT"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center gap-3 px-12">
              <Button
                variant={"primary"}
                size={"primary"}
                onClick={() => {
                  setVisible(true);
                }}
                className="w-[112px] bg-[#47445c]"
              >
                {"NO"}
              </Button>
              <Button
                variant={"primary"}
                size={"primary"}
                onClick={() => {
                  router.push("/direction");
                }}
                className="w-[170px]"
              >
                {"YES"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selectpage;
