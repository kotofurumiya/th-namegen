import { generateName } from '../';

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

describe('test internals', () => {
  test('createFakeRandomFunc', () => {
    const fn = createFakeRandomFunc([111, 222, 333]);
    const gen = new Array(6).fill(0).map(() => fn(0, 999));
    expect(gen).toHaveLength(6);
    expect(gen[0]).toBe(111);
    expect(gen[1]).toBe(222);
    expect(gen[2]).toBe(333);
    expect(gen[3]).toBe(111);
    expect(gen[4]).toBe(222);
    expect(gen[5]).toBe(333);
  });
});

describe('th-namegen basic functions', () => {
  test('generateName()', () => {
    const randomFunc = createFakeRandomFunc([0, 1]);
    const generated = generateName({ randomFunc, characterCandidates: testCharacters });
    expect(generated).toBe('reimu-kirisame');
  });

  test('generateName() with simple name character', () => {
    const simpleCharacter = { nameType: 'simple', name: 'mima' };
    const randomFunc = createFakeRandomFunc([0]);
    const generated = generateName({ randomFunc, characterCandidates: [simpleCharacter] });
    expect(generated).toBe('mima-mima');
  });

  test('generateName() with custom delimiter', () => {
    const delimiter = '@';
    const randomFunc = createFakeRandomFunc([0, 1]);
    const generated = generateName({ randomFunc, delimiter, characterCandidates: testCharacters });
    expect(generated).toBe('reimu@kirisame');
  });

  test('generateName() with custom converter', () => {
    const nameChunkConverter = (name, context) => name[0].toUpperCase() + name.slice(1);
    const randomFunc = createFakeRandomFunc([0, 1]);
    const generated = generateName({ randomFunc, characterCandidates: testCharacters, nameChunkConverter });
    expect(generated).toBe('Reimu-Kirisame');
  });
});
