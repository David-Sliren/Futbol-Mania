import { useQuery } from "@tanstack/react-query";
import { matches } from "../api/matches";

export function useFutbolQuery() {
  const match = useQuery({
    queryKey: ["matche", { bigFive: "bigFive" }],
    queryFn: matches,
  });

  return { match };
}
