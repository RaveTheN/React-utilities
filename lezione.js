class Person {
    #age;
    #personInfo = {};
    constructor (firstName, lastName, birthDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.#age = Person.calculateAgeFromDate(this.birthDate);
        this.#personInfo = {
            id: new Date().getTime(),
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.#age
        } 
    }
    
    get info(){
        return this.#personInfo;
    }

    set info(value){
        if (typeof value !== "object" || Array.isArray(value)) throw new Error("Value must be an object")
        this.#personInfo = {
            ...this.#personInfo,
            ...value,
        }
        return true;
    }

    static calculateAgeFromDate(birthDate){
        return new Date().getFullYear() - new Date(birthDate).getFullYear()
    }

    updateAge(age){
        if (!isNaN(age)) this.#age = Number(age);        
    }

    printAge(){
        console.log(this.#age)
    }
}

class User extends Person {
    constructor(firstName, lastName, birthDate){
        super(firstName, lastName, birthDate)
    }

    printInfo(){
        console.log(this.info)
    }
}


const mario = new User("Mario", "Mario", "10-3-1987" )


mario.printAge();
mario.updateAge("49");
mario.printAge();
console.log(mario.info)
mario.info = {id: 123}
console.log(mario.info)
mario.printInfo();

import { useState } from "react"

export function App() {

    const [counter, setCounter] = useState(0)

    const add = () => {
        setCounter(counter + 1)
        // this.setState({counter: this.state.counter +1})
    }

        return(
            <div>
                <h1>{counter}</h1>
                <button onClick={add}>Add</button>
            </div>
        )
}