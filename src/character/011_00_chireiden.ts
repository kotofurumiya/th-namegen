import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'kisume' },
  { nameType: 'fullname', firstName: 'yamame', lastName: 'kurodani' },
  { nameType: 'fullname', firstName: 'parsee', lastName: 'mizuhashi' },
  { nameType: 'fullname', firstName: 'yuugi', lastName: 'hoshiguma' },
  { nameType: 'fullname', firstName: 'satori', lastName: 'komeiji' },
  { nameType: 'fullname', firstName: 'rin', lastName: 'kaenbyou' },
  { nameType: 'fullname', firstName: 'utsuho', lastName: 'reiuji' },
  { nameType: 'fullname', firstName: 'koishi', lastName: 'komeiji' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2008,
  titleNumber: 11,
  tags: ['windows'],
};

export default data;
