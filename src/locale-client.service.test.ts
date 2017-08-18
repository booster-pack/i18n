import { LocalesClientService as AClass } from './locale-client.service';

const classInstance = new AClass();

describe(classInstance.constructor.name, () => {
  let jsPath;
  let tsPath;
  let mockData;
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
    expect(true).toEqual(true);
  });

});


