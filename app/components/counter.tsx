import r2wc from "@r2wc/react-to-web-component"
import { useEffect, useState } from "react"
import store, { increment } from '../store'

const Counter = () => {
  const [count, setCount] = useState(0)

  const dispatchCallback = () => {
    const currentStore = store.getState()
    const counterValue = currentStore.counter.value

    if(counterValue !== count) setCount(counterValue)
  }

  useEffect(() => {
    dispatchCallback()
    store.subscribe(dispatchCallback)
  }, [])

  return (
    <button onClick={() => store.dispatch(increment())}>Count: {count}</button>
  )
}

export default Counter

const WebCounter = r2wc(Counter)

window.customElements.get("counter-component") || window.customElements.define("counter-component", WebCounter)
