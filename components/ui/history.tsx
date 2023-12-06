import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Directions } from "@/mok";

interface HistoryProps {
  data: Directions;
  direction: keyof Directions;
}

const History = ({ data, direction }: HistoryProps) => {
  return (
    <>
      {data[direction].map((item, index) => {
        return (
          <div key={index}>
            <Accordion type="single" collapsible className="w-full px-10">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[21px] font-bold">
                  {item.value}
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
                <AccordionContent className="text-[12px]">
                  {item.address}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};

export default History;
