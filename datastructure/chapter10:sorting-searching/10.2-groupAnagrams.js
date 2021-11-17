function anagrams(strA, strB){
    strA = strA.split('').sort().join();
    strB = strB.split('').sort().join();
    console.log(`${strB}  ${strA}`)
    return strA === strB 
}

console.log(anagrams('cinema', 'iceman'))