function findOutlier(integers){
  let evens = []
  let odds = []
  integers.forEach((n) => {
    if (n % 2 == 0) {
      evens.push(n)
    } else {
      odds.push(n)
    }
  })
  if ( evens.length == 1 ) {
    return evens[0]
  }
  else if (odds.length == 1 ) {
    return odds[0]
  }
}

// 
// You are given an array (which will have a length of at least 3, but could be
// very large) containing integers. The array is either entirely comprised of odd
// integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
