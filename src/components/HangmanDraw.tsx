const HEAD = (
  <div className="absolute top-10 -right-[21px] h-12 w-12 border-black rounded-full border-[6px]"></div>
)
const BODY = (
  <div className="absolute top-[88px] right-0 h-[70px] w-1.5 bg-black"></div>
)
const LEFTARM = (
  <div className="absolute top-[110px] -right-14 h-1.5 w-14 -rotate-45 origin-bottom-left  bg-black"></div>
)
const RIGHTARM = (
  <div className="absolute top-[110px] right-1.5 h-1.5 w-14 rotate-45 origin-bottom-right  bg-black"></div>
)
const RIGHTLEG = (
  <div className="absolute top-[152px] -right-[52px] h-1.5 w-14 rotate-45 origin-bottom-left  bg-black"></div>
)
const LEFTLEG = (
  <div className="absolute top-[152px] right-0 h-1.5 w-14 -rotate-45 origin-bottom-right  bg-black"></div>
)

const BODY_PARTS = [HEAD, BODY, LEFTARM, RIGHTARM, RIGHTLEG, LEFTLEG]

type HangmanDrawProps = {
  numberOfGuesses: number
}

const HangmanDraw = ({ numberOfGuesses }: HangmanDrawProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute top-0 right-0 h-10 w-1.5 bg-black"></div>
      <div className="h-1.5 w-32 ml-[45px] bg-black"></div>
      <div className="h-60 w-1.5 ml-[45px] bg-black"></div>
      <div className="h-1.5 w-24 bg-black"></div>
    </div>
  )
}

export default HangmanDraw
