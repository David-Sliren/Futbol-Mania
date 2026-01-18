export const fetchPrincipal = async ({ url }) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "X-Auth-Token": process.env.FOOTBALL_API_KEY },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status + response.statusText}`);
  }

  return response.json();
};
