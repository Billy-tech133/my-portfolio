import React from "react"
import stackList from "../constants/stack_content"
const Stack = () => {
  return (
    <main>
      <h2>my skill stack</h2>
      <div>
        {stackList.map(stack => {
          const { id, image, name } = stack
          return (
            <div key={id}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Stack
