import IconoCerrar from '../img/cerrar.svg'

const Modal = ({animarModal,setAnimarModal,setModal}) => {

   const ocultarModal= () =>{
     setAnimarModal(false);

      setTimeout(() => {
        setModal(false);
      }, 500);
     }

  return (
    <div className="modal">
        <div className="cerrar-modal"> 
            <img 
            src={IconoCerrar}
            alt="Icono cerrar"
            onClick={ocultarModal}
            />
         </div>

         <form className={`formulario ${animarModal? 'animar':'cerrar'}`}>
            <legend>NUEVO GASTO</legend>
         </form>
      
    </div>
  )
}

export default Modal
