import { NavigationState } from "@/types";
import { create } from "zustand";

export const NavigationStore = create<NavigationState>()((set) => ({
  navs: ["Resume", "Projects"],
  curNav: "Resume",
  setNav: (nav: string) => set(() => ({ curNav: nav })),
}));
