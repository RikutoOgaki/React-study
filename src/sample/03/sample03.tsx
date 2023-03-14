import React, { useState } from 'react'

type State = {
  a: string,
  b: string,
  result: number
}

function sample03() {

  const [state, setState] = useState({
    a: '',
    b: '',
    result: 0
  })

  return (
    <div>
      <h1>inputタグを使った計算</h1>
      <h2>{state.result}</h2>
      <input type="text" value={state.a}
        onChange={(e) => setState({
          ...state,
          a: e.target.value
        })}
      />

      <input type="text" value={state.b}
        onChange={(e) => setState({
          ...state,
          b: e.target.value
        })}
      />

      <input type="button" value={'計算'}
        onClick={() => {
          let numA = parseInt(state.a)
          let numB = parseInt(state.b)

          setState({
            ...state,
            result: numA + numB
          })
        }}
      />
    </div>
  )
}

export default sample03