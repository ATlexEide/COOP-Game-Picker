import { getUserLibrary } from "./getUserLibrary";

export default async function getAndSetUserLibraries(setLibrary, ...users) {
  console.log(users[0].steamid);
  const lib1 = await getUserLibrary(users[0].steamid);
  const lib2 = await getUserLibrary(users[1].steamid);
  setLibrary([lib1, lib2]);
  console.log("users", users);
  console.log("lib1", lib1);
  console.log("lib2", lib2);
}
