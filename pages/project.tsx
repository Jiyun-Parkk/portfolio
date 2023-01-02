import { Works } from 'components'
import { useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  const boxref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: boxref,
    offset: ['end end', 'start start'],
  })
  const pref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    scrollYProgress.onChange((scroll) => {
      if (pref.current) {
        pref.current.style.transform = `translateX(${Math.abs(
          scroll * 100 - 100,
        )}%)`
      }
    })
  }, [scrollYProgress])
  return (
    <>
      <section ref={boxref} style={{ height: '200vh', background: 'red' }}>
        <motion.p
          ref={pref}
          style={{ position: 'sticky', top: '200px', left: 0 }}
        >
          fasfasfasfafasfas
        </motion.p>
      </section>
    </>
  )
}

export default Project
