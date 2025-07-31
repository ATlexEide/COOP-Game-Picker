import { getUserLibrary } from "./getUserLibrary";

export default async function getAndSetUserLibraries(
  setError,
  setStatus,
  setLibrary,
  ...users
) {
  if (!users[0] || !users[1]) alert("Please input two usersIDs");
  if (users[0].steamid === users[1].steamid)
    alert("Please input two unique usersIDs");

  setStatus("Getting libraries");
  console.log("Getting libraries");
  const lib1 = await getUserLibrary(setError, users[0].steamid);
  if (!lib1 || !lib1.length) throw new Error("Couldnt get user1 library");
  const lib2 = await getUserLibrary(setError, users[1].steamid);
  if (!lib2 || !lib2.length) throw new Error("Couldnt get user2 library");
  if (lib1 && lib2) setLibrary([lib1, lib2]);
}
