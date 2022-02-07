
//returnFirstTwoDrivers()
      //1) should return a new array containing the first two drivers from the passed-in array

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

//returnLastTwoDrivers()
      //2) should return an array of the last two drivers

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

//selectingDrivers
      //3) has the `returnFirstTwoDrivers` function to as its first element
      //4) has the `returnLastTwoDrivers` function to as its last element
      //5) allows us to invoke either function from the array

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier()
      //6) returns a function
      //7) should multiply a given value using the created multiplier

function createFareMultiplier(integer) {
    return function(fare) {
        return integer*fare
    }
}

//fareDoubler()
      //8) is a function
      //9) doubles fares

function fareDoubler(integer) {
    return integer*2
}

//fareTripler()
      //10) is a function
      //11) triples fares

function fareTripler(integer) {
    return integer*3
}
//selectDifferentDrivers(arrayOfDrivers, function)
      //12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
      //13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}