import { TouhouCharacter } from '../types';

const koumakyou: ReadonlyArray<TouhouCharacter> = [
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

export default koumakyou;
