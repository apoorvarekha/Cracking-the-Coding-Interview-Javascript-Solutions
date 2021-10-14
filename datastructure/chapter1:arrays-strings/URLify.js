/* 
QUESTION : Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith" 
*/

const urlify = (str) => str.split(' ').join('%20')

const urlify = (str) => str.trim().replace(/\s+/g, '%20')



function testReplaceSpace(){
    let str = 'Mr    John Smith   '
    console.log(replaceSpace(str))
}

testReplaceSpace();