export default async function getUserProfile(steamID, setUser) {
  await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/user/${steamID}/profile`)
    .then((res) => res.json())
    .then((res) => res.response.players[0])
    .then((res) => {
      setUser(res);
    });
}
