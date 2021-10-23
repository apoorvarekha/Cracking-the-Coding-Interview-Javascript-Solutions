class AnimalShilter{
    constructor(){
        this.cats = []
        this.dogs = []
        this.id = 0
    }

    enqueueCat(name){
        this.cats.push({name, id : this.id})
        this.id++
    }

    enqueueDog(name){
        this.dogs.push({name, id : this.id})
        this.id++
    }

    dequeueDog(){
        if(this.dogs.length > 0) return this.dogs.shift().name
        else console.log('Sorry Dogs are not available')
    }

    dequeueCat(){
        console.log(this.cats.length)
        if(this.cats.length > 0) return this.cats.shift().name
        else console.log('Sorry Cats are not available')
    }

    dequeueAny(){
        let catLength = this.cats.length;
        let dogLength = this.dogs.length;
        if(!catLength && !dogLength) {
            return console.log('Sorry Pets are not available')
        }
        if(catLength && dogLength){
          let pet = this.peek(this.cats).id < this.peek(this.dogs).id ?  this.dequeueCat() : this.dequeueDog()
           return pet
        }
        else{
            if(catLength) this.dequeueCat()
            if(dogLength) this.dequeueDog()
        }
        
    }

    peek(list){
        return list[0]
    }
}


let animalShilter = new AnimalShilter()
animalShilter.enqueueCat('inky')
animalShilter.enqueueCat('pinky')
animalShilter.enqueueDog('lily')
animalShilter.enqueueCat('ponky')

animalShilter.enqueueDog('mily')

console.log(animalShilter.dequeueCat())
console.log(animalShilter.dequeueAny())
console.log(animalShilter.dequeueAny())