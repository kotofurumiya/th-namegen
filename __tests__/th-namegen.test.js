import { test, suite } from 'uvu';
import * as assert from 'uvu/assert';

import { generateName, selectCharacters, oneOfTitleTags, noneOfTitleTags, yearFrom, yearTo } from '../build/index.js';

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

const yumemi = { nameType: 'fullname', firstName: 'yumemi', lastName: 'okazaki' };
const koishi = { nameType: 'fullname', firstName: 'koishi', lastName: 'komeiji' };
const kosuzu = { nameType: 'fullname', firstName: 'kosuzu', lastName: 'motoori' };

const testTitles = [
  {
    characters: [yumemi],
    titleNumber: 1,
    releasedYear: 2010,
    tags: ['pc-98'],
  },
  {
    characters: [koishi],
    titleNumber: 2,
    releasedYear: 2015,
    tags: ['windows', 'tasofro'],
  },
  {
    characters: [kosuzu],
    titleNumber: 3,
    releasedYear: 2020,
    tags: ['book'],
  },
];

const TestInternals = suite('Test Internals');
const ThNameGenBasics = suite('th-namegen basics');
const ThNameGenFilters = suite('th-namegen filters');

//
// internal functions
//
TestInternals('createFakeRandomFunc', () => {
  const fn = createFakeRandomFunc([111, 222, 333]);
  const generated = new Array(6).fill(0).map(() => fn(0, 999));
  assert.equal(generated, [111, 222, 333, 111, 222, 333]);
});

//
// basic use
//
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

ThNameGenBasics('generateName() throws empty candidates eror', () => {
  assert.throws(() => generateName({ characterCandidates: [] }), /must contains some characters/);
});

//
// filters
//
ThNameGenFilters('selectCharacters() all', () => {
  const selected = selectCharacters([], { titles: testTitles });
  assert.equal(
    selected,
    testTitles.flatMap((t) => t.characters)
  );
});

ThNameGenFilters('selectCharacters() oneOfTitleTags with single tag', () => {
  const selected = selectCharacters([oneOfTitleTags(['windows'])], { titles: testTitles });
  assert.equal(selected, [koishi]);
});

ThNameGenFilters('selectCharacters() oneOfTitleTags with multiple tags', () => {
  const selected = selectCharacters([oneOfTitleTags(['windows', 'book'])], { titles: testTitles });
  assert.equal(selected, [koishi, kosuzu]);
});

ThNameGenFilters('selectCharacters() noneOfTitleTags with single tag', () => {
  const selected = selectCharacters([noneOfTitleTags(['windows'])], { titles: testTitles });
  assert.equal(selected, [yumemi, kosuzu]);
});

ThNameGenFilters('selectCharacters() noneOfTitleTags with multiple tags', () => {
  const selected = selectCharacters([noneOfTitleTags(['windows', 'pc-98'])], { titles: testTitles });
  assert.equal(selected, [kosuzu]);
});

ThNameGenFilters('selectCharacters() yearFrom', () => {
  const selected = selectCharacters([yearFrom(2015)], { titles: testTitles });
  assert.equal(selected, [koishi, kosuzu]);
});

ThNameGenFilters('selectCharacters() yearTo', () => {
  const selected = selectCharacters([yearTo(2015)], { titles: testTitles });
  assert.equal(selected, [yumemi, koishi]);
});

ThNameGenFilters('selectCharacters() year combination', () => {
  const selected = selectCharacters([yearFrom(2011), yearTo(2017)], { titles: testTitles });
  assert.equal(selected, [koishi]);
});

TestInternals.run();
ThNameGenBasics.run();
ThNameGenFilters.run();
