import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'sara' },
  { nameType: 'simple', name: 'louise' },
  // { nameType: 'simple', name: 'alice' },
  { nameType: 'simple', name: 'yuki' },
  { nameType: 'simple', name: 'mai' },
  { nameType: 'simple', name: 'yumeko' },
  { nameType: 'simple', name: 'shinki' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 1998,
  titleNumber: 5,
  tags: ['pc-98'],
};

export default data;
