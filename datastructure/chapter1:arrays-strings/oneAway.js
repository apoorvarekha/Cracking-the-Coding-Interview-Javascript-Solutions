
// o(n)
function oneAway(str1, str2){
   let insertChar = (str1,str2) => {
       let isInsert = false;
       for(let i=0; i< str1.length; i++){
           if(str1[i] != str2[i]){
               if(isInsert === true) return false 
               else isInsert = true
           }
       }
       return isInsert;
   }


   let replaceChar = (str1, str2) => {
       for(const i= 0; i< str1.length; i++){
           if(str1[i] !== str2[i]){
                str2 = str2.substring(0,i) + str1[i] + str2.substring(i+1)
                if(str2 === str1) return true
                else return false
                break;
           }
       }
   }

   let result = false
   if((str1.length - str2.length) === 1) {
        result = insertChar(str1, str2)
   }
   else if((str2.length - str1.length) === 1) { 
       result = insertChar(str2, str1)
    }
   else if (str1.length === str2.length){
        result = replaceChar(str1, str2)
   }

   return result

}

console.log(oneAway1('book', 'ceok'))