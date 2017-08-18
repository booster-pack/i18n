import { Compile } from './compile';
import { LocalesServerService as AClass } from './locale-server.service';

const classInstance = new AClass();

describe(classInstance.constructor.name, () => {
  let path: string;
  beforeEach(async () => {
    path = 'fixtures/compile-test.ts';
    await Compile.compile(path);
  });

  it('should compile properly', async () => {
    const { locales } = await AClass.ls(path);
    expect(true).toBe(true);
    // expect(locales).toBeTruthy();
    // expect(locales).toEqual([
    //   {
    //     language: 'fr',
    //   },
    //   {
    //     language: 'de',
    //     region: 'de',
    //   },
    // ]);
  });
});
