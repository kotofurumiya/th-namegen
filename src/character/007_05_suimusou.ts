import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'suika', lastName: 'ibuki' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2004,
  titleNumber: 7.5,
  tags: ['windows', 'tasofro'],
};

export default data;
