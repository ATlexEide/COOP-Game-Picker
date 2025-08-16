export async function getUserLibrary(steamID, setError) {
  return await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/user/${steamID}/library`
  )
    .then((res) => res.json())
    .then((res) => res.response.games)
    .catch((err) => {
      if (setError) setError(err);
      throw new Error(err);
    });
}
