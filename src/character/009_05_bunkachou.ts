import type { TouhouCharacter, TouhouTitleData } from '../types';

// Bunkachou has no new characters
const characters: ReadonlyArray<TouhouCharacter> = [] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2005,
  titleNumber: 9.5,
  tags: ['windows'],
};

export default data;
