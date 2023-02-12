import { useState } from "react"

export const AddCategory = () => {
  const [InputValue, SetInputValue] = useState('');//change state app

  const OnInputChange = ({ target }) => {
    SetInputValue([...InputValue, target.value])
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
        value={InputValue}

      />
    </form>
  )
}
