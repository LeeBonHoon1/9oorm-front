"use client";

import { useRef, useEffect } from "react";
import Lottie from "lottie-web";

export type LottieContainerProps = {
  path: string;
};

export const LottieContainer = ({ path }: LottieContainerProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: path,
    });

    return () => Lottie.destroy();
  }, [path]);

  return (
    <div className="w-full h-full">
      <div ref={lottieContainer} />
    </div>
  );
};

export default LottieContainer;
