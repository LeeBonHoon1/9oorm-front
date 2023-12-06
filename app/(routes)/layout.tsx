import Header from "@/components/header";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full pb-20">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
