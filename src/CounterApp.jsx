import {useState} from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    console.log('render');
    
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
            <h2> { counter } </h2>
            <button onClick={handleAdd}
            >Increment +1</button>
            <button onClick={handleSubs}
            >Increment -1</button>
            <button onClick={handleReset}
            >Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

