import { useQuery } from "@tanstack/react-query";

import { type, priority, table } from "../api/competitions";
import { useGetBotonData } from "../context/boton_data/useGetBotonData";

const timeRefresh = 12 * 60 * 60 * 1000;
const timeCache = 24 * 60 * 60 * 1000;

export function useCompetitionQuery() {
  const typeLeague = useQuery({
    queryKey: ["Home", { type: "LEAGUE" }],
    queryFn: () => type("LEAGUE"),
    staleTime: timeRefresh,
    gcTime: timeCache,
    // Para o hacer fecth inicesarios, si el estado no cambia
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const typeCup = useQuery({
    queryKey: ["Home", { type: "Cup" }],
    queryFn: () => type("CUP"),
    staleTime: timeRefresh,
    gcTime: timeCache,
    // Para o hacer fecth inicesarios, si el estado no cambia
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const priorityBigfive = useQuery({
    queryKey: ["Home", { priority: "bigfive" }],
    queryFn: () => priority("bigfive"),
    staleTime: timeRefresh,
    gcTime: timeCache,
    // Para o hacer fecth inicesarios, si el estado no cambia
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const prioritySudamerican = useQuery({
    queryKey: ["Home", { priority: "sudamerican" }],
    queryFn: () => priority("sudamerican"),
    staleTime: timeRefresh,
    gcTime: timeCache,
    // Para o hacer fecth inicesarios, si el estado no cambia
    // refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  return { typeLeague, typeCup, priorityBigfive, prioritySudamerican };
}

export function useCompetitionTable() {
  const { botonData } = useGetBotonData();
  const competitionTable = useQuery({
    queryKey: ["Clasificacion", { competition: botonData }],
    queryFn: () => table(botonData),
    staleTime: 2 * 60 * 1000,
  });

  return { competitionTable };
}
