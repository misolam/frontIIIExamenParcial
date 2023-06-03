import { useState } from "react";
import Card from "./Card";

function Form ({onSubmit}) {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [error, setError] = useState(true)
    const [datosSubmitted, setDatosSubmitted] = useState({})
    
  
  
    const onChangeNombre = e => {
      setNombre(e.target.value)
    }
  
    const onChangeDescripcion = e => {
      setDescripcion(e.target.value)
    }
  
    const handleSubmit = e => {
      e.preventDefault()
     
      
      if (!/^\S/.test(nombre)) {
        setError('* Por favor chequea que la información sea correcta. El nombre no puede tener espacio en blanco al principio')
      } else if (nombre.length < 3) {
        setError('* Por favor chequea que la información sea correcta. El nombre debe tener al menos 3 caracteres')
      } else if (descripcion.length < 6) {
        setError('* Por favor chequea que la información sea correcta. La descripcion debe contener al menos 6 caracteres')
      } else {
        onSubmit({ nombre, descripcion});
        setDatosSubmitted({
                nombre: nombre,
                descripcion: descripcion,
              })
              setNombre('')
              setDescripcion('')
        setError(false)
        console.log(datosSubmitted)
      }
      
    }
  
    
  
    return (
      <>
        <h1>FORMULARIO</h1>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='nombre-apellido'>Nombre</label>
          <input
            type='text'
            id='nombre-apellido'
            value={nombre}
            placeholder='Ingrese su nombre y apellido'
            onChange={onChangeNombre}
          />
  
          <label htmlFor='descripcion'>Descripcion</label>
          <input
            type='text'
            id='descripcion'
            value={descripcion} 
            placeholder='Descríbase brevemente'
            onChange={onChangeDescripcion}
          />
          <button className='button'>Enviar data 📨</button>
          {error && <p className='error'> {error}</p>}
        </form>
        
  
        
      </>
    )
}
export default Form;