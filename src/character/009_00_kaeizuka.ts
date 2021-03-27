import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'aya', lastName: 'syameimaru' },
  { nameType: 'fullname', firstName: 'medicine', lastName: 'melancholy' },
  { nameType: 'fullname', firstName: 'yuuka', lastName: 'kazami' },
  { nameType: 'fullname', firstName: 'komachi', lastName: 'onozuka' },
  { nameType: 'fullname', firstName: 'eiki', lastName: 'shiki' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2005,
  titleNumber: 9,
  tags: ['windows'],
};

export default data;
