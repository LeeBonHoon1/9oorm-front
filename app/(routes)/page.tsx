"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { slideUpAndScaleTransition } from "@/motion";
import { AnimatePresence, motion } from "framer-motion";

const SplashScreen = () => {
  const isInfinity = false;
  const router = useRouter();
  const basePng = ['/t.svg', '/a.svg', '/m.svg', '/r.svg', '/a.svg', '/o.svg', '/n.svg'];
  const [completed, setCompleted] = useState(false);
  const transition = {
    repeat: isInfinity ? Infinity : 0,
    repeatType: "reverse" as const,
  };

  const sizeChar_W = [28.14, 31.57, 39.96, 33.4, 31.57, 35.18, 33.7];
  const sizeChar_H = [31.13, 31.32, 31.26, 31.61, 31.32, 31.31, 31.26];

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          variants={{
            animate: {
              transition: {
                delay: 1,
                when: "afterChildren",
              },
            },
            exit: {
              opacity: 0,
            },
          }}
          animate="animate"
          exit="exit"
          onAnimationComplete={() => {
            !isInfinity && setTimeout(() => setCompleted(true), 500);
          }}
          className="h-[100dvh] sm:h-screen flex items-center justify-center flex-col space-y-4 fixed w-full bg-[#8673F4] top-0 z-50"
        >
          <motion.div
            variants={{
              animate: {
                y: [5, -5],
                scale: [0.85, 1.2],
                rotateZ: [0, -4, 4, -4, 4, 0],
                transition: {
                  rotateZ: {
                    delay: 1,
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "tween",
                  },
                  y: {
                    duration: 0.5,
                    bounce: 0.8,
                  },
                  scale: {
                    duration: 0.5,
                    bounce: 0.8,
                  },
                  when: "afterChildren",
                },
              },
              exit: {
                y: 0,
                scale: 1,
              },
            }}
            className="relative w-[103px] h-[71px]"
          >
            <Image fill src="/logo_1.png" alt="splash" />
          </motion.div>
          <motion.div
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.08,
                  when: "afterChildren",
                  ...transition,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="h-10 text-4xl logo"
          >
            {basePng.map((item, index) => {
              return (
                <motion.span
                  key={item}
                  variants={{ ...slideUpAndScaleTransition() }}
                >
                  <Image src={item} width={sizeChar_W[index]} height={sizeChar_H[index]} alt="" />
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
