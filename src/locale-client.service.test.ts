import { LocalesClientService as AClass } from './locale-client.service';
import { ILocale } from './locale.interface';

const classInstance = new AClass();

describe(classInstance.constructor.name, () => {
  let jsPath:string;
  let tsPath:string;
  let mockData:ILocale[];

  beforeEach(() => {
    tsPath = 'fixtures/compile-test.ts';
    jsPath = 'fixtures/compile-test.js';
    mockData = [
      {
        language: 'fr',
      },
      {
        language: 'de',
        region: 'de',
      },
    ];
  });

  it('should list out locales2', () => {
    const mockSet = new Set();
    mockSet.add('fr');
    mockSet.add('de_de');
    mockSet.add('ALL_ALL');
    expect(AClass.ls(mockData)).toEqual(mockSet);
  });
});
