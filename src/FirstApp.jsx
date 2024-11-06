import PropTypes from 'prop-types';

const nombre = {
    message: "hola mundo",
    city: "La Paz"
};

export const FirstApp = ( {
        title = "Titulo por defecto", 
        valor, 
        otro = 111,
        name = "Carlos"
    }) => {
    console.log(title);
    // console.log(typeof(otro));
    
    // if (!otro){
    //     throw new Error("Otro props es obligatorio");
    // }
    
    return (
        <>
            <h1>{title}</h1>
            <h3>{sayHello("EEUU")}</h3>
            <h2>Hola Mundo</h2>
            {/* <h4>{JSON.stringify(nombre)}</h4> */}
            <h1>Sumando 10 + 1 = {valor + 1} </h1>
            <h2>{otro}</h2>
            <h1>{name}</h1>
        </>
    )
}

FirstApp.propTypes={
    title: PropTypes.string,
    valor: PropTypes.number,
    otro: PropTypes.number.isRequired
}

// FirstApp.defaultProps = {
//     title:'Titulo por defecto',
//     otro: 111,
//     name: 'Carlos'
// }
/**
 * 
 * @returns String
 */
const sayHello = (country) => {
    return `Say Hello ${country} `;
}