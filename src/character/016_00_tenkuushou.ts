import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'eternity', lastName: 'larva' },
  { nameType: 'fullname', firstName: 'aunn', lastName: 'komano' },
  { nameType: 'fullname', firstName: 'narumi', lastName: 'yatadera' },
  { nameType: 'fullname', firstName: 'mai', lastName: 'teireida' },
  { nameType: 'fullname', firstName: 'satono', lastName: 'nishida' },
  { nameType: 'fullname', firstName: 'okina', lastName: 'matara' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2017,
  titleNumber: 16,
  tags: ['windows'],
};

export default data;
