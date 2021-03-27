import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'kokoro', lastName: 'hatano' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2013,
  titleNumber: 13.5,
  tags: ['windows', 'tasofro'],
};

export default data;
