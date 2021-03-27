import type { TouhouCharacter } from '../types';

const youyoumu: ReadonlyArray<TouhouCharacter> = [
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

export default youyoumu;
