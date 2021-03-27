import type { TouhouCharacter, TouhouTitleData } from '../types';

// no new characters
const characters: ReadonlyArray<TouhouCharacter> = [] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2018,
  titleNumber: 16.5,
  tags: ['windows'],
};

export default data;
