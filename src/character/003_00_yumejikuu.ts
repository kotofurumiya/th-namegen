import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'ellen' },
  { nameType: 'simple', name: 'kotohime' },
  { nameType: 'fullname', firstName: 'kana', lastName: 'anaberal' },
  { nameType: 'fullname', firstName: 'rikako', lastName: 'asakura' },
  { nameType: 'fullname', firstName: 'chiyuri', lastName: 'kitashirakawa' },
  { nameType: 'fullname', firstName: 'yumemi', lastName: 'okazaki' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 1997,
  titleNumber: 3,
  tags: ['pc-98'],
};

export default data;
