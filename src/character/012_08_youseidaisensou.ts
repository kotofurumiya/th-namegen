import type { TouhouCharacter, TouhouTitleData } from '../types';

// no new characters
const characters: ReadonlyArray<TouhouCharacter> = [] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2010,
  titleNumber: 12.8,
  tags: ['windows'],
};

export default data;
