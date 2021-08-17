import {Image} from 'react-bootstrap'
import barb from './clipper.jpeg'

function Barber() {
    return (
        <>
            <div class="boxContain">
            <Image src={barb} alt="cleaning image" fluid rounded style={{width: '99vw'}}/>
            <h4 className='textDiv'>Barber Shop
                <em className='title'>
                Create Your Style
                </em>
            </h4>
            
        </div>
        <h2>Come In For A Fresh Cut</h2>
     </>
    )
}

export default Barber
