
function Card(props) {
    return (
      <div className='card'>
        <h1>Nombre: {props.nombre}</h1>
        <h2>Descripcion: {props.descripcion}</h2>
      </div>
    )
  }
  export default Card;