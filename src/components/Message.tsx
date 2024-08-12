import { useContext } from "react"
import { textContext } from "../contexts/textContext"

export const Message = () => {
  const { text } = useContext(textContext);
  return (
    <div>{text}</div>
  )
}

