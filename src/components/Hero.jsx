import EarthCanvas from './canvas/Earth'
import StarsCanvas from './canvas/Stars'

const Hero = () => {
  return (
    <div id='earth'>
      <EarthCanvas />
      <StarsCanvas />
    </div>
  )
}

export default Hero
