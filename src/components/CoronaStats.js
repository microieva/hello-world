import Graph from '../components/Graph'
import { format, formatUpdated } from '../functions'
import '../styles/corona-stats.css'

const CoronaStats = ({ countries }) => {
    //console.log('CoronaStats.js --------------------------------------------------------------------------------------------------------------------------------------------------');
    console.log('CoronaStats countries: ', countries);
    const deathTotal = countries
        .map(country => 
            country.latest_data ? country.latest_data.deaths : 0
        )
        .reduce((acc, curr) => acc + curr)
    

    const deathToday = countries
        .map(country =>
            country.today ? country.today.deaths : 0
        )
        .reduce((acc, curr) => acc + curr)
    
    const confirmed = countries
        .map(country => 
            country.today ? country.today.confirmed : 0
        )
        .reduce((acc, curr) => acc + curr)
    
    const recovered = countries
        .map(country => 
            country.latest_data ? country.latest_data.recovered : 0
        )
        .reduce((acc, curr) => acc + curr)

    return (
        <div className='corona-stats-container'>
            <h2>Corona Statistics</h2>
            {countries && countries.length === 250 ? 
                <div>
                    <h3>Wordlwide</h3>
                    <div className='info-div'>
                        <div className='info'>
                            <h5>Deaths today: </h5>
                            <p>{format(deathToday)}</p>    
                        </div>
                        <div className='info'>
                            <h5>Confirmed today: </h5>
                            <p>{format(confirmed)}</p>    
                        </div>
                        <div className='info'>
                            <h5>Total number of recovered: </h5>
                            <p> {format(recovered)}</p>    
                        </div>
                        <div className='info'>
                            <h5>Total number of deaths: </h5>
                            <p>{format(deathTotal)}</p>    
                        </div>
                       
                    </div>
                    <div className='info'id='updated'>
                            <h5>Data updated: </h5>
                            <p>{formatUpdated(countries[0].updated_at)}</p>    
                    </div>
                </div>
            :
                <div>
                    <p>Countries Found: {countries.length}</p>
                </div>
            }
            <div className='graph-wrapper'>
                <Graph 
                    deathTotal={deathTotal}
                    deathToday={deathToday}
                    confirmed={confirmed}
                    recovered={recovered}
                />
            </div>
        </div>
    )
}

export default CoronaStats