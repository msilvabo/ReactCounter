import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    
    const [counter,setCounter ] = useState(value);
    const [otro,setOtro ] = useState(value + 1);
    
    const handleAdd =()=> setCounter( (c)=> c + 1);

    const handleSubs =()=> setCounter( (c)=> c - 1);

    const handleReset =()=> {
        setCounter( value);
        setOtro(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { otro } </h2>
            <h2 data-testid='contador'> { counter } </h2>
            <button onClick={handleAdd}
            >Increment +1</button>
            <button onClick={handleSubs}
            >Decrement -1</button>
            <button aria-label='btn-reset' onClick={handleReset}
            >Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

