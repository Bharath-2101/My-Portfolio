import { create } from "zustand";

const useStore = create((set) => ({
  hamburgerClick: false,
  changeHamburgerClick: () =>
    set((state) => ({ hamburgerClick: !state.hamburgerClick })),

  currentPage: "HOME",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useStore;
