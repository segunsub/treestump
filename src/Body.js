import {Image} from 'react-bootstrap'
import tree from './tree5.jpeg'
function Body() {
    return (
        <div class="contain">
           <Image src={tree} alt="cleaning image" fluid rounded style={{width: '99vw'}}/>
           <h4 className='h4Header'>TreeStump
               <em className='title'>
               Rooted Foundation For Progress 
               </em>
           </h4>
           
        </div>
    )
}

export default Body
