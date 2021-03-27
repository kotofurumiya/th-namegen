import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'kyouko', lastName: 'kasodani' },
  { nameType: 'fullname', firstName: 'yoshika', lastName: 'miyako' },
  { nameType: 'fullname', firstName: 'seiga', lastName: 'kaku' },
  { nameType: 'fullname', firstName: 'tojiko', lastName: 'soga' },
  { nameType: 'fullname', firstName: 'futo', lastName: 'mononobe' },
  { nameType: 'fullname', firstName: 'miko', lastName: 'toyosatomimi' },
  { nameType: 'fullname', firstName: 'mamizou', lastName: 'futatsuiwa' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2011,
  titleNumber: 13,
  tags: ['windows'],
};

export default data;
