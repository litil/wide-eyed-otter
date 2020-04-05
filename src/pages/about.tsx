import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Wide Eyed Otter" desc="Hi. I'm Litil!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Litil!</h1>
        <p>
          I mainly work around tech projects. You can visit my other projects on <a href="https://github.com/litil/">Github</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
