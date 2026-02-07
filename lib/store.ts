import { create } from "zustand";

interface AppState {
  selectedProduct: string | null;
  isTransitioning: boolean;
  selectProduct: (id: string | null) => void;
  setTransitioning: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedProduct: null,
  isTransitioning: false,
  selectProduct: (id) => set({ selectedProduct: id }),
  setTransitioning: (value) => set({ isTransitioning: value }),
}));
