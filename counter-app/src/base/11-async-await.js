

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'iJJ2vzkQFv0JqxZJSzhOuD9zKE5m2er3';
        const keword = 'sex';
        const rating = 'r';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${keword}&rating=${rating}`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No existe'
    }
    
    
    
}



