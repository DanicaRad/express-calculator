const math = require('mathjs');

class Nums {
    constructor(numStrings) {
        this.nums = this.makeNums(numStrings);
        console.log("THIS.NUMS", this.nums);
    }

    makeNums(numStrings) {
        if(!numStrings || numStrings.length === 0) {
            throw new Error (
                `Numbers required.`
            )
        }
        const nums = numStrings.map((n) => Number(n))
        const nan = numStrings.find(n => (Number.isNaN(Number(n))))
        if(!nan) {
            return nums
        }
        throw new Error (
            `The value ${nan} is not a valid number.`
        )

    }

    doMath(operation) {

        if(operation === 'mean') {
            return math.mean(this.nums)
        }
        if(operation === 'median') {
            return math.median(this.nums);
        }
        if(operation === 'mode') {
            console.log("THIS.NUMS INSIDE DOMATH", this.nums);
            return this.findMode(this.nums);
        }
    }

    createFrequencyCounter() {
        return this.nums.reduce(function(acc, next) {
          acc[next] = (acc[next] || 0) + 1;
          return acc;
        }, {});
      }

    findMode() {
        let freqCounter = this.createFrequencyCounter(this.nums);
      
        let count = 0;
        let mostFrequent;
      
        for (let key in freqCounter) {
          if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
          }
        }
      
        return +mostFrequent;
      }


}

module.exports = Nums