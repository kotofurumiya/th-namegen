export type TouhouCharacter =
  | {
      readonly nameType: 'simple';
      readonly name: string;
    }
  | {
      readonly nameType: 'fullname';
      readonly firstName: string;
      readonly middleName?: string;
      readonly lastName: string;
      readonly aka?: string;
    };

export type TouhouTitleTag = 'common' | 'pc-98' | 'windows' | 'book' | 'hifuu' | 'tasofro';

export type TouhouTitleData = {
  readonly characters: ReadonlyArray<TouhouCharacter>;
  readonly titleNumber?: number;
  readonly releasedYear?: number;
  readonly tags: TouhouTitleTag[];
};
