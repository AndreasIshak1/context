import { createContext } from "react";

export interface IText {
  text: string;
  updatedText: () => void;
}

export const textContext = createContext<IText>({
  text: "blbalalbalabl",
  updatedText: () => {
  }
})