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
