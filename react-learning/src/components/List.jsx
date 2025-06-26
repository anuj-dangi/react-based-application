import React from 'react'

const List = () => {

    const fruits = ["apple", "orange", "banana", "coconut"];
    let listItems = fruits.map((fruit) =>( 
        <li>{fruit}</li>)
    )
  return (
    <ul>{listItems}</ul>
  )
};

export default List;
