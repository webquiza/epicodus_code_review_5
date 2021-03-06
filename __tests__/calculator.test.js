import Age from './../src/js/calculator.js';

describe('Age', () => {

  // Will make age reusable and beforeEach() will apply to all tests.
  let age;
 
  beforeEach( () => {
    age = new Age(38, 85);
  });

  test('should instantiate a new Age constructor with corresponding properties', () => {
    expect(age.earth).toEqual(38);
    expect(age.expectancy).toEqual(85);
  });

  test('should return age in Mercury years', () => {
    expect(age.mercury()).toEqual(158);
  });

  test('should return age in Venus years', () => {
    expect(age.venus()).toEqual(61);
  });

  test('should return age in Mars years', () => {
    expect(age.mars()).toEqual(20);
  });

  test('should return age in Jupiter years', () => {
    expect(age.jupiter()).toEqual(3);
  });

  test('should return remaining years expectancy on Mercury ', () => {
    expect(age.mercuryRemainder()).toEqual(195);
  });

  test('should return number of Mercury years past expectancy if it has been surpassed', () => {
    age.expectancy = 15;
    expect(age.mercuryRemainder()).toEqual(95);
  });

  test('should return remaining years expectancy on Venus ', () => {
    expect(age.venusRemainder()).toEqual(75);
  });

  test('should return number of Venus years past expectancy if it has been surpassed', () => {
    age.expectancy = 15;
    expect(age.venusRemainder()).toEqual(37);
  });

  test('should return remaining years expectancy on Mars ', () => {
    expect(age.marsRemainder()).toEqual(25);
  });

  test('should return number of Mars years past expectancy if it has been surpassed', () => {
    age.expectancy = 15;
    expect(age.marsRemainder()).toEqual(12);
  });

  test('should return remaining years expectancy on Jupiter ', () => {
    expect(age.jupiterRemainder()).toEqual(3);
  });

  test('should return number of Jupiter years past expectancy if it has been surpassed', () => {
    age.expectancy = 15;
    expect(age.jupiterRemainder()).toEqual(1);
  });

});