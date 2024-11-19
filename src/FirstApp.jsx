import PropTypes from 'prop-types';

const nombre = {
    message: "hola mundo",
    city: "La Paz"
};

export const FirstApp = ( {
        title = "Titulo por defecto", 
        subTitle = "Subtitulo",
        name = "Carlos"
    }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h3>{name}</h3>
        </>
    )
}

FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    valor: PropTypes.number,
    otro: PropTypes.number
}

// // FirstApp.defaultProps = {
// //     title:'Titulo por defecto',
// //     otro: 111,
// //     name: 'Carlos'
// }

/**
 * 
 * @returns String
 */
const sayHello = (country) => {
    return `Say Hello ${country} `;
}