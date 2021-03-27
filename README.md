# th-namegen

Random name string generater from Touhou Project.

## Output Samples

```
reimu-kirisame
remilia-izayoi
marisa-cirno
```

## Progress

| Category           | Status       | 
|:-------------------|:-------------|
| PC98-Games         | 🚧 Not yet   |
| TH6-TH17           | ✅ done      |
| TH17.5 Gouyokuibun | 🚧 Not yet   |
| TH18 Kouryuudou    | 🚧 Not yet   |
| Books              | ✅ Suichouka |
| CDs                | ✅ Hifuu     |

See [docs/covered_titles.md](docs/covered_titles.md) for more detailed status.

## Support

| Engine  | Version          | Status       | Note |
|:--------|:-----------------|:-------------|:-----:|
| Browser | legacy (e.g. IE) | 🚫 never      | \*1 |
| Browser | es2018           | ✅ supported  |     |
| Node.js | older than 13.14 | 🚫 never      |     |
| Node.js | 13.14+           | ✅ supported  |     |
| Node.js | 14.x             | ✅ supported  |     |
| Node.js | 15.x             | ✅ supported  |     |
| Deno    | any              | 🚧 not yet    |     |

\*1: Not supported officially on Internet Explorer but it may be runnable via transpilers(tsc, babel).

## Usage(Node.js)

Install:

```
npm install @kotofurumiya/th-namegen
```

Use it:

```typescript
// syntax for TypeScript or modern JavaScript
import { generateName } from 'th-namegen';

// syntax for traditional JavaScript
// const { generateName } = require('th-namegen');

const name = generateName();
console.log(name); // e.g. `patchouli-scarlet`
```

## Usage(Browser)

Copy [build/th-namegen-web.js](build/th-namegen-web.js) to your project.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Your Web Page</title>

    <!-- insert script file -->
    <script src="th-namegen-web.js"></script>

    <!-- then, write your code -->
    <script>
      const name = thNameGen.generateName();
    </script>
  </head>
  <body>
    Your Contents
  </body>
</html>
```

## API

### generateName(options)

Generates random name. You can specify some options.

```typescript
// simple use
// generates like `reimu-kirisame`
const name1 = generateName();

// with options
// generates like `reimu:kirisame`
const name2 = generateName({
  delimiter: ':'
});

// with options
// generates like `Reimu Kirisame`
const name2 = generateName({
  delimiter: ' ',
  nameChunkConverter: (name) => name[0].toUpperCase() + name.slice(1)
});
```

You can use filters to limit character source.

```typescript
import { generateName, selectCharacters, oneOfTitleTags } from 'th-namegen';

// choose your favorite!
const myFavorites = selectCharacters([oneOfTitleTags(['pc-98'])]);

// then generate name with only PC-98 characters!
const name = generateName({
  characterCandidates: myFavorites
});
```

For more information, see [docs/filters.md](docs/filters.md).

All options:

```typescript
type TouhouNameGenOptions = {
  // name delimiter. default is '-' (hyphen)
  delimiter?: string;

  // coverter for each name chunk.
  nameChunkConverter?: (name: string, context?: NameProcessContext) => string;

  // you can specify character's data 
  characterCandidates?: ReadonlyArray<TouhouCharacter>;

  // for internal debug. You don't need use this.
  randomFunc?: (min: number, max: number) => number;
};

// 2nd arg of nameChunkConverter
type NameProcessContext = {
  character: TouhouCharacter;
  treatedAs: 'firstName' | 'lastName';
};

// character data
type TouhouCharacter =
  | {
      nameType: 'simple';
      name: string;
    }
  | {
      nameType: 'fullname';
      firstName: string;
      middleName?: string;
      lastName: string;
      aka?: string; //  e.g.'udonge' for Udongein
    };
```

## Contribution

Requires Node.js v14+ for development

1. clone this repoitory
1. change codes
1. run `npm run format`
1. run `npm run lint`
1. run `npm run test`
1. `git add` changes(must includes `build/` directory)
1. commit with [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)
    1. example1: `git commit -m "fix: make Koishi discoverable"`
    1. example2: `git commit -m "feat: add beer for ZUN"`
    1. example3: `git commit -m "refactor: sell unused magick items to Kourindou"`
1. create Pull Request