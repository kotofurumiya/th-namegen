import type { TouhouCharacter } from '../types';

const eiyashou: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'fullname', firstName: 'wriggle', lastName: 'nightbug' },
  { nameType: 'fullname', firstName: 'mystia', lastName: 'lorelei' },
  { nameType: 'simple', name: 'chen' },
  { nameType: 'fullname', firstName: 'keine', lastName: 'kamishirasawa' },
  { nameType: 'fullname', firstName: 'tewi', lastName: 'inaba' },
  { nameType: 'fullname', firstName: 'reisen', middleName: 'udongein', lastName: 'inaba', aka: 'udonge' },
  { nameType: 'fullname', firstName: 'eirin', lastName: 'yagokoro' },
  { nameType: 'fullname', firstName: 'kaguya', lastName: 'houraisan' },
  { nameType: 'fullname', firstName: 'mokou', lastName: 'fujiwara' },
] as const;

export default eiyashou;
