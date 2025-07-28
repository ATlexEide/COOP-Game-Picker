export async function getGameDetails(appID) {
  await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
  )
    .then((res) => res.json())
    .then((res) => res[appID].data)
    .then((res) => {
      console.log(res);
    });
}
