import API_URL from "./config";

export async function matches() {
  const url = `${API_URL}/matches/bigfive`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error: ${(res.status, res.statusText)}`);
  }

  return res.json();
}
