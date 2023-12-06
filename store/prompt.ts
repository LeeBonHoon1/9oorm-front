import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { PromptStoreItem } from '@/types';

interface PromptStore {
  promptData: PromptStoreItem;
  addPrompt: (data: Partial<PromptStoreItem>) => void;
  result: any
  addResult: (data: any) => void
}

const usePrompt = create(
  persist<PromptStore>((set) => ({
    promptData: {
      lang: "",
      keyword: ""
    },
    result: [],
    addPrompt: (data) => {
      set((state) => ({
        promptData: {
          ...state.promptData,
          ...data,
        },
      }));
    },
    addResult: (data: any) => {
      set((state) => ({
        result: [data]
      }));
    }

  }), {
    name: 'promptData',
    storage: createJSONStorage(() => localStorage),
  })
);

export default usePrompt;
