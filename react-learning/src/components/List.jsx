import { Waypoints } from 'lucide-react';
import React from 'react'

const List = () => {

    const fruits = ["apple", "orange", "banana", "coconut"];
    let listItems = fruits.map((fruit) =>( 
        <li>{fruit}</li>)
    )
  return (
    <ul>{listItems}</ul>
    // Another Way
    // <div>
    //   {
    //     fruits.map((fruit, idx) => (
    //       <div
    //         id={idx}
    //       >{fruit}</div>
    //     ))
    //   }
    // </div>
  )
};

export default List;
