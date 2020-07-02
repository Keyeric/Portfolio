import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useColorblind = (key, initialValue) => {
  const [blind, setBlind] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (blind === true) {
      document.querySelector("body").classList.add("colorblind-mode");
    } else {
      document.querySelector("body").classList.remove("colorblind-mode");
    }
  }, [blind]);

  return [blind, setBlind];
};
