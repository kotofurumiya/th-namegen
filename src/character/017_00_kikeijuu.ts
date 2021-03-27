import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'eika', lastName: 'ebisu' },
  { nameType: 'fullname', firstName: 'urumi', lastName: 'ushizaki' },
  { nameType: 'fullname', firstName: 'kutara', lastName: 'niwatari' },
  { nameType: 'fullname', firstName: 'yachie', lastName: 'kicchou' },
  { nameType: 'fullname', firstName: 'mayumi', lastName: 'joutouguu' },
  { nameType: 'fullname', firstName: 'keiki', lastName: 'haniyasushin' },
  { nameType: 'fullname', firstName: 'saki', lastName: 'kurokoma' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2019,
  titleNumber: 17,
  tags: ['windows'],
};

export default data;
