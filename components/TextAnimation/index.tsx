import { motion } from 'framer-motion'

interface TextAniprops {
  text: string
  variants: {
    start: {
      opacity: number
      y: number
    }
    end: {
      opacity: number
      y: number
    }
  }
}

export const TextAnimation = ({ text, variants }: TextAniprops) => {
  const textArr = text.split('')
  return (
    <>
      {textArr.map((text, idx) => (
        <motion.span variants={variants} key={idx}>
          {text}
        </motion.span>
      ))}
      <br />
    </>
  )
}
