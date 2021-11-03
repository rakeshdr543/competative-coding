// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join('')
  }
  
  console.log(reverseString('hello'))


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    let start=0,end=str.length-1
    
    while(start<end){
      if(str[start]!==str[end]) return false
      start++
      end--
    }
    
    return true
  }
  
  console.log(isPalindrome('hello'))


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    return parseInt(int.toString().split('').reverse().join(''),10)
  }
  
  console.log(reverseInt(521))

  