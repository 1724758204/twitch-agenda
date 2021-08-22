import imagen from '../twitch.jpg'
import { FaTrash } from 'react-icons/fa'
const Item = ({item,deleteItem}) => {
    return (
        <div className='col-sm-10'>
        <p>{item.day}-{item.time}</p>
        <div className="row item">
            <div className="col-sm-3">
                <img src={imagen} alt="" className='img-fluid'/>
            </div>
            <div className="col-sm-7">
                {item.title}
            </div>
            <div className="col-sm-2">
               <FaTrash style={{color:'red',cursor:'pointer'}}
               onClick={()=>deleteItem(item.id)}/>
            </div>
        </div>
    </div>
    )
}
export default Item
