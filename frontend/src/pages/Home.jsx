import { useCompetitionQuery } from "../hooks/useCompetitionQuery";

import Card from "../components/Plantillas/Card";
import ElementoLP from "../components/Plantillas/ElementoLP";
import ElementoP from "../components/Plantillas/ElementoP";
import SkeletonCard from "../components/skeleton/SkeletonCard";
import ModalEvents from "../components/Plantillas/ModalEvents";

function Home() {
  const { typeLeague, typeCup, priorityBigfive, prioritySudamerican } =
    useCompetitionQuery();
  return (
    <div className="container min-w-full min-h-dvh">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div></div>
      <ElementoP title="FUTBOL MANIA">
        <ModalEvents />
        <ElementoLP nombre="Cinco Grandes">
          {priorityBigfive.isFetching
            ? [...Array(5)].map((_, i) => <SkeletonCard key={i} />)
            : priorityBigfive.data?.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    logo={item.logo}
                    isActive={true}
                  />
                );
              })}
        </ElementoLP>

        <ElementoLP nombre="Sudamericanas">
          {prioritySudamerican.isFetching ? (
            <SkeletonCard />
          ) : (
            prioritySudamerican.data?.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  logo={item.logo}
                  isActive={true}
                />
              );
            })
          )}
        </ElementoLP>

        <ElementoLP nombre="Torneos">
          {typeCup.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>

        <ElementoLP nombre="Todas las ligas">
          {typeLeague.data?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                logo={item.logo}
                isActive={true}
              />
            );
          })}
        </ElementoLP>
      </ElementoP>
    </div>
  );
}

export default Home;
