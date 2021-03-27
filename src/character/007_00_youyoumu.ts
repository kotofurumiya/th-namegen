import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'letty', lastName: 'whiterock' },
  { nameType: 'simple', name: 'chen' },
  { nameType: 'fullname', firstName: 'alice', lastName: 'margatroid' },
  { nameType: 'fullname', firstName: 'lily', lastName: 'white' },
  { nameType: 'fullname', firstName: 'lunasa', lastName: 'prismriver' },
  { nameType: 'fullname', firstName: 'merlin', lastName: 'prismriver' },
  { nameType: 'fullname', firstName: 'lyrica', lastName: 'prismriver' },
  { nameType: 'fullname', firstName: 'youmu', lastName: 'konpaku' },
  { nameType: 'fullname', firstName: 'yuyuko', lastName: 'saigyouji' },
  { nameType: 'fullname', firstName: 'ran', lastName: 'yakumo' },
  { nameType: 'fullname', firstName: 'yukari', lastName: 'yakumo' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2003,
  titleNumber: 7,
  tags: ['windows'],
};

export default data;
