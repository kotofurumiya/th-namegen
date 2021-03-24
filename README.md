# th-namegen

Random name string generater from Touhou Project.

## Output Samples

```
reimu-kirisame
remilia-izayoi
marisa-cirno
```

## Progress

- [x] Koumakyou
- [ ] Youyoumu
- [ ] Suimusou
- [ ] Eiyashou
- [ ] Kaeizuka
- [ ] Bunkachou
- [ ] Fuujinroku
- [ ] Hisouten
- [ ] Chireiden
- [ ] ... rest many games

## Usage(Node.js)

Install:

```
npm install th-namegen
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

All options:

```typescript
type TouhouNameGenOptions = {
  // name delimiter. default is '-' (hyphen)
  delimiter?: string;

  // coverter for each name chunk.
  nameChunkConverter?: (name: string, context?: NameProcessContext) => string;

  // for internal debug. You don't need use this.
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
      lastName: string;
    };
```

## Contribution

Requires Node.js v14+

1. clone this repoitory
2. change codes
3. run `npm run test`
4. create Pull Request