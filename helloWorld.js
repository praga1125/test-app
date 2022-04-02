
function strReducer(str, str1) {
var temp = " ";
var len = str.length+str1.length;
for(let i = 0; i < len; i++) {
    console.log(str[str.length-1]);
  if(str[str.length-i-1] == str1[i]){
      temp += str.slice(0, str.length-i-1)+str1.slice(i-1, str1.length); 
      console.log(temp);
  } else {
    //   console.log(temp);
      return temp.toUpperCase();
  }
}
}

let str = "INdIA";
let str1 = "AiRPort";
const res = strReducer(str, str1);
// console.log(res);