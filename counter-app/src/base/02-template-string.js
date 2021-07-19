


const name   = 'Carlos';
const lastname = 'Moctezuma';


// const fullName = nombre + ' ' + apellido;
const fullName= `${ name }, ${ lastname }`;

//console.log( fullName );


export function getHello(name = "fernando") {
    return 'Hello ' + name;
}




//console.log( `Este es un texto: ${ getHello( name ) }  ` );