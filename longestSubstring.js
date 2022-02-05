const lengthOfLongestSubstring = function(s){
  let hasSeen = new Map();
  let maxLength = 0;
  let startIndex = 0;

  for(let i = 0; i< s.length; i++){
    if(hasSeen.get(s[i]) >= startIndex){
      startIndex = hasSeen.get(s[i]) + 1;
    }
    hasSeen.set(s[i], i);
    maxLength = Math.max(maxLength, i - startIndex + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcadefg'));