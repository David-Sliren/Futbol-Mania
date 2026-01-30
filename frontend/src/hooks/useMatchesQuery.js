import { useQuery } from "@tanstack/react-query";

import { matches, matchesCompetitions } from "../api/matches";
import { useGetBotonData } from "../context/boton_data/useGetBotonData";

const time = 2 * 60 * 1000;

export function useMatches() {
  const eventsMathes = useQuery({
    queryKey: ["Home", { eventsMatches: "All-Events-Today" }],
    queryFn: () => matches(),
    staleTime: time,
  });

  const competitionsMatches = [
    ...new Set(eventsMathes.data?.map((item) => item.competition.name)),
  ];

  return { eventsMathes, competitionsMatches };
}

export function useCompetitionMatches() {
  const { botonData } = useGetBotonData();
  const competitionsMatches = useQuery({
    queryKey: ["Clasificacion", { competitionsMatches: botonData }],
    queryFn: () => matchesCompetitions(botonData),
    staleTime: time,
  });

  return { competitionsMatches };
}
