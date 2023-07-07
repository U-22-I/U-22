import { atom } from "recoil";

export const ModalState = atom({
  key: "ModalState", // 一意のキー
  default: false, // 初期値
});
