import {useEffect,useState} from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {formatearCantidad} from '../helpers'

const ControlPresupuesto = ({gastos,
                             setGastos,
                             presupuesto,
                             setPresupuesto,
                             setIsValidPresupuesto
                            }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado,    setGastado]    = useState(0);
  const [percentage,    setPercentage]    = useState(0);

  useEffect(()=>{
    const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad + total ,0)
    const totalDisponible = presupuesto-totalGastado;
    const nuevoPorcentaje = (((presupuesto -totalDisponible)/presupuesto)*100).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setPercentage(nuevoPorcentaje)
  },[gastos])

 const handleResetApp=()=>{
  const resultado = confirm('¿Deseas reiniciar la app?')
  if(resultado){
    setGastos([]);
    setPresupuesto(0)
    setIsValidPresupuesto(false)
  }
  
 }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <CircularProgressbar 
              styles={buildStyles({
                pathColor: percentage >100 ? '#dc2626' :'#3B82F6',
                trailColor: '#F5F5F5',
                textColor: percentage >100 ? '#dc2626' :'#3B82F6'

              })}
              value={percentage} 
              text={`${percentage} % Gastado`} />
        </div>
        <div className='contenido-presupuesto'>
            <button 
              className='reset-app'
              type="button" 
              onClick={handleResetApp} 
            >Resetear App</button>  

            <p><span> Presupuesto :</span> {formatearCantidad(presupuesto) }</p>

            <p className={`${disponible < 0 ? 'negativo' :'' }`}>
              <span> Disponible :</span>
               {formatearCantidad(Number(disponible)) }</p>

            <p><span> Gastado :</span> {formatearCantidad(Number(gastado)) }</p>
        </div>
      
    </div>
  )
}

export default ControlPresupuesto

