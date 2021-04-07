let C= myQuestion2
let total = 0;
for (let i = 0;i <= C.length ;i++)
  if (answerQuestion[i] === correctAnswer[i]){
    (total+=i)
  }else{
    (total)
  }
console.log(total/C.length *100)