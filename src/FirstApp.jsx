import PropTypes from 'prop-types';

const myName = 'Brandon';

const message = () => 'Saludos';

const getResult = (a,b) => {
  return a + b
}

const obj = {
  name: 'Jaimes',
  love: 'One Piece'
} //no podemos mostrar el objeto completo nos daria error necesitariamos
//hacerlo con le JSON.strin... pero si podemos imprimir accediento a cada 
//una de las propiedades

const FirstApp = ({ title, subTitle, name}) => {
  return (
    <>
      <h1 data-testid='test-title'>Title: { title }</h1>
      <p>subtitle: { subTitle }</p>
      <p>subtitle: { subTitle }</p>
      <p>name: { name }   </p>
      {/* <h3>Este es el mensaje: { message() }</h3> */}
      {/* <h4>El resultado: { getResult(1,4) }</h4> */}
      {/* <h5>My love: { obj.love }</h5> */}
    </>
  );
}

//Por default es necesario colocar tanto defaulProps y propTypes al final

//con esto podemos darle a entender que se necesita de un un string
//si se trabaja con TS no es necesario, pero esto nos ayuda a tener
//l control tanto del tipo asi como si es obligatorio o no!
FirstApp.propTypes = {
  // title: PropTypes.string.isRequired //Esto nos dice que es obligatorio sino Error
  // title: PropTypes.string //en este caso solo necesita ser string sino error
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

/**
 * Podmeos definir valores de por default para las props que esperamos 
 * podemos definirlo al inicio o en la destructuracion pero esta es una mejor
 * practica, en este caso primero se toman en cuenta los defualt props y luego
 * lo especificado en el propTypes.
 * 
 * En este caso si en el componente no mandamos la prop title que es requerida
 * no va a marcar error, le dara el valor por default, esto porque actuan primero
 * las defaults
 * 
 * incluso podmeos añadir props qie no tienen o se dan en las props del componente 
 * como el caso de los name, sin emabrgo esta la podemos tener o usar en la funcion
 * sin ningun problema
 */

FirstApp.defaultProps = {
  // title: 'No tenemos titulo',
  name: 'default'
}



export default FirstApp
