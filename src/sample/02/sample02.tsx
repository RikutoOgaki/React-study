import React, { useEffect, useState } from 'react'

function rollDice() {
    return Math.floor(Math.random()*6 + 1)
    
}

function sample02() {
    
    const [state,setState] = useState(0)
    console.log(state);

    useEffect(()=>{
        setState(rollDice())
    },[])

  return (
    <>
        <h1>Sample02</h1>

        <p>サイコロの出目:{state}</p>
        
        <input type="button" value="Diceroll" 
            onClick={()=> setState(rollDice())}
        />
    </>
  )
}

export default sample02