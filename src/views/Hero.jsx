import EarthCanvas from '../components/canvas/Earth'
import StarsCanvas from '../components/canvas/Stars'

const Hero = () => {
  return (
    <div id='earth'>
      <EarthCanvas />
      <StarsCanvas />
    </div>
  )
}

export default Hero
