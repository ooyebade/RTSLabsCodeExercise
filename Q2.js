** =========================================================================================
 *  <Author:> Elizabeth Oyebade || <Description:> RTS Labs Code Exercise || Date: 8/15/2020
 * 
 *  #2  Rotate the characters in a string 
 *  by a given input and have the overflow appear at the beginning, 
 *  e.g. “MyString” rotated by 2 is “ngMyStri”.
 ============================================================================================*/

//e.g. “MyString” rotated by 2 is “ngMyStri”

let firstName = prompt('Enter your first name: ');
function rotate_two(firstName) {
 if (firstName.length > 2) {
   return firstName.slice(-2) + firstName.slice(0, -2);
 }
 return firstName;
}
 
console.log('Hold On! No way can "' + (rotate_two(firstName)) + '" be right');
