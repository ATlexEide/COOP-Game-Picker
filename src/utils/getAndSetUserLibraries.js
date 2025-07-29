import { getUserLibrary } from "./getUserLibrary";

export default async function getAndSetUserLibraries(setLibrary, ...users) {
  if (!users[0] || !users[1]) alert("Please input two usersIDs");
  if (users[0].steamid === users[1].steamid)
    alert("Please input two unique usersIDs");

  const lib1 = await getUserLibrary(users[0].steamid);
  if (!lib1 || !lib1.length) throw new Error("Couldnt get user1 library");
  console.log("lib1", lib1);
  const lib2 = await getUserLibrary(users[1].steamid);
  if (!lib2 || !lib2.length) throw new Error("Couldnt get user2 library");
  console.log("lib2", lib2);
  if (lib1 && lib2) setLibrary([lib1, lib2]);
  console.log(users[1]);
  console.log("users", users);
}
