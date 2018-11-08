function towerBuilder(nFloors) {
  var finalArray = [];
  var numSpaces = 0;
  // Start from the reverse.
  for (i = nFloors; i > 0; i--) {
    // At the end, the number of spaces are 0.
    // Have one and less for the half of the stars.
    // Add another set of spaces.
    finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
    // Increment the space, while going to top.
    numSpaces++;
  }
  // Reverse the array.
  return finalArray.reverse();
}
console.log(towerBuilder(3));
