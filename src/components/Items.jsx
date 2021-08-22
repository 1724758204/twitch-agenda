
import Item from './Item'
const Items = ({items,deleteItem}) => {
    return (
        <>
        {
            items.map((item)=>(
              <Item item={item} key={item.id} deleteItem={deleteItem}/>
            ))
        }
        </>
       
    )
}

export default Items
