export const genres = {
  Array() {
    const arr = [];
    for (const [id, desc] of Object.entries(this)) {
      if (typeof desc == "string") arr.push({ id, desc });
    }
    return arr;
  },
  CheckboxArray() {
    const ignoredIDs = [37, 51, 53, 55, 57];
    const arr = [];
    for (const [key, value] of Object.entries(this)) {
      if (typeof value == "string" && !ignoredIDs.includes(Number(key)))
        arr.push({ id: key, desc: value });
    }
    return arr;
  },
  1: "Action",
  2: "Strategy",
  3: "RPG",
  4: "Casual",
  9: "Racing",
  18: "Sports",
  23: "Indie",
  25: "Adventure",
  28: "Simulation",
  29: "Massively Multiplayer",
  37: "Free To Play",
  51: "Animation & Modeling",
  53: "Design & Illustration",
  55: "Photo Editing",
  57: "Utilities",
  70: "Early Access"
};
