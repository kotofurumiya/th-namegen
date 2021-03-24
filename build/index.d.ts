import { TouhouCharacter } from './types';
export declare type NameProcessContext = {
  readonly character: TouhouCharacter;
  readonly treatedAs: 'firstName' | 'lastName';
};
export declare type TouhouNameGenOptions = {
  readonly delimiter?: string;
  readonly nameChunkConverter?: (name: string, context?: NameProcessContext) => string;
  readonly characterCandidates?: ReadonlyArray<TouhouCharacter>;
  readonly randomFunc?: (min: number, max: number) => number;
};
/**
 * Generate random name string e.g. 'reimu-kirisame', 'yuyuko-yakumo'.
 * @param options
 * @param options.delimiter delimiter string. default is '-'
 * @param options.nameChunkConverter converter function. (name: string) => string
 * @returns random name string
 */
export declare const generateName: (options?: TouhouNameGenOptions) => string;
