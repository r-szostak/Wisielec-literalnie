type WordProps = {
  guessedLetters: string[]
  guessedWord: string
  showWord?: boolean
}

const Word = ({ guessedLetters, guessedWord, showWord = false }: WordProps) => {
  return (
    <div className="flex gap-2 text-5xl uppercase font-bold font-mono ">
      {guessedWord.split("").map((letter, index) => (
        <span
          className="border-b-4 min-w-[24px] min-h-[52px] border-b-sky-500"
          key={index}
        >
          {guessedLetters.includes(letter) || showWord ? (
            <span
              className={
                guessedLetters.includes(letter)
                  ? "text-lime-700"
                  : "text-red-500"
              }
            >
              {letter}
            </span>
          ) : null}
        </span>
      ))}
    </div>
  )
}

export default Word
