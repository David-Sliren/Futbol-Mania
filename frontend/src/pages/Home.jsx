// import { useBotones } from "../context/BotonData";

import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";

function Home() {
  return (
    <div className="w-full min-h-dvh">
      <ElementoP nombre="Ligas">
        <ElementoLP nombre="Ligas principales" column={5}>
          {/* {match.data?.map((item) => {
            return (
              <ElementoL
                key={item.competition.id}
                name={item.competition.name}
                logo={item.competition.emblem}
                // logica={datosDeBotones}
                dependencia={item.competition.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>

        <ElementoLP nombre="Ligas sudamericanas" column={5}>
          {/* {sudamericanas?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                logica={datosDeBotones}
                dependencia={item.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas" column={3}>
          {/* {data?.map((item) => {
            return (
              <ElementoL
                key={item.id}
                name={item.name}
                logo={item.logo}
                // logica={datosDeBotones}
                dependencia={item.id}
                isActive={false}
              />
            );
          })} */}
        </ElementoLP>
      </ElementoP>
    </div>
  );
}

export default Home;
