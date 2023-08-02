import { create } from "zustand";

export const useLogin = create((set) => ({
  login: false,
  setLogin: (logged) => set({ login: logged }),
}));