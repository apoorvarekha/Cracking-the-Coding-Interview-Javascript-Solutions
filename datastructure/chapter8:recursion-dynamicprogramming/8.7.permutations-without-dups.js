function permutationWithoutDups(elemets){
    if(elemets.length === 0) return [[]]
    let firstElement = elemets[0]
    let rest = elemets.slice(1);
    let premsWithoutFirst = permutationWithoutDups(rest);
    
    const allPermutation = []
    premsWithoutFirst.forEach((prem) => {
        for(let i=0; i<= prem.length; i++){
            const premWithFirst = [...prem.slice(0, i), firstElement, ...prem.slice(i)]
            allPermutation.push(premWithFirst)
        }
    })
    return allPermutation;
}   

console.log(permutationWithoutDups(['a', 'b', 'c']))

/** 
[
  [ 'a', 'b', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'a', 'c', 'b' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ]
]
 */