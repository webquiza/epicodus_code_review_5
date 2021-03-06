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

  jupiter() {
    this.earth = parseInt((this.earth / 11.86).toFixed());
    return this.earth;
  }

  mercuryRemainder () { 
    if (this.expectancy >= this.earth) {
      return parseInt((this.expectancy - this.earth) / .24);
    } else {
      return parseInt((this.earth - this.expectancy) / .24);
    }
  }

  venusRemainder () { 
    if (this.expectancy >= this.earth) {
      return parseInt((this.expectancy - this.earth) / .62);
    } else {
      return parseInt((this.earth - this.expectancy) / .62);
    }
  }
  
  marsRemainder () { 
    if (this.expectancy >= this.earth) {
      return parseInt((this.expectancy - this.earth) / 1.88);
    } else {
      return parseInt((this.earth - this.expectancy) / 1.88);
    }
  }  

  jupiterRemainder () { 
    if (this.expectancy >= this.earth) {
      return parseInt((this.expectancy - this.earth) / 11.86);
    } else {
      return parseInt((this.earth - this.expectancy) / 11.86);
    }
  }

}