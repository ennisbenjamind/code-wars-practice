function list(names){
  let output = ""
  for ( i = 0; i < names.length; i++ ) {
    if ( i == 0 ) {
      output += names[i].name
    } else if ( i > 0 && i < names.length - 1 ) {
      output += `, ${names[i].name}`
    } else {
      output += ` & ${names[i].name}`
    }
  }
  return output
}


// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for
// the last two names, which should be separated by an ampersand.
