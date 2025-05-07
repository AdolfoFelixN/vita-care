import { create } from 'zustand';

export const useStore = create((set) => ({
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));