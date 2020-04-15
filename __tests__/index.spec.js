const myBeverage = {
  delicious: true,
  sour: false,
}
describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
  test.todo('should test something')
});

describe('my other beverage', () => {
  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
  // ... will be skipped
});