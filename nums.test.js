const Nums = require("./nums");
  
  describe("#doMathEvenSet", function(){
    let nums

    beforeEach(function() {
        nums = new Nums([1, -1, 4, 2])
    })

    it("finds the median of an even set", function(){ 
      expect(nums.doMath('median')).toEqual(1.5)
    })
    it("finds the mean of an odd set", function () { 
      expect(nums.doMath('mean')).toEqual(1.5)
    })
    it("finds the mode of an odd set", function () { 
      expect(nums.doMath('mode')).toEqual(1)
    })
  })
  
  describe("#doMathOddSet", function () {

    let nums

    beforeEach(function() {
        nums = new Nums([1,1,1,2,2,3,4])
    })

    it("finds the mean of an odd set", function () { 
      expect(nums.doMath('mean')).toEqual(2)
    })
    it("finds the median of an odd set", function () { 
      expect(nums.doMath('median')).toEqual(2)
    })
    it("finds the mode of an odd set of numbers", function () { 
      expect(nums.doMath('mode')).toEqual(1)
    })
  })
  
  describe("#error", function () {

    it("errors if empty string", function () { 
      expect(() => new Nums()).toThrow()
    })
    it("errors if not valid numbers", function () { 
      expect(() => new Nums('l', '2', 'g', '$')).toThrow()
    })
  })