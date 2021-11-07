import create from "zustand";

const initalValues = {
  filterOpen: false,
  filterPrice: [],
  filterCategory: [],
};

interface useStoreProps {
  filterOpen: boolean;
  switchFilterOpen: () => void;
  filterPrice: Array<string>;
  clearFilterPrice: () => void;
  filterCategory: Array<string>;
  clearFilterCategory: () => void;
  handleSelectPrice: (v: string) => void;
  handleSelectCategory: (v: string) => void;
  clearFilters: () => void;
}
const useStore = create<useStoreProps>((set) => ({
  ...initalValues,
  switchFilterOpen: () =>
    set(({ filterOpen }) => ({
      filterOpen: !filterOpen,
    })),
  clearFilterPrice: () => set({ filterPrice: [] }),
  clearFilterCategory: () => set({ filterCategory: [] }),
  handleSelectPrice: (value: string) =>
    set(({ filterPrice }) => ({
      filterPrice: filterPrice.includes(value)
        ? filterPrice.filter((v) => v !== value)
        : [...filterPrice, value],
    })),
  handleSelectCategory: (value: string) =>
    set(({ filterCategory }) => ({
      filterCategory: filterCategory.includes(value)
        ? filterCategory.filter((v) => v !== value)
        : [...filterCategory, value],
    })),
  clearFilters: () => set({ ...initalValues }),
}));

export default useStore;
