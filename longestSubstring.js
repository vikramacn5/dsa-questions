const lengthOfLongestSubstring = function(s){
  let hasSeen = {};
  let maxLength = 0;
  let currentSubLength = 0;
  let startIndex = 0;
  for(let i = 0; i< s.length; i++){
    if(hasSeen[s[i]] === undefined || hasSeen[s[i]] < startIndex){
      currentSubLength++;
      hasSeen[s[i]] = i;
      maxLength = Math.max(maxLength, currentSubLength);
    }else{
      currentSubLength = i - hasSeen[s[i]];
      startIndex = hasSeen[s[i]] + 1;
      hasSeen[s[i]] = i;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcadefg'));

// const lengthOfLongestSubStringOptimal = function(s){
//   let maxLength = 0;
//   let currentSubLength = 1;
//   let p1 = 0;
//   for(let p2 = 1; p2< s.length; p2++){
//     if(s[p2] !== s[p1]){
//       currentSubLength++;
//     }else{
//       maxLength = Math.max(maxLength, currentSubLength);
//       currentSubLength = p2 - p1;
//       p1++;
//     }
//   }
//   maxLength = Math.max(maxLength, currentSubLength);
//   return maxLength;
// }

// console.log(lengthOfLongestSubStringOptimal('abcadefg'));