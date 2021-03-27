import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'nazrin' },
  { nameType: 'fullname', firstName: 'kogasa', lastName: 'tatara' },
  { nameType: 'fullname', firstName: 'ichirin', lastName: 'kumoi' },
  { nameType: 'fullname', firstName: 'minamitsu', lastName: 'murasa' },
  { nameType: 'fullname', firstName: 'shou', lastName: 'toramaru' },
  { nameType: 'fullname', firstName: 'byakuren', lastName: 'hijiri' },
  { nameType: 'fullname', firstName: 'utsuho', lastName: 'reiuji' },
  { nameType: 'fullname', firstName: 'nue', lastName: 'houjuu' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2009,
  titleNumber: 12,
  tags: ['windows'],
};

export default data;
