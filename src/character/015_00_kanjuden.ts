import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'seiran' },
  { nameType: 'simple', name: 'ringo' },
  { nameType: 'fullname', firstName: 'doremy', lastName: 'sweet' },
  { nameType: 'fullname', firstName: 'sagume', lastName: 'kishin' },
  { nameType: 'simple', name: 'clownpiece' },
  { nameType: 'simple', name: 'junko' },
  { nameType: 'fullname', firstName: 'hecatia', lastName: 'lapislazuli' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2015,
  titleNumber: 15,
  tags: ['windows'],
};

export default data;
