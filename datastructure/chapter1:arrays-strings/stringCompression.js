
// o(n)
// string concatition can be used. but i have dount regarding the time complexcity if '+" to be o(n2) so used array join
function stringCompression(str){
    if (!str || str.length <= 2) return str;
    let count = 0;
    let result = []

    for(let i=0; i< str.length; i++){
        count++
        if(str.length === i +1 || str[i] !== str[i+1]){
            result.push(str[i] + count)
            count = 0
        }
    }

    return result.join('');
}

console.log(stringCompression('aabcccccaaa'))


// . match any charecter and \1 backreference the group. group = (anything inside)
function stringCompression1(str){
    return str.match(/(.)\1*/g).map(group => group[0] + group.length).join('')
}


// function stringCompression(str){
//     let char = '';
//     let count = 0;
//     let result = ''


//     for(let i=0; i< str.length; i++){
//         if(i===0) {
//             char = str[i];
//             count += 1;
//         }
//         if(char === str[i]){
//              count += 1
//              if(i === str.length -1) result += char + count
//         }
//         else {
//             result += char + count
//             char = str[i]
//             count = 1
//         }
//     }

//     return result;
// }

