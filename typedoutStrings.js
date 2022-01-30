const typedoutString = function(s, t){
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

const typedoutString2 = function(s, t){
  
  let i = s.length - 1;
  let j = t.length - 1;
  let countS = 0;

  while(i >=0 || j >= 0){
    if(s[i] === '#') countS++;
    else if(countS) countS--;
    else{
      let validLetter = false; 
      let countT = 0;
      while(!validLetter){
        if(t[j] === '#') countT++;
        else if(countT)countT--;
        else {
          validLetter = true;
          if(s[i] !== t[j])return false;
        }
        j--;
      }
    }
    i--;
  }
  return true;
}

console.log(typedoutString2('bxj##tw', 'bxj###tw'));