import { selectCharacters } from './filter';
import type { TouhouCharacter } from './types';

export * from './filter';

export type NameProcessContext = {
  readonly character: TouhouCharacter;
  readonly treatedAs: 'firstName' | 'lastName';
};

export type TouhouNameGenOptions = {
  readonly delimiter?: string;
  readonly nameChunkConverter?: (name: string, context?: NameProcessContext) => string;
  readonly characterCandidates?: ReadonlyArray<TouhouCharacter>;
  readonly randomFunc?: (min: number, max: number) => number;
};

const random = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

const identity = (name: string) => name;

const pickFirstNameLike = (character: TouhouCharacter) => {
  switch (character.nameType) {
    case 'simple':
      return character.name;
    case 'fullname':
      return character.firstName;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = character;
      return '';
    }
  }
};

const pickLastNameLike = (character: TouhouCharacter) => {
  switch (character.nameType) {
    case 'simple':
      return character.name;
    case 'fullname':
      return character.lastName;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = character;
      return '';
    }
  }
};

const allCharacters = selectCharacters();

/**
 * Generate random name string e.g. 'reimu-kirisame', 'yuyuko-yakumo'.
 * @param options
 * @param options.delimiter delimiter string. default is '-'
 * @param options.nameChunkConverter converter function. (name: string) => string
 * @returns random name string
 */
export const generateName = (options: TouhouNameGenOptions = {}): string => {
  const delimiter = options.delimiter ?? '-';
  const randomFunc = options.randomFunc ?? random;
  const candidates = options.characterCandidates ?? allCharacters;
  const converter = options.nameChunkConverter ?? identity;

  if (candidates.length === 0) {
    throw new Error('`characterCandidates` is empty. It must contains some characters.');
  }

  const characterA = candidates[randomFunc(0, candidates.length - 1)];
  const characterB = candidates[randomFunc(0, candidates.length - 1)];

  const generated = [
    converter(pickFirstNameLike(characterA), { character: characterA, treatedAs: 'firstName' }),
    converter(pickLastNameLike(characterB), { character: characterB, treatedAs: 'lastName' }),
  ].join(delimiter);

  return generated;
};
