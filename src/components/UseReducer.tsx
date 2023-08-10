import { type } from "os"
import { useReducer } from "react"

type stateType={
    counter:number
}
type resetActionType={
    type:"reset"
}
type updateActionType={
    type:'inc'| 'dec'
    payload:number
}
type counterActionType=updateActionType|resetActionType
const UseReducer=()=> {
    const initialState={
        counter:0
    }
    const reducer=(state:stateType,action:counterActionType)=>{
        switch (action.type) {
            case 'inc':
                return {counter:state.counter+action.payload}
            case 'dec':
                return {counter:state.counter-action.payload}
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        {state.counter}
        <button onClick={()=>dispatch({type:'inc',payload:1})}>+</button>
        <button onClick={()=>dispatch({type:'dec',payload:1})}>-</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default UseReducer