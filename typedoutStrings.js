const typedOutString = function(str, compareStr){
  let finalS = '';
    let finalT = '';
  let count = 0;
  for(let i = s.length-1; i>= 0; i--){
    if(s[i] === '#') count++;
    else{
      count ? count -- :  finalS += s[i];
    }
  }
    
    count = 0;
    
    for(let i = t.length-1; i>= 0; i--){
    if(t[i] === '#') count++;
    else{
      count ? count -- :  finalT += t[i];
    }
  }
  return finalS === finalT;
}

console.log(typedOutString('ab#c', 'ac'));