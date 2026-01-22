import { useState, createContext } from "react";

const ContextBotones = createContext();
const KEY_STORE = "competition-store";
function BotonData({ children }) {
  const [botonData, setBotonData] = useState(null);

  function getData(id) {
    setBotonData(id);
  }
  const valor = { botonData, getData };

  return (
    <ContextBotones.Provider value={valor}>{children}</ContextBotones.Provider>
  );
}

export default BotonData;
export { ContextBotones };
