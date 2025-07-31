export async function getUserLibrary(setError, steamID) {
  return await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/library/${steamID}`
  )
    .then((res) => res.json())
    .then((res) => res.response.games)
    .catch((err) => {
      setError(err);
      throw new Error(err);
    });
}
