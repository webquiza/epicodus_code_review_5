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

  venus() {
    this.earth = parseInt((this.earth / .62).toFixed());
    return this.earth;
  }

  mars() {
    this.earth = parseInt((this.earth / 1.88).toFixed());
    return this.earth;
  }

}