// Code your solution in this file!
const returnFirstTwoDrivers = function(dvrs) {
    return dvrs.slice(0,2)
}

const returnLastTwoDrivers= function(drvs) {
    const chooseDrvs = drvs.slice(drvs.length-2,drvs.length)
    return chooseDrvs
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function(fare) {
        return fare*number
    }
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, action){
    return action(drivers)
}