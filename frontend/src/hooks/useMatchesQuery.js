import { useQuery } from "@tanstack/react-query";

import { matches, matchesCompetitions } from "../api/matches";

const time = 2 * 60 * 1000;

export function useMatches() {
  const eventsMathes = useQuery({
    queryKey: ["Clasificacion", { eventsMatches: "All-Events-Today" }],
    queryFn: () => matches(),
    staleTime: time,
  });

  return { eventsMathes };
}

export function useCompetitionMatches(id) {
  const competitionsMatches = useQuery({
    queryKey: ["Clasificacion", { competitionsMatches: id }],
    queryFn: () => matchesCompetitions(id),
    staleTime: time,
  });

  return { competitionsMatches };
}
