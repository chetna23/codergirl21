function reverse(str) {
    return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
    return reverse(str) === str;
 }

 console.log(isPalindrome('anna'));
 function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str;
 }