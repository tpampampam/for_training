
import { observer } from "mobx-react-lite"
import counter from "./store/counter"

const CounterMob = observer(() => {


    return(
        <div>
            Count: {counter.count}
            <button onClick={() => counter.increment()}>inc</button>
            <button onClick={() => counter.decrement()}>dec</button>
        </div>
    )
})

export default CounterMob