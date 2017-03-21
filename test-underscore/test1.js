"use strict";
const _ = require('underscore');

let use = "this is my underscore test"
let testList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let testObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7
}
let testListObj = [{
  a: 1,
  b: 2,
  c: 3
}, {
  b: 2,
  c: 3,
  d: 4
}, {
  c: 3,
  d: 4,
  e: 5,
  f: 6
}]
const doTest1 = (x) => {
  console.log('list-------------------------')
  _.each(testList, (ele) => {
    console.log(ele)
  })
  console.log('obj-------------------------')
  _.each(testObj, (ele) => {
    console.log(ele)
  })
  console.log(use + x)
  console.log('-------------------------')
}
const doTest2 = (x) => {
  let result = _.map(testList, (ele) => {
    return ele * 3
  })
  console.log(result);
  console.log(use + x)
  console.log('-------------------------')
}
const doTest3 = (x) => {
  let result = _.reduce(testList, (memo, ele) => {
    return memo + ele
  })
  let resultPlus = _.reduce(testObj, (memo, ele, key, obj) => {
    console.log('memo:' + memo)
    console.log('value:' + ele)
    console.log('key:' + key)
    console.log('obj:')
    console.log(obj)
    console.log('this:')
    console.log(this)
    let test = obj[key]
    console.log(test)
    return 1
  }, 5)
  console.log(result)
  console.log(resultPlus)
  console.log(use + x)
  console.log('-------------------------')
}
const doTest4 = (x) => {
  let list = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]
  let result = _.reduce(list, (a, b) => {
    return a.concat(b)
  })
  let resuleReverse = _.reduceRight(list, (a, b) => {
    return a.concat(b)
  })
  console.log(result)
  console.log(resuleReverse)
  console.log(use + x)
  console.log('-------------------------')
}
const doTest5 = (x) => {
  let select = _.find(testObj, (ele) => {
    return (ele - 2) * 2 > 2
  })
  let filter = _.filter(testList, (ele) => {
    return (ele - 2) * 2 > 2
  })
  console.log("select:")
  console.log(select)
  console.log("filter")
  console.log(filter)
  console.log(use + x)
  console.log('-------------------------')
}
const doTest6 = (x) => {
    let select = _.where(testListObj, {
      c: 3
    })
    let selectFirst = _.findWhere(testListObj, {
      c: 3
    })
    console.log("select");
    console.log(select)
    console.log("selectFirst")
    console.log(selectFirst)
  }
  // doTest1(1)
  // doTest2(2)
  // doTest3(3)
  // doTest3(4)
  // doTest5(5)
doTest6(6)
