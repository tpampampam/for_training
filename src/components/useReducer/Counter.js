import { useReducer } from "react"
import reducer from "./reducer"
import {inc, dec, rnd} from './reducer'





const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch(inc())}>inc</button>
            <button onClick={() => dispatch(dec())}>dec</button>
            <button onClick={() => dispatch(rnd())}>rnd</button>
        </div>
    )
}
export default Counter























// const Counter = () => {
//     const [state, dispatch] = useReducer(reducer, {count: 0})
//     console.log(state.count)
//     return(
//         <div>
//             <b>{state.count}</b><br/>
//             <button onClick={() => dispatch(inc())}>INC</button>
//             <button onClick={() => dispatch(dec())}>DEC</button>
//             <button onClick={() => dispatch(rnd())}>RND</button>
//         </div>
//     )
// }
// export default Counter