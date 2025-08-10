export const categories = {
  Array() {
    const arr = [];
    for (const [id, desc] of Object.entries(this)) {
      if (typeof desc == "string") arr.push({ id, desc });
    }
    return arr;
  },
  CheckboxArray() {
    const ignoredIDs = [
      8, 10, 15, 16, 17, 19, 22, 23, 25, 29, 35, 40, 51, 61, 63, 68, 69, 70
    ];
    const arr = [];
    for (const [key, value] of Object.entries(this)) {
      if (typeof value == "string" && !ignoredIDs.includes(Number(key)))
        arr.push({ id: key, desc: value });
    }
    return arr;
  },
  1: "Multi-player",
  2: "Single-player",
  8: "Valve Anti-Cheat enabled",
  9: "Co-op",
  10: "Game demo",
  13: "Captions available",
  14: "Commentary available",
  15: "Stats",
  16: "Includes Source SDK",
  17: "Includes level editor",
  18: "Partial Controller Support",
  19: "Mods",
  20: "MMO",
  22: "Steam Achievements",
  23: "Steam Cloud",
  24: "Shared/Split Screen",
  25: "Steam leaderboards",
  27: "Cross-Platform Multiplayer",
  28: "Full controller support",
  29: "Steam Trading Cards",
  30: "Steam Workshop",
  31: "VR Support",
  35: "In-App Purchases",
  36: "Online PvP",
  37: "Shared/Split Screen PvP",
  38: "Online Co-op",
  39: "Shared/Split Screen Co-op",
  40: "SteamVR Collectibles",
  41: "Remote Play on Phone",
  42: "Remote Play on Tablet",
  43: "Remote Play on TV",
  44: "Remote Play Together",
  47: "LAN PvP",
  48: "LAN Co-op",
  49: "PvP",
  51: "Steam Workshop",
  52: "Tracked Controller Support",
  53: "VR Supported",
  54: "VR Only",
  61: "HDR available",
  62: "Family Sharing",
  63: "Steam Timeline",
  64: "Adjustable Text Size",
  65: "Subtitle Options",
  66: "Color Alternatives",
  67: "Camera Comfort",
  68: "Custom Volume Controls",
  69: "Stereo Sound",
  70: "Surround Sound",
  72: "Chat Speech-to-text",
  74: "Playable without Timed Input",
  75: "Keyboard Only Option",
  78: "Adjustable Difficulty",
  79: "Save Anytime"
};
