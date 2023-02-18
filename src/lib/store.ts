import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface SearchState {
  input: string;
  updateInput: (newInput: string) => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        input: "lord of the rings",
        updateInput: (newInput: string) =>
          set((state) => ({ ...state, input: newInput })),
      }),
      { name: "search-storage" }
    )
  )
);
