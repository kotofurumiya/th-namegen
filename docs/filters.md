# filters

## Basics

`selectCharacters` accepts list of filters, and returns characters who are passed **all filters**.

```typescript
import {
  generateName,
  selectCharacters,
  oneOfTitleTags,
  yearFrom,
  yearTo
} from 'th-namegen';

// no filters, which means select all available characters.
const chars1 = selectCharacters();

// characters after 2010(includes 2010 itself)
const chars2 = selectCharacters([yearFrom(2010)]);

// characters released in 2010-2012
const chars3 = selectCharacters([yearFrom(2010), yearTo(2012)]);

// manga characters released in 2010-2012
const chars4 = selectCharacters([
  oneOfTitleTags(['book']),
  yearFrom(2010),
  yearTo(2012)
]);
```

## oneOfTitleTags(tags)

`oneOfTitleTags` tests a title includes one of `tags`.

```typescript
import { generateName, selectCharacters, oneOfTitleTags } from 'th-namegen';

const pc98 = selectCharacters([oneOfTitleTags(['pc-98'])]);

const name = generateName({
  characterCandidates: pc98
});
```

Available tags are:

| tag     | target                         |
|---------|:-------------------------------|
| common  | Reimu and Marisa               |
| pc-98   | PC-98 games                    |
| windows | Windows games                  |
| tasofro | made by Tasogare Frontier      |
| book    | novel, manga                   |
| hifuu   | Hifuu Club (excludes Sumireko) |

Examples:

- Kaikidan: \['pc-98'\]
- Koumakyou: \['windows'\]
- Hisouten: \['windows', 'tasofro'\]
- Suzunaan: \['book'\]

## noneOfTitleTags(tags)

`noneOfTitleTags` tests a title includes **none** of `tags`.

```typescript
import { generateName, selectCharacters, noneOfTitleTags } from 'th-namegen';

// only game characters
const games = selectCharacters([noneOfTitleTags(['book', 'hifuu'])]);

const name = generateName({
  characterCandidates: myFavorites
});
```

## yearFrom(year)

`yearFrom` tests a title released in `year` or after.

```typescript
import { generateName, selectCharacters, yearFrom } from 'th-namegen';

// characters 2015-
const chars = selectCharacters([yearFrom(2015)]);

const name = generateName({
  characterCandidates: chars
});
```

Note: `common` characters(Reimu, Marisa) always pass since they have no release year.

## yearTo(year)

`yearTo` tests a title released in `year` or before.

```typescript
import { generateName, selectCharacters, yearFrom } from 'th-namegen';

// characters -2010
const chars = selectCharacters([yearTo(2010)]);

const name = generateName({
  characterCandidates: chars
});
```

Note: `common` characters(Reimu, Marisa) always pass since they have no release year.

## Custom Filters

You can create your custom filters.

```typescript
type Filter = (character: TouhouCharacter, title: TouhouTitleData) => boolean;
```

If you want to know what `TouhouCharacter` and `TouhouTitleData` means, See [/src/types.ts](../src/types.ts).