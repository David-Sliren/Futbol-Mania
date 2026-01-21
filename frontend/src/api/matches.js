import API_URL from "./config";

export async function matches() {
  const url = `${API_URL}/matches`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}

export async function matchesCompetitions(id) {
  const url = `${API_URL}/matches?competition=${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}
