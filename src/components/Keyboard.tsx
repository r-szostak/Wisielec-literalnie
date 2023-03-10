const KEYS = [
  "a",
  "ą",
  "b",
  "c",
  "ć",
  "d",
  "e",
  "ę",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ł",
  "m",
  "n",
  "ń",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "ś",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ź",
  "ż",
]

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  endGame: boolean
}

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  endGame,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-auto-fit gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || endGame}
            className={`uppercase border-[3px] p-1 w-full aspect-square text-xl font-bold cursor-pointer border-sky-500 hover:bg-sky-600/50 disabled:opacity-30 disabled:border-gray-500 disabled:pointer-events-none ${
              isActive ? "bg-sky-600/60 pointer-events-none" : ""
            }`}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
