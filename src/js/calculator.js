export default class Age {
  // Age constructor with earth and expectancy properties.
  constructor(earth, expectancy) {
    this.earth = earth;
    this.expectancy = expectancy;
  }

  mercury() {
    // toFixed() will ensure the return is rounded to nearest whole number.
    this.earth = parseInt((this.earth / .24).toFixed());
    return this.earth;
  }

}