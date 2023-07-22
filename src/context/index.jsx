import create from "zustand";

const loginState = create((set) => ({
  login: false, // esto sería como el useState(false) (?)
  setLogin: (logged) => set({ login: logged }), //este ser+ía el setLogin(true) (?) - cambiar estado?
}));

export default loginState