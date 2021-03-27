import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'rika' },
  { nameType: 'simple', name: 'meira' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 1997,
  titleNumber: 2,
  tags: ['pc-98'],
};

export default data;
