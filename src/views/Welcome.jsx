import EarthCanvas from '../components/canvas/Earth'
import StarsCanvas from '../components/canvas/Stars'


const Welcome = () => {
  return (
    <div>
        <div id='earth'>
            <EarthCanvas />
        </div>
        <StarsCanvas />
    </div>
    
  )
}

export default Welcome
