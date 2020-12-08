import { format, percentage } from '../functions'
import '../styles/stats.css'

const Stats =({countries, worldPopulation}) => {
    console.log('Stats.js ----------------------------------------------------------------------------------------------------------------------------------------------------------------');
    return (
        <div className='stats-container'>
            <div>
                <h2>Population</h2>
                {countries.length > 10 ? 
                            <h3>Top 10</h3>
                        :
                        countries.length >=2 ?
                                <h3>Countries Found</h3>
                            :
                                <h3> </h3>
                }    
            </div>
            <div className='world-column'>
                <div className='column-titles'>
                    <p>WORLD</p> 
                    <p style={{ paddingRight:'0.5rem' }}>
                        {format(worldPopulation)}
                    </p>
                </div>
            </div>
            {countries.sort((a, b) => b.population - a.population).slice(0, 10)
                .map((country, i) => 
                    <div key={i} className='country-column'> 
                        <div className='inner-column' style={{width:`${percentage(country.population, worldPopulation)}%`}}> </div>                              <div className='column-titles'>
                            <p>{country.name}</p> 
                            <p>{format(country.population)} 
                                {
                                    percentage(country.population, worldPopulation) < 0.01 ?
                                    <em>(less than 0.1% of the World's population)</em>
                                    :
                                    <em>({percentage(country.population, worldPopulation)}% of the World's population)</em>
                                }
                            </p>
                        </div>
                    </div>
                )
            }
        </div>        
    )    
}
export default Stats