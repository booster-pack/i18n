import { Compile as AClass } from './compile';

const classInstance = new AClass();

describe(classInstance.constructor.name, () => {
  let path: string;
  beforeEach(() => {
    path = 'fixtures/compile-test.ts';
  });

  it('should compile properly', async () => {
    const file = await AClass.compile(path);
    expect(file).toBeTruthy();
  });

  it('should throw error', () => {
    path = 'fixtures/compile-test.js';
    AClass.compile(path).catch(e => {
      expect(e).toBeDefined();
    });
  });
});
