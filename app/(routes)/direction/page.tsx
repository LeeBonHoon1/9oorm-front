"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDirectionStore } from "@/store/direction";
import { Directions } from "@/mok/index";

interface Direction {
  id: number;
  name: keyof Directions;
  value: string;
  subtitle?: string;
}

const directions: Direction[] = [
  {
    id: 1,
    name: "east",
    value: "동",
    subtitle: "JEJU East",
  },
  {
    id: 2,
    name: "west",
    value: "서",
    subtitle: "JEJU West",
  },
  {
    id: 3,
    name: "south",
    value: "남",
    subtitle: "JEJU South",
  },
  {
    id: 4,
    name: "north",
    value: "북",
    subtitle: "JEJU North",
  },
];

const DirectionPage = () => {
  const { direction, setDirection } = useDirectionStore();
  const router = useRouter();
  return (
    <>
      <div className="w-full py-12">
        <h2 className="text-[24px] px-12 leading-[140%]">
          What`s Your <br /> Favorite?
        </h2>
      </div>
      <div className="flex px-8 py-4 carousel rounded-box">
        {directions.map((item) => (
          <>
            <div
              className={cn(
                "flex flex-col px-2 carousel-item",
                item.id == 1 ? "pl-12" : ""
              )}
              key={item.id}
            >
              <div className="flex flex-row justify-between pb-3">
                <p className="text-[18px]">{item.subtitle}</p>
                <Button
                  variant={"primary"}
                  className="w-[63px] h-[30px] text-[12px] rounded-md"
                  onClick={() => {
                    setDirection(item.name);
                    router.push("/result");
                  }}
                >
                  choose
                </Button>
              </div>
              <Image
                key={item.id}
                src={`/${item.name}.png`}
                width={300}
                height={300}
                alt="direction"
                className="rounded-2xl"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default DirectionPage;
