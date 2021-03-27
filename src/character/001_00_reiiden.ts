import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'singyoku' },
  { nameType: 'simple', name: 'yuugenmagan' },
  { nameType: 'simple', name: 'elis' },
  { nameType: 'simple', name: 'sariel' },
  { nameType: 'simple', name: 'mima' },
  { nameType: 'simple', name: 'kikuri' },
  { nameType: 'simple', name: 'kongara' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 1996,
  titleNumber: 1,
  tags: ['pc-98'],
};

export default data;
