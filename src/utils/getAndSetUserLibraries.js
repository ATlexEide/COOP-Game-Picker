import { getUserLibrary } from "./getUserLibrary";

export default async function getAndSetUserLibraries(
  setError,
  setStatus,
  setLibrary,
  ...users
) {
  if (!users[0] || !users[1]) alert("Please input two usersIDs");
  if (users[0].steamid === users[1].steamid) {
    alert("Please input two unique usersIDs");
    return;
  }

  setStatus("Getting libraries");
  console.log("Getting libraries");
  const lib1 = await getUserLibrary(users[0].steamid, setError);
  if (!lib1 || !lib1.length) {
    setError("Failed to get user1's library");
    throw new Error("Couldnt get user1 library");
  }
  const lib2 = await getUserLibrary(users[1].steamid, setError);
  if (!lib2 || !lib2.length) {
    setError("Failed to get user2's library");
    throw new Error("Couldnt get user2 library");
  }
  if (lib1 && lib2) setLibrary([lib1, lib2]);
  setStatus("");
}
