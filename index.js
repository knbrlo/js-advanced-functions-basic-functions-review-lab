
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(paramOne="*") {
    return function(paramTwo="special") {
        return `You are ${paramOne}${paramTwo}${paramOne}!`
    }
}

let Calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a, b) { return a - b },
    multiply: function(a, b) { return a * b },
    divide: function(a, b) { return a / b }
}

function actionApplyer(start, functionsArray) {
    if (functionsArray.length == 0) {
        return start;
    }

    functionsArray.map(func => {
      start = func(start)
    })

    return start;
}