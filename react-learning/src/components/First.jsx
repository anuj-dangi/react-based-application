import React from 'react'

const First = () => {
    let count = 0;
    function fun()
    {
        count = count+1;
    }
  return (
    <div>
      Hello, World
      <button onChange={fun()}>{count}</button>
    </div>
  )
}

export default First
