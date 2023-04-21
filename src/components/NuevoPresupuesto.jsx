import React from 'react'

const NuevoPresupuesto = ({presupuesto,setPresupuesto}) => {

    const handlePresupesto=(e)=>{
        e.preventDefault();

        number(presupuesto);
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupesto} className='formulario'>
        <div className=' campo'>
            <label>Definir Presupuesto</label>
            <input
                className=' nuevo-presupuesto'
                type='text'
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onchange={e=> setPresupuesto(e.target.value)}
            />
        </div>
        <input  type='submit' value="Añadir"/>
      </form>
    </div>
  )
}

export default NuevoPresupuesto
