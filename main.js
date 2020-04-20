const makeRunOn = function(str){
  let newString = ''
  for (let i=0; i<str.length; i++){
    if (str[i]==='.' && i!==str.length-1){
      newString += ','
    }
    else {
      newString += str[i]
    }
  }
  return newString
}

const stringOut = function(str){
  let newString = ''
  for (let i=0; i<str.length; i++){
    newString += str[i]
    if (str[i]!==' ' && str[i+1]!==' ' && i!==str.length-1){
      newString += ' '
    }
  }
  return newString
}

const nightOwls = function(arr){
  const newArr = []
  for (const x of arr){
    if (x.localTime>=100 && x.localTime<=400 && x.asleep===false){
      newArr.push(x)
    }
  }
  return newArr
}

const totalScore = function(arr){
  let total = 0
  for (const x of arr){
    if (x.multiplier===undefined){
      total += x.score
    }
    else {
      total += x.score*x.multiplier
    }
  }
  return total
}

const getToBed = function(arr){
  return arr.map(function(obj){
    const newObj = {...obj}
    if (obj.localTime>=100 && obj.localTime<=400 && obj.asleep===false){
      newObj.asleep = true
    }
    return newObj
  })
}

const findIndices = function(arr, func){
  const trueIndices = []
  for (let i=0; i<arr.length; i++){
    if (func(arr[i])===true){
      trueIndices.push(i)
    }
  }
  return trueIndices
}

const Faqtory = function(){
  return {
    questions: [],
    addQuestion(str, answered=false){
      this.questions.push({
        text: str,
        answered: answered,
        id: this.questions.length
      })
    },
    answerQuestion(id, answer){
      if (this.questions[id].answered===false)
      this.questions[id].answer = answer
    }
  }
}





if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
