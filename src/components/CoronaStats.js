
import '../styles/corona-stats.css'

const CoronaStats = ({ coronaStats }) => {
    console.log('stats, ', coronaStats);
    // const coronaStatsMapped = coronaStats
    //     .map(country => <p>{country.name}</p>) 
    
    return (
        <div className='corona-stats-container'>
            <h2>Corona Statistics</h2>
            {/* <div>
                {coronaStatsMapped}
            </div> */}
        </div>
    )
}

export default CoronaStats