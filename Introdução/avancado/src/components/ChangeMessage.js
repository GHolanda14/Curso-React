import React from 'react'

const ChangeMessage = ({handleMsg}) => {
  return (
    <div>
        <button onClick={()=> handleMsg("Olá")}>1</button>
        <button onClick={()=> handleMsg("Oi")}>2</button>
        <button onClick={()=> handleMsg("Oie")}>3</button>
    </div>
  )
}

export default ChangeMessage