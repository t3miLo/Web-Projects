// You are given the following information, but you may prefer to do some research for yourself.

// - 1 Jan 1900 was a Monday.

// -Thirty days has September,
//  April, June and November.

// - All the rest have thirty-one,

// - Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

let allWeekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let totalDays = 365
let startYear = 1900
let endYear = 2000
let totalMonths = 12

let allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let thirtyDayMonths = ['Sep', 'Apr', 'Jun', 'Nov']

const leapYear = (year) => {
  let leap = false

  if(year % 100 === 0) {
    leap = year % 400 === 0 ? true : false
  } else if (year % 4 === 0 && leap === false) {
    leap = true
  } else {
    leap = false
  }
  return leap
}


const daysInMonth = (month, isLeap) => {

  if(month === 'Feb' && isLeap){
    return 29
  } else if (month === 'Feb' && !isLeap) {
    return 28
  } else if(!thirtyDayMonths.filter(tmonth => {
    return tmonth === month
  }).length < 1) {
    return 30
  } else {
    return 31
  }
} 

const monthLoop = async (startYear, isLeap, firstDayOfYear) => {
  let firstDayOfMonth = firstDayOfYear
  let totalSundays = 0

  for(let i = 0; i<allMonths.length; i++){
    let days = await daysInMonth(allMonths[i], isLeap)
    let moduleDays = days % 7
    let currentDayIndex = allWeekdays.indexOf(firstDayOfMonth)

    let index = moduleDays + currentDayIndex

    if( index > 6){
      index = index % 7
      firstDayOfMonth = allWeekdays[index]
      firstDayOfMonth === 'Sunday' ? totalSundays++ : totalSundays
    } else {
      firstDayOfMonth = allWeekdays[index]
      firstDayOfMonth === 'Sunday' ? totalSundays++ : totalSundays
    }
  }
  return [firstDayOfMonth, totalSundays]
}

async function  howManySundays() {
  let firtDayOfYear = 'Monday'
  let totalSundays = 0
  while (startYear <= endYear) {
    let isLeap = await leapYear(startYear) 
      let yearResults = await monthLoop(startYear, isLeap, firtDayOfYear)
      firtDayOfYear = yearResults[0]
      totalSundays = startYear != 1900 ? totalSundays + yearResults[1] : 0
    startYear++
  }
  console.log({totalSundays})
}
howManySundays()


