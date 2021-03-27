import type { TouhouCharacter, TouhouTitleData, TouhouTitleTag } from '../types';
import { allTitleData } from '../character';

export type Filter = (character: TouhouCharacter, title: TouhouTitleData) => boolean;

export const oneOfTitleTags = (tags: TouhouTitleTag[]): Filter => {
  return (character, title) => {
    return tags.some((t) => title.tags.includes(t));
  };
};

export const noneOfTitleTags = (tags: TouhouTitleTag[]): Filter => {
  return (character, title) => {
    return !tags.some((t) => title.tags.includes(t));
  };
};

export const yearFrom = (year: number): Filter => {
  return (character, title) => {
    return title.releasedYear ? title.releasedYear >= year : true;
  };
};

export const yearTo = (year: number): Filter => {
  return (character, title) => {
    return title.releasedYear ? title.releasedYear <= year : true;
  };
};

export const selectCharacters = (filters: Filter[] = [], options: { titles?: ReadonlyArray<TouhouTitleData> } = {}) => {
  const allCharacters = (options.titles || allTitleData).flatMap((title) =>
    title.characters.map((character) => ({
      title,
      character,
    }))
  );

  const selected = filters
    .reduce((prev, f) => prev.filter((char) => f(char.character, char.title)), allCharacters)
    .map((char) => char.character);

  return selected;
};
