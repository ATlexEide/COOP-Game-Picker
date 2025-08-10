export async function getUserLibrary(steamID, setError) {
  return await fetch(
    `http://undecidedgamespinnerserver-production.up.railway.app/library/${steamID}`
  )
    .then((res) => res.json())
    .then((res) => res.response.games)
    .catch((err) => {
      if (setError) setError(err);
      throw new Error(err);
    });
}
