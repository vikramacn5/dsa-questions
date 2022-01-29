const typedOutString = function(str, compareStr){
  let finalStr = '';
  let count = 0;
  for(let i = str.length-1; i>= 0; i--){
    if(str[i] === '#') count++;
    else{
      count ? count -- :  finalStr += str[i];
    }
  }
  console.log(finalStr);
  return finalStr.split('').reverse().join('') === compareStr;
}

console.log(typedOutString('ab#c', 'ac'));