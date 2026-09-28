//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let string ='';
  if(num%3 ===0){
    string+='Pling';
  }     
  if(num%5===0){  
    string+='Plang';
  }
  if(num%7===0){
    string+='Plong';      
  }
return string ? string : num.toString();
};
