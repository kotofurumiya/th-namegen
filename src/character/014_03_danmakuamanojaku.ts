import type { TouhouCharacter, TouhouTitleData } from '../types';

// no new characters
const characters: ReadonlyArray<TouhouCharacter> = [] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2014,
  titleNumber: 14.3,
  tags: ['windows'],
};

export default data;
