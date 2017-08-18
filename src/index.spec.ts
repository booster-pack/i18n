import * as index from '../src/index';

test('Should have Dependancies available', () => {
  expect(index.LocalesServerService).toBeTruthy();
  expect(index.LocalesClientService).toBeTruthy();
});
