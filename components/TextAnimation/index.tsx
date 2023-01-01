import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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

const SplitText = styled(motion.span)`
  font-size: 18px;
`

export const TextAnimation = ({ text, variants }: TextAniprops) => {
  const [textArr, setTextArr] = useState([''])
  useEffect(() => setTextArr(text.split('')), [text])
  return (
    <>
      {textArr?.map((text, idx) => (
        <SplitText variants={variants} key={idx}>
          {text}
        </SplitText>
      ))}
      <br />
    </>
  )
}
