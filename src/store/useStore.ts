import { create } from "zustand";

interface AppState {
  activeSection: string;
  openDrawer: boolean;
  setActiveSection: (section: string) => void;
  setOpenDrawer: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: "home",
  openDrawer: false,

  setActiveSection: (section) => set({ activeSection: section }),
  setOpenDrawer: (open) => set({ openDrawer: open }),
  scrollToSection: (id) => {
    const section = document.getElementById(id);
    if (section) {
      set({ activeSection: id });
      section.scrollIntoView({ behavior: "smooth" });
    }
  },
}));

export default useStore;
