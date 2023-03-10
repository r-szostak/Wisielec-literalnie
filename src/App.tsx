import { useCallback, useState } from "react"
import words from "../wordsList.json"
import HangmanDraw from "./components/HangmanDraw"
import Keyboard from "./components/Keyboard"
import Word from "./components/Word"

function App() {
  const [guessedWord, setGuessedWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !guessedWord.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = guessedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter))

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters((currentLetters) => [...currentLetters, letter])
  }

  return (
    <div className="max-w-3xl flex flex-col gap-8 mx-auto items-center">
      <div className="text-3xl text-center">
        {isWinner && "Wygrałeś! Odśwież aby zagrać ponownie!"}
        {isLoser && "Przegrałeś! Odśwież aby zagrać ponownie!"}
      </div>
      <HangmanDraw numberOfGuesses={incorrectLetters.length} />
      <Word
        guessedLetters={guessedLetters}
        guessedWord={guessedWord}
        showWord={isLoser}
      />
      <div className="self-stretch">
        {" "}
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            guessedWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          endGame={isLoser || isWinner}
        />
      </div>
    </div>
  )
}

export default App
