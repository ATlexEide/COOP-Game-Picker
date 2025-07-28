export async function getUserLibrary(steamID, setLibrary) {
  await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/library/${steamID}`
  )
    .then((res) => res.json())
    .then((res) => setLibrary(res.response.games));
}
