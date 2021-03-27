import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'hatate', lastName: 'himekaidou' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2010,
  titleNumber: 12.5,
  tags: ['windows'],
};

export default data;
