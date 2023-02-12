import { useState } from "react"

export const AddCategory = () => {
  const [Input, setInput] = useState('');//change state app

  const OnInputChange = ({ target }) => {

  }
  
  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h1>Gifs</h1>
      <input type="text"
        placeholder="Tipyng you gifs"
        onChange={(event) => OnInputChange(event)}

      />
    </form>
  )
}
