

const FirstApp = ({hello = 'Hello Word'})=>{
    
    return(
        <>
            <h1>{hello}</h1>
            {/* <h1>{JSON.stringify(hello, null, 3)}</h1> */}
            <p>Mi primera app</p>
        </>
    );
    
}

export default FirstApp