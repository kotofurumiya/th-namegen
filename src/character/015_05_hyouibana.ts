import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'shion', lastName: 'yorigami' },
  { nameType: 'fullname', firstName: 'joon', lastName: 'yorigami' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2017,
  titleNumber: 15.5,
  tags: ['windows'],
};

export default data;
