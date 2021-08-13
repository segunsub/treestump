import {Image} from 'react-bootstrap'
import gif from './tree1.jpeg'
function Cleaning() {
    return (
        <div>

       
           <div className="main flex">
            <div className='title'>
                <h3 style={{fontSize: '-webkit-xxx-large'}}>
                        Get the Clean You Need	
                </h3>
            </div>        
                <Image src={gif} alt="" className="imageClean" />
            </div>
        </div>
    )
}

export default Cleaning   
