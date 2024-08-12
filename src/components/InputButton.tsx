import { useContext } from "react"
import { textContext } from "../contexts/textContext"


export const InputButton = () => {
  const { text, updatedText } = useContext(textContext);

  return (
    <button onClick={() => updatedText()}>Ändra text</button>
  )
}

