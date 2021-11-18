function anagrams(strs){
   let group = [];
   strs.forEach(str => {
       let sortedStr = str.split('').sort().join('');
       group[sortedStr] = group[sortedStr] ? [...group[sortedStr], str] : [str]
   })
   return Object.values(group)
}

console.log(anagrams(["eat","tea","tan","ate","nat","bat"])) // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]