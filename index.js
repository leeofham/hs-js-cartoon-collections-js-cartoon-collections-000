function dwarfRollCall(dwarves) {
  var dwarfNumbers = []
  for (let i=0; i < dwarves.length; i++){
    dwarfNumbers.push((i+1) + `. ${dwarves[i]} `)
  }
  return dwarfNumbers.join("")
}

function summonCaptainPlanet(planeteerCalls){
    var planeteerUpper = []
  for (let i = 0; i < planeteerCalls.length; i++){
    planeteerUpper.push(planeteerCalls[i].toUpperCase() + '!' )
  }
  return planeteerUpper;
}

function longPlaneteerCalls(words) {

  for (let i = 0; i < words.length; i++){
    if (words[i].length <=4){
      return false;
    }
    if (words[i].length >= 4){
      return true;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  var match = []
    for (let i = 0; i<cheese.length; i++){
      for (let j = 0; j<foods.length; j++){
        if (cheese[i] === foods[j]){
          match.push(cheese[i]);
        }
      }
    }
    if (match.length >=1){
      return match[0];
    }
    else{
      return "no cheese!"

  }
}
