import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'sumireko', lastName: 'usami' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2015,
  titleNumber: 14.5,
  tags: ['windows', 'tasofro'],
};

export default data;
