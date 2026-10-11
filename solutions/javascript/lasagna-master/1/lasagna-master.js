/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remTime){
  if(remTime ===0){
    return 'Lasagna is done.';
  }else if(remTime === undefined || remTime === null){
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}
export function preparationTime(layers,prepTime){
  if(prepTime === null || prepTime === undefined){
    return layers.length*2;
  }
  return prepTime*layers.length;
}
export function quantities(layers){
  let quanNoodles=0;
  let quanSauce=0;
for(layer of layers){
  if(layer === 'sauce'){
    quanSauce=quanSauce+1;
  }
  if(layer === 'noodles'){
    quanNoodles=quanNoodles+1;
  }
}
  return {
    noodles: quanNoodles*50,
    sauce: quanSauce*0.2
  };
}

export function addSecretIngredient(friendsList, myList){
  const secretIngredient = friendsList.at(-1);
  myList.push(secretIngredient);
}
export function scaleRecipe(recipe,portions){
  const newRecipe ={};
  for(ingredient in recipe){
    newRecipe[ingredient]=recipe[ingredient]*(portions/2);
  }
  return newRecipe;
}