import type { TouhouCharacter, TouhouTitleData } from '../types';

// no new characters
const characters: ReadonlyArray<TouhouCharacter> = [] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2009,
  titleNumber: 12.3,
  tags: ['windows', 'tasofro'],
};

export default data;
