import { test, suite } from 'uvu';
import * as assert from 'uvu/assert';

import { generateName } from '../build/index.js';

const createFakeRandomFunc = (retValList) => {
  let remains = [...retValList];
  return (min, max) => {
    if (remains.length === 0) {
      remains = [...retValList];
    }

    const next = remains.shift();
    return Math.max(Math.min(next, max), min);
  };
};

const testCharacters = [
  { nameType: 'fullname', firstName: 'reimu', lastName: 'hakurei' },
  { nameType: 'fullname', firstName: 'marisa', lastName: 'kirisame' },
];

const TestInternals = suite('Test Internals');
const ThNameGenBasics = suite('th-namegen basics');

TestInternals('createFakeRandomFunc', () => {
  const fn = createFakeRandomFunc([111, 222, 333]);
  const generated = new Array(6).fill(0).map(() => fn(0, 999));
  assert.equal(generated, [111, 222, 333, 111, 222, 333]);
});

ThNameGenBasics('generateName()', () => {
  const randomFunc = createFakeRandomFunc([0, 1]);
  const generated = generateName({ randomFunc, characterCandidates: testCharacters });
  assert.equal(generated, 'reimu-kirisame');
});

ThNameGenBasics('generateName() with simple name character', () => {
  const simpleCharacter = { nameType: 'simple', name: 'mima' };
  const randomFunc = createFakeRandomFunc([0]);
  const generated = generateName({ randomFunc, characterCandidates: [simpleCharacter] });
  assert.equal(generated, 'mima-mima');
});

ThNameGenBasics('generateName() with custom delimiter', () => {
  const delimiter = '@';
  const randomFunc = createFakeRandomFunc([0, 1]);
  const generated = generateName({ randomFunc, delimiter, characterCandidates: testCharacters });
  assert.equal(generated, 'reimu@kirisame');
});

ThNameGenBasics('generateName() with custom converter', () => {
  const nameChunkConverter = (name, context) => name[0].toUpperCase() + name.slice(1);
  const randomFunc = createFakeRandomFunc([0, 1]);
  const generated = generateName({ randomFunc, characterCandidates: testCharacters, nameChunkConverter });
  assert.equal(generated, 'Reimu-Kirisame');
});

TestInternals.run();
ThNameGenBasics.run();
