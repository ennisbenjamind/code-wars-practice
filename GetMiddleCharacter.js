function getMiddle(s)
{
  let sArray = s.split("")
  if (sArray.length % 2 == 1) {
    let x = Math.floor(sArray.length / 2)
    return sArray[x]
  }
  else {
    let x = sArray.length / 2
    let y = x - 1
    return sArray[y] + sArray[x]
  }
}

// You are going to be given a word. Your job is to return the middle character of
// the word. If the word's length is odd, return the middle character. If the word's
// length is even, return the middle 2 characters.
