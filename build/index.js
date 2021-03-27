// src/character/000_00_common.ts
var common = [
  {nameType: "fullname", firstName: "reimu", lastName: "hakurei"},
  {nameType: "fullname", firstName: "marisa", lastName: "kirisame"}
];
var common_default = common;

// src/character/006_00_koumakyou.ts
var koumakyou = [
  {nameType: "simple", name: "rumia"},
  {nameType: "simple", name: "daiyousei"},
  {nameType: "simple", name: "cirno"},
  {nameType: "fullname", firstName: "hong", lastName: "meiling"},
  {nameType: "simple", name: "koakuma"},
  {nameType: "fullname", firstName: "patchouli", lastName: "knowledge"},
  {nameType: "fullname", firstName: "sakuya", lastName: "izayoi"},
  {nameType: "fullname", firstName: "remilia", lastName: "scarlet"},
  {nameType: "fullname", firstName: "flandre", lastName: "scarlet"}
];
var koumakyou_default = koumakyou;

// src/character/007_00_youyoumu.ts
var youyoumu = [
  {nameType: "fullname", firstName: "letty", lastName: "whiterock"},
  {nameType: "simple", name: "chen"},
  {nameType: "fullname", firstName: "alice", lastName: "margatroid"},
  {nameType: "fullname", firstName: "lily", lastName: "white"},
  {nameType: "fullname", firstName: "lunasa", lastName: "prismriver"},
  {nameType: "fullname", firstName: "merlin", lastName: "prismriver"},
  {nameType: "fullname", firstName: "lyrica", lastName: "prismriver"},
  {nameType: "fullname", firstName: "youmu", lastName: "konpaku"},
  {nameType: "fullname", firstName: "yuyuko", lastName: "saigyouji"},
  {nameType: "fullname", firstName: "ran", lastName: "yakumo"},
  {nameType: "fullname", firstName: "yukari", lastName: "yakumo"}
];
var youyoumu_default = youyoumu;

// src/character/007_05_suimusou.ts
var suimusou = [
  {nameType: "fullname", firstName: "suika", lastName: "ibuki"}
];
var suimusou_default = suimusou;

// src/character/008_00_eiyashou.ts
var eiyashou = [
  {nameType: "fullname", firstName: "wriggle", lastName: "nightbug"},
  {nameType: "fullname", firstName: "mystia", lastName: "lorelei"},
  {nameType: "simple", name: "chen"},
  {nameType: "fullname", firstName: "keine", lastName: "kamishirasawa"},
  {nameType: "fullname", firstName: "tewi", lastName: "inaba"},
  {nameType: "fullname", firstName: "reisen", middleName: "udongein", lastName: "inaba", aka: "udonge"},
  {nameType: "fullname", firstName: "eirin", lastName: "yagokoro"},
  {nameType: "fullname", firstName: "kaguya", lastName: "houraisan"},
  {nameType: "fullname", firstName: "mokou", lastName: "fujiwara"}
];
var eiyashou_default = eiyashou;

// src/character/index.ts
var characters = [...common_default, ...koumakyou_default, ...youyoumu_default, ...suimusou_default, ...eiyashou_default];

// src/index.ts
var random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
var identity = (name) => name;
var pickFirstNameLike = (character) => {
  switch (character.nameType) {
    case "simple":
      return character.name;
    case "fullname":
      return character.firstName;
    default: {
      const check = character;
      return "";
    }
  }
};
var pickLastNameLike = (character) => {
  switch (character.nameType) {
    case "simple":
      return character.name;
    case "fullname":
      return character.lastName;
    default: {
      const check = character;
      return "";
    }
  }
};
var generateName = (options = {}) => {
  var _a, _b, _c, _d;
  const delimiter = (_a = options.delimiter) != null ? _a : "-";
  const randomFunc = (_b = options.randomFunc) != null ? _b : random;
  const candidates = (_c = options.characterCandidates) != null ? _c : characters;
  const converter = (_d = options.nameChunkConverter) != null ? _d : identity;
  const characterA = candidates[randomFunc(0, candidates.length - 1)];
  const characterB = candidates[randomFunc(0, candidates.length - 1)];
  const generated = [
    converter(pickFirstNameLike(characterA), {character: characterA, treatedAs: "firstName"}),
    converter(pickLastNameLike(characterB), {character: characterB, treatedAs: "lastName"})
  ].join(delimiter);
  return generated;
};
export {
  generateName
};
