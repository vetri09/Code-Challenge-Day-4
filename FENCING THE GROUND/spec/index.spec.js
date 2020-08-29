describe("Test Case 1", function() {
    it("should determine the length ", function() {
        expect(find_length(50,20)).toEqual(140);;
      });

      it("should determine the carper required", function() {
        expect(find_carper(50,20)).toEqual(1000);;
      });
});

describe("Test Case 2", function() {
    it("should determine the length", function() {
        expect(find_length(20,20)).toEqual(80);;
      });

      it("should determine the carper required", function() {
        expect(find_carper(20,20)).toEqual(400);;
      });
});

describe("Test Case 3", function() {
    it("should determine the length", function() {
        expect(find_length(1,1)).toEqual(4);;
      });

      it("should determine the carper required", function() {
        expect(find_carper(1,1)).toEqual(1);;
      });
});

describe("Test Case 4", function() {
    it("should determine the length", function() {
        expect(find_length(0,0)).toEqual(0);;
      });

      it("should determine the carper required", function() {
        expect(find_carper(0,0)).toEqual(0);;
      });
});

describe("Test Case 5", function() {
    it("should determine the length", function() {
        expect(find_length(1000,71)).toEqual(2142);;
      });

      it("should determine the carper required", function() {
        expect(find_carper(1000,71)).toEqual(71000);;
      });
});