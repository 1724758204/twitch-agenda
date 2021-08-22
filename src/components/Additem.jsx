import React, {useState} from 'react'
import { FaBorderAll } from 'react-icons/fa'
const Additem = ({addItem}) => {
    const titulo = document.getElementById('titulo')
    const [title,setTitle]=useState('')
    const [day,setDay]=useState('')
    const [time,setTime]=useState('')
    const onSubmitItem = (e)=>{
        e.preventDefault();
        if(!title){
           alert('no hay un titulo');
           return
        }
        if(!day){
            alert('no hay dia');
            return
         }
         if(!time){
            alert('no hay hora');
            return
         }
         addItem({title,day,time})
         setTitle('')
         setDay('')
         setTime('')
    }
    return (
        <div className="col-sm-10">
        <div className="card bg-form-dark">
            <div className="card-header">
                <h2 className="text-muted">Agendar Stream</h2>
            </div>
            <div className="card-body">
                <form onSubmit={onSubmitItem}>
                    <div className='form-group' >
                        <label>Título</label>
                        <input
                            id='titulo'
                            type='text'
                            placeholder='Título del stream'
                            className="form-control"
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)

                            }
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="day"
                            className="form-control"
                            value={day}
                            onChange={(e)=> setDay(e.target.value)

                            }
                        >
                            <option value="">-- Elegir Día --</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miércoles">Miércoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                            <option value="Domingo">Domingo</option>

                        </select>
                    </div>
                    <div className='form-group' style={{marginTop:'15px'}}>
                        <label>Hora</label>
                        <input
                            type='time'
                            className="form-control"
                            value={time}
                            onChange={(e)=> setTime(e.target.value)

                            }
                        />
                    </div>
                    <div className="form-group">
                        <input style={{marginTop:'15px'}}
                            type="submit"
                            className="btn btn-primary btn-add-item"
                            value="Añadir stream"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
    
}

export default Additem
