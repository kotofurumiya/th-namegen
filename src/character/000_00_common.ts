import type { TouhouCharacter } from '../types';

const common: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'reimu', lastName: 'hakurei' },
  { nameType: 'fullname', firstName: 'marisa', lastName: 'kirisame' },
] as const;

export default common;
