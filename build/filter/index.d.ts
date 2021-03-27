import type { TouhouCharacter, TouhouTitleData, TouhouTitleTag } from '../types';
export declare type Filter = (character: TouhouCharacter, title: TouhouTitleData) => boolean;
export declare const oneOfTitleTags: (tags: TouhouTitleTag[]) => Filter;
export declare const noneOfTitleTags: (tags: TouhouTitleTag[]) => Filter;
export declare const yearFrom: (year: number) => Filter;
export declare const yearTo: (year: number) => Filter;
export declare const selectCharacters: (filters?: Filter[], options?: {
    titles?: ReadonlyArray<TouhouTitleData>;
}) => TouhouCharacter[];
