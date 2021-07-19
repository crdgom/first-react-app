import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({name, value}) => {
    const [counter, setCounter]= useState(0);
    // handleAdd
    const handleAdd = ()=>{
        setCounter(counter +1);
        //setCounter( (c)=> c+1)
    }
    const handleRemove =()=>{
        setCounter(counter -1);
    }
    const handleReset =()=>{
        setCounter(value = 0)
    }
    return (
        <>
            <h1>{name}</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRemove}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

CounterApp.defaultProps = {
    name: 'CounterApp',
    value: PropTypes.number
}
export default CounterApp