import { useAppSelector } from 'hooks'
import Image from 'next/image'
import { SEO, Stacks, Timelines, Works } from 'components'
import { about } from 'styles'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Home = () => {
  const isDark = useAppSelector((state) => state.theme.value)
  useEffect(() => {
    gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap
        .timeline()
        .fromTo(
          '.about__intro-illust',
          1,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
        )
        .fromTo(
          '.about__intro-greeting',
          1,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
        )
    })
  }, [])

  return (
    <>
      <SEO />
      {/* 첫번째 섹션 */}
      <about.Intro isDark={isDark}>
        <div className='about__intro-illust'>
          <Image
            data-aos='fade-up'
            src='/static/woman.svg'
            width={500}
            height={500}
            alt='coding womant'
            priority
          />
        </div>
        <div className='about__intro-greeting'>
          <h1>박지윤</h1>
          <p>Frontend Developer</p>
        </div>
      </about.Intro>

      {/* 두번째 섹션 */}
      <about.InfoBox isDark={isDark} className='about__info'>
        <Timelines />
        <Stacks />
      </about.InfoBox>

      {/* 세번째 섹션 */}
      <Works />
    </>
  )
}
export default Home
