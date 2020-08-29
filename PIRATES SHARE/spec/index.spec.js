describe("Test Case 1", function() {
    it("should determine the Jack Share", function() {
        expect(find_JackShare(500,25,33)).toEqual(125);;
      });

      it("should determin the Barbossa Share", function() {
        expect(find_BarbossaShare(500,25,33)).toEqual(123.75);;
      });

      it("should determine the Other Share", function() {
        expect(find_OtherShare(500,25,33)).toEqual(83.75);;
    });
});

describe("Test Case 2", function() {
    it("should determine the Jack Share", function() {
        expect(find_JackShare(100,24,31)).toEqual(24);;
      });

      it("should determin the Barbossa Share", function() {
        expect(find_BarbossaShare(100,24,31)).toEqual(23.56);;
      });

      it("should determine the Other Share", function() {
        expect(find_OtherShare(100,24,31)).toEqual(17.48);;
    });
});

describe("Test Case 3", function() {
    it("should determine the Jack Share", function() {
        expect(find_JackShare(600,15,18)).toEqual(90);;
      });

      it("should determin the Barbossa Share", function() {
        expect(find_BarbossaShare(600,15,18)).toEqual(91.8);;
      });

      it("should determine the Other Share", function() {
        expect(find_OtherShare(600,15,18)).toEqual(139.4);;
    });
});

describe("Test Case 4", function() {
    it("should determine the Jack Share", function() {
        expect(find_JackShare(1000,20,10)).toEqual(200);;
      });

      it("should determin the Barbossa Share", function() {
        expect(find_BarbossaShare(1000,20,10)).toEqual(80);;
      });

      it("should determine the Other Share", function() {
        expect(find_OtherShare(1000,20,10)).toEqual(240);;
    });
});

describe("Test Case 5", function() {
    it("should determine the Jack Share", function() {
        expect(find_JackShare(700,25,33)).toEqual(175);;
      });

      it("should determin the Barbossa Share", function() {
        expect(find_BarbossaShare(700,25,33)).toEqual(173.25);;
      });

      it("should determine the Other Share", function() {
        expect(find_OtherShare(700,25,33)).toEqual(117.25);;
    });
});