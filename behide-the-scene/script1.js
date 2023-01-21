'use strict';

// var firstName = 'maltida';

const jonas = {
  firstName: 'jonas',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2047 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.greet();

// function inside a method this a pitfall
