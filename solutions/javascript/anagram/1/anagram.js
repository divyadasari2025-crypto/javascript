//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,candidates) => {
  targetL = target.toLowerCase();
  anagrams=[];
  for(candidate of candidates){
    candidateL=candidate.toLowerCase();
    if (candidate.length === target.length){
      if(candidateL !== targetL){
        if(candidateL.split('').sort().join('') === targetL.split('').sort().join('')){
          anagrams.push(candidate);
        }
      }
    }
  }
  return anagrams;
};
