import { fetchPrincipal } from "./fetchPrincipal.js";

export async function fetchCompetitions() {
  const data = await fetchPrincipal({
    url: "https://api.football-data.org/v4/competitions",
  });

  return data.competitions;
}
