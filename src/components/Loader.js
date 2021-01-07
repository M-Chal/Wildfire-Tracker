import spinner from './giphy.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} className="spinner"/>
            <h3>Loading Data</h3>
        </div>
    )
}

export default Loader
