import ElementoL from "../components/Plantillas/ElementoL";
import ElementoLP from "../components/Plantillas/ElementoLp";
import ElementoP from "../components/Plantillas/ElementoP";
import Table from "../components/Plantillas/Table";

import Events from "../components/Events/Events";
import { useCompetitionTable } from "../hooks/useCompetitionQuery";
import { useCompetitionMatches } from "../hooks/useMatchesQuery";

function Clasificacion() {
  const { competitionsMatches } = useCompetitionMatches();
  const { competitionTable } = useCompetitionTable();

  return (
    <>
      <ElementoP nombre="Clasificacion">
        <ElementoLP nombre="Tabla">
          <Table>
            {competitionTable.data?.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="font-semibold">{item.team.name}</td>
                  <td>{item.playedGames}</td>
                  <td>{item.won}</td>
                  <td>{item.draw}</td>
                  <td>{item.lost}</td>
                  <td>{40}</td>
                  <td>{20}</td>
                  <td>{12}</td>
                  <td className="font-semibold">{item.points}</td>
                </tr>
              );
            })}
          </Table>
        </ElementoLP>
        <ElementoLP nombre="Eventos en vivo" column={3}>
          {/* {match.data?.map((item) => {
            return (
              <Events
                // key={item.competition.id}
                img1={item.homeTeam.crest}
                text={`${item.score.fullTime.home} - ${item.score.fullTime.away}`}
                img2={item.awayTeam.crest}
                // alt1={item.homeTeam.name}
                // alt2={item.awayTeam.name}
              />
            );
          })} */}
        </ElementoLP>
      </ElementoP>
    </>
  );
}

export default Clasificacion;
