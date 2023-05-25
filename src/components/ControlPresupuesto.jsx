import {useEffect,useState} from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {formatearCantidad} from '../helpers'

const ControlPresupuesto = ({gastos,presupuesto}) => {
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

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <CircularProgressbar 
              styles={buildStyles({
                pathColor:'#3B82F6',
                trailColor:'#F5F5F5'

              })}
              value={percentage} 
              text={`${percentage} % Gastado`} />
        </div>
        <div className='contenido-presupuesto'>
            <p><span> Presupuesto :</span> {formatearCantidad(presupuesto) }</p>

            <p><span> Disponible :</span> {formatearCantidad(Number(disponible)) }</p>

            <p><span> Gastado :</span> {formatearCantidad(Number(gastado)) }</p>
        </div>
      
    </div>
  )
}

export default ControlPresupuesto

