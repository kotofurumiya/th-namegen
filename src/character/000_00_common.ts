import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'reimu', lastName: 'hakurei' },
  { nameType: 'fullname', firstName: 'marisa', lastName: 'kirisame' },
] as const;

const data: TouhouTitleData = {
  characters,
  tags: ['common'],
};

export default data;
