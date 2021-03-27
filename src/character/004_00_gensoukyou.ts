import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'orange' },
  { nameType: 'simple', name: 'kurumi' },
  { nameType: 'simple', name: 'elly' },
  // { nameType: 'simple', name: 'yuuka' },
  { nameType: 'simple', name: 'mugetsu' },
  { nameType: 'simple', name: 'gengetsu' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 1998,
  titleNumber: 4,
  tags: ['pc-98'],
};

export default data;
