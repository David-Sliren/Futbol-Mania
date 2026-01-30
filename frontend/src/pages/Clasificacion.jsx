import Card from "../components/Plantillas/Card";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Plantillas/Table";

import Events from "../components/Events/Events";
import { useCompetitionTable } from "../hooks/useCompetitionQuery";
import { useCompetitionMatches } from "../hooks/useMatchesQuery";
import { Link } from "react-router";
import Button from "../components/Plantillas/Button";
import NotLive from "../components/Plantillas/NotLive";
import SkeletonTable from "../components/skeleton/SkeletonTable";
import SkeletonEvents from "../components/skeleton/SkeletonEvents";
import { useState } from "react";

function Clasificacion() {
  const { competitionsMatches } = useCompetitionMatches();
  const { competitionTable } = useCompetitionTable();

  const [isMore, setIsMore] = useState(false);

  function haddleMore() {
    setIsMore(!isMore);
  }

  return (
    <>
      <div className="container min-w-full min-h-screen">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div></div>
        <header className=" w-full h-fit p-2 sticky top-0 z-999">
          <Link to="/">
            <Button />
          </Link>
        </header>
        <ElementoP>
          <ElementoLP
            nombre="Tabla de clasificacion"
            classNames={`backdrop-blur-xl  overflow-hidden ${isMore ? "h-fit" : "h-120"}`}
            learnMore={true}
            on={haddleMore}
            isMore={isMore}
          >
            <div className="col-span-9">
              {competitionTable.isFetching ? (
                <SkeletonTable />
              ) : (
                <Table>
                  {competitionTable.data?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.position}</td>
                        <td className="flex">{item.team.name}</td>
                        <td>{item.playedGames}</td>
                        <td>{item.won}</td>
                        <td>{item.draw}</td>
                        <td>{item.lost}</td>
                        <td>{item.goalsFor}</td>
                        <td>{item.goalsAgainst}</td>
                        <td>{item.goalDifference}</td>
                        <td>{item.points}</td>
                      </tr>
                    );
                  })}
                </Table>
              )}
            </div>
          </ElementoLP>

          <ElementoLP nombre="Eventos">
            {!competitionsMatches.isLoading &&
              competitionsMatches.data.length === 0 && <NotLive />}
            {competitionsMatches.isFetching
              ? [...Array(5)].map((_, i) => <SkeletonEvents key={i} />)
              : competitionsMatches.data?.map((item) => {
                  return (
                    <Events
                      key={item.competition.id}
                      img1={item.localTeam.crest}
                      markerHome={item.score.home}
                      markerVisit={item.score.away}
                      img2={item.visitTeam.crest}
                      alt1={item.localTeam.name}
                      alt2={item.visitTeam.name}
                      status={item.statusGame}
                      date={item.startGame}
                    />
                  );
                })}
          </ElementoLP>
        </ElementoP>
      </div>
    </>
  );
}

export default Clasificacion;
