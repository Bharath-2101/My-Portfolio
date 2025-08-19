import { create } from "zustand";

const useStore = create((set) => ({
  hamburgerClick: false,
  changeHamburgerClick: () =>
    set((state) => ({ hamburgerClick: !state.hamburgerClick })),

  currentPage: "HOME",
  setCurrentPage: (page) => set({ currentPage: page }),

  height:
    window.innerHeight +
    ((window.screen.height - window.innerHeight) * 62) / 100,
}));

export default useStore;
