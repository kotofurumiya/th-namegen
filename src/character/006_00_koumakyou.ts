import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'rumia' },
  { nameType: 'simple', name: 'daiyousei' },
  { nameType: 'simple', name: 'cirno' },
  { nameType: 'fullname', firstName: 'hong', lastName: 'meiling' },
  { nameType: 'simple', name: 'koakuma' },
  { nameType: 'fullname', firstName: 'patchouli', lastName: 'knowledge' },
  { nameType: 'fullname', firstName: 'sakuya', lastName: 'izayoi' },
  { nameType: 'fullname', firstName: 'remilia', lastName: 'scarlet' },
  { nameType: 'fullname', firstName: 'flandre', lastName: 'scarlet' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2002,
  titleNumber: 6,
  tags: ['windows'],
};

export default data;
