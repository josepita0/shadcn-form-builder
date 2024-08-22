import { create } from "zustand";

interface IDrawerSotre {
  isOpen: boolean;
  toggleDrawer: () => void;
  component?: React.ReactNode;

  dataDrawer?: {
    type?: "view" | "update" | "create" | "additional" | null;
    title?: string;
    description?: string;
    [key: string]: any;
  } | null;
  setDataDrawer: (data: IDrawerSotre["dataDrawer"]) => void;
}

export const useDrawerStore = create<IDrawerSotre>((set) => ({
  isOpen: false,
  component: null,
  toggleDrawer: () =>
    set((prevState) => {
      const isOpen = !prevState.isOpen;

      const dataDrawer = isOpen ? prevState.dataDrawer : null;

      return { isOpen: !prevState.isOpen, dataDrawer };
    }),
  dataDrawer: {
    type: null,
  },
  setDataDrawer: (data) => set({ dataDrawer: data }),
}));
