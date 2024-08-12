import { useState } from 'react'
import './App.css'
import { IText, textContext } from './contexts/textContext'
import { Message } from './components/Message';
import { InputButton } from './components/InputButton';

function App() {
  const [text, setText] = useState<IText>({
    text: "joel", updatedText: () => {
    }
  });

  text.updatedText = () => {
    setText({ ...text, text: "Test" });
  }

  return (
    <>
      <textContext.Provider value={text}>
        <Message />
        <InputButton />
      </textContext.Provider>
    </>
  )
}

export default App
