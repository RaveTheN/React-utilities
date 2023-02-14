import { useEffect, useState } from "react"

export function HookCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log('I have mounted')

        return () => {
            console.log('\'m about to be unmounted')
        }
    }, [])

    //anytime a value in the dependency change, the effect (the function) will be run   
    useEffect(() => {
        console.log(`The counter is now ${counter}`)//function

        return() => {
            console.log(`The counter was ${counter}`)//cleanup function
        }
    }, [counter])//Dependecy array

    useEffect(() => {
        console.log('I have rendered')
    })//this is without dependency array, and so it will happen anytime something inside the component changes

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}