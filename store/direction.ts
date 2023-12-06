import { create } from "zustand";
import { Directions } from "@/mok/index";

interface useDirectionStore {
  direction: keyof Directions;
  setDirection: (a: keyof Directions) => void;
}

export const useDirectionStore = create<useDirectionStore>((set) => ({
  direction: 'east',
  setDirection: (a) => set({ direction: a }),
}));
