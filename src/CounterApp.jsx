import { useState } from 'react'
import PropTypes from 'prop-types';


const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(value);
  
  const handleAdd = (event) => {
    // console.log(event)
    setCounter(counter + 1);
  }

  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);
  
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2> 
        {/* <button onClick={ (event) => handleAdd(event) }> //es lo mismo que la siguiente linea*/} 
        <button aria-label='btn-add' onClick={ handleAdd }>+1</button>
        <button aria-label='btn-sub' onClick={ handleSubstract }>-1</button>
        <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
