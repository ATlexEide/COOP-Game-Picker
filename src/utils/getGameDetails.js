export default async function getGameDetails(appID) {
  try {
    const req = await fetch(
      `http://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
    );
    const res = await req.json();
    return res[appID].data;
  } catch (error) {
    console.log(error);
  }
}
