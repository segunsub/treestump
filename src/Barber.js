import {Image} from 'react-bootstrap'
import barb from './clipper.jpeg'

function Barber() {
    return (
        <div class="boxContain">
        <Image src={barb} alt="cleaning image" fluid rounded style={{width: '99vw'}}/>
        <h4 className='textDiv'>TreeStump
            <em className='title'>
            Barbing page
            </em>
        </h4>
        
     </div>
    )
}

export default Barber
