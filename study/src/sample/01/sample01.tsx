// Reactを動かすためのものをimport(引っぱってくること)してきている
// { useState } と書かれていることで、18行目の文を有効にしている
import React, { useState } from 'react'

// TypeScriptなので型宣言が必要になるため書かれている。
type Props = {
  count:number
}

// jsのような関数を作っている
function CountComponent(props:Props = {count:0}){
  return(
    <p>{props.count}</p>
  )
}

// 基本Reactはこの中で書き、ブラウザに描画されるのはreturnの中のみ
function sample01() {

    // constでstateが「入力」。setStateが「stateの内部状態」。useStateが「初期状態」を表している。
    const [state,setState] = useState(0)

  return (
    // <></>はReactならでわのもので、HTMLでいう
    // 29行目は11行目に書いた関数を要素として扱っている。Reactならでわかも。
    // 33行目のinputはクリックするたびにstateの状態から、＋１するという事が書かれているう
    // 37行目のinputはクリックするたびにstateの状態から、ー１するという事が書かれているう
    <>
      <h1>Sample01</h1>

      <CountComponent count={state}/>

      <input type="button" value="add"
        onClick={()=> setState(state + 1)}
      />

      <input type="button" value="remove"
        onClick={()=> setState(state - 1)}
      />
    </>
  )
}

export default sample01