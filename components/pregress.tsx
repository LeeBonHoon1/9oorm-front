"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar({ percent }: { percent: number }) {
  return <Progress value={percent} className="w-full" />;
}
