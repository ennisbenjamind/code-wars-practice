function duplicateEncode(word){
  let code = ""
  word = word.toLowerCase()
  for (var x = 0; x < word.length; x++) {
    let letters = word.split("").filter(letter => word.charAt(x) == letter)
    if ( letters.length > 1 ) {
      code += ")"
    } else {
      code += "("
    }
  }
  return code
}


// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
//
// "recede" => "()()()"
//
// "Success" => ")())())"
//
// "(( @" => "))(("
