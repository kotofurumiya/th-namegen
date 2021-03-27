import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'shizuha', lastName: 'aki' },
  { nameType: 'fullname', firstName: 'minoriko', lastName: 'aki' },
  { nameType: 'fullname', firstName: 'hina', lastName: 'kagiyama' },
  { nameType: 'fullname', firstName: 'nitori', lastName: 'kawashiro' },
  { nameType: 'fullname', firstName: 'momiji', lastName: 'inubashiri' },
  { nameType: 'fullname', firstName: 'sanae', lastName: 'kochiya' },
  { nameType: 'fullname', firstName: 'kanako', lastName: 'yasaka' },
  { nameType: 'fullname', firstName: 'suwako', lastName: 'moriya' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2007,
  titleNumber: 10,
  tags: ['windows'],
};

export default data;
