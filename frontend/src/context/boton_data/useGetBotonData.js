import { useContext } from "react";
import { ContextBotones } from "./BotonData";

export function useGetBotonData() {
  const context = useContext(ContextBotones);
  const { botonData, getData } = context;

  return {
    botonData,
    getData,
  };
}
