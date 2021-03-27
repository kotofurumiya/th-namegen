import type { TouhouCharacter, TouhouTitleData } from '../types';

const characters: ReadonlyArray<TouhouCharacter> = [
  { nameType: 'simple', name: 'wakasagihime' },
  { nameType: 'simple', name: 'sekibanki' },
  { nameType: 'fullname', firstName: 'kagerou', lastName: 'imaizumi' },
  { nameType: 'fullname', firstName: 'benben', lastName: 'tsukumo' },
  { nameType: 'fullname', firstName: 'yatsuhashi', lastName: 'tsukumo' },
  { nameType: 'fullname', firstName: 'seija', lastName: 'kijin' },
  { nameType: 'fullname', firstName: 'sukuna', lastName: 'shinmyoumaru' },
] as const;

const data: TouhouTitleData = {
  characters,
  releasedYear: 2013,
  titleNumber: 14,
  tags: ['windows'],
};

export default data;
