import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto, filtro,gastoFiltro}) => {
  return (
    <div className='listado-gastos contenedor'>
      
         {
            filtro?(
              <>
             <h2>{gastoFiltro.length ? 'Gastos':'No hay Gastos'} </h2>        
              {gastoFiltro.map(gasto =>( 
                <Gasto 
                 key={gasto.id}
                 gasto={gasto}
                 setGastoEditar={setGastoEditar}
                 eliminarGasto={eliminarGasto}
                />
             ))} 
             </>   
            ):(
             <>
              <h2>{gastos.length ? 'Gastos':'No hay Gastos'} </h2>        
              {gastos.map(gasto =>( 
                <Gasto 
                 key={gasto.id}
                 gasto={gasto}
                 setGastoEditar={setGastoEditar}
                 eliminarGasto={eliminarGasto}
                />
             ))}
             </>
            )           
         }         
    </div>
  )
}

export default ListadoGastos
