import type { TouhouCharacter } from '../types';

const suimusou: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'suika', lastName: 'ibuki' },
] as const;

export default suimusou;
