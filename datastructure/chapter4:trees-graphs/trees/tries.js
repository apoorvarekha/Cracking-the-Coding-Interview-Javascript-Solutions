let Node = function (){
    this.keys = new Map();
    this.end = false;
    this.setEnd = function (){
        this.end = true
    }
    this.isEnd = function(){
        return this.end
    }
}

let Tries = function(){
    this.root = new Node();

    this.add = function(input, node = this.root){
        if(input.length === 0){
            node.setEnd();
            return;
        } else if(!node.keys.has(input[0])){
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]))
        }else{
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }

    this.isWord = function(word){
        let node = this.root
        while(word.length > 1){
            if(!node.keys.has(word[0])){
                return false
            }else{
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return (node.keys.has(word[0]) && node.keys.get(word[0]).isEnd() ) ? true : false
    }

    this.print = function(){
        let words = [];
        let search = function(node, string){
            if(node.keys.size != 0){
                for(let letter of node.keys.keys()){
                    search(node.keys.get(letter), string.concat(letter))
                };
                if(node.isEnd()){
                    words.push(string)
                }
            }else{
                string.length > 0 ? words.push(string) : undefined
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words: null
    }

}


let myTries = new Tries();
myTries.add('doll')
myTries.add('ball')
myTries.add('bat')
myTries.add('dork')
myTries.add('do')
myTries.add('dorm')
myTries.add('send')
myTries.add('some')
console.log(myTries.isWord('doll'))
console.log(myTries.isWord('dorf'))
console.log(myTries.isWord('dor'))
console.log(myTries.print())