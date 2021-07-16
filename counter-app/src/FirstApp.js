import PropTypes from 'prop-types';

const FirstApp = ({hello, subtitle})=>{

    return(
        <>
            <h1>{hello}</h1>
            {/* <h1>{JSON.stringify(hello, null, 3)}</h1> */}
            <p>{subtitle}</p>
        </>
    );
    
}

FirstApp.propTypes = {
    hello: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'hey i am Carlos'
}
export default FirstApp