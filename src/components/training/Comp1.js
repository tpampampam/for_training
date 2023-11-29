import { Component, memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

import { Comp2 } from "./Comp2"




const Message = ({counter}) => {
  return (
      <div>
          the counter is {counter}
      </div>
  )
}


const Counter = ({render}) => {
	const [counter, setCounter] = useState(0)

	const changeCounter = () => {
		setCounter(counter => counter + 1)
	}

	return(
		<>
			<button onClick={changeCounter}>Click me</button>
			{render(counter)}
		</>
	)
}

const Comp1 = () => {
  
  return(
      <div>
        <Counter render={counter => <Message counter={counter}/>}/>
      </div>
  )
}
export default Comp1




