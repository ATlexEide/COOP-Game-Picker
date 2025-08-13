export async function getUserProfile(steamID, setUser) {
  await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/user/${steamID}`)
    .then((res) => res.json())
    .then((res) => res.response.players[0])
    .then((res) => {
      setUser(res);
    });
}
