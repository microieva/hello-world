import { format, formatUpdated } from '../functions'
import '../styles/corona-stats.css'

const CoronaStats = ({ countries }) => {
    console.log('CoronaStats.js --------------------------------------------------------------------------------------------------------------------------------------------------');

    const deathTotal = countries
        .map(country => {
            if (country.latest_data) {   
               return country.latest_data.deaths
            }
            return 0
        })
        .reduce((acc, curr) => acc + curr)
    

    const deathToday = countries
        .map(country =>{
            if (country.today) {
                return country.today.deaths
            }
            return 0
        })
        .reduce((acc, curr) => acc + curr)
    
    return (
        <div className='corona-stats-container'>
            <h2>Corona Statistics</h2>
            {countries && countries.length === 250 ? 
                <div>
                    <p>Total number of deaths: {format(deathTotal)}</p>
                    <p>Deaths today: {format(deathToday)}</p>
                    <p>Data updated: {formatUpdated(countries[0].updated_at)}</p>
                </div>
            :
                <div>
                    <p>Countries Found: {countries.length}</p>
                </div>
            }
        </div>
    )
}

export default CoronaStats