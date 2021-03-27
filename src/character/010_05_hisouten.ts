import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'tenshi', lastName: 'hinanai' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2008,
  titleNumber: 10.5,
  tags: ['windows'],
};

export default data;
