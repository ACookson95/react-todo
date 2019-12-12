import React from "react"

const List = ({items}) => (
  <div>
    <h2>List:</h2>
    <ul>
        { items.map (item => <li key={item.id}> {item.todoValue} </li>)}
    </ul>
  </div>
)

export default List;