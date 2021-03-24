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

// src/character/index.ts
var characters = [...common_default, ...koumakyou_default];

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
  const delimiter = options.delimiter ?? "-";
  const randomFunc = options.randomFunc ?? random;
  const candidates = options.characterCandidates ?? characters;
  const converter = options.nameChunkConverter ?? identity;
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
