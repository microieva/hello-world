import '../styles/stats.css'

const Stats =({countries, worldPopulation}) => {

    const percentage = (population) => {
        const percentage = population*100/worldPopulation
        return parseFloat((percentage).toFixed(2))
        
    }

    const format = (population) => {
        return population
            .toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( " " )
    }

    return (
        <div className='stats-wrapper'>
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
                            <div className='inner-column' style={{width:`${percentage(country.population)}%`}}> </div>  
                            <div className='column-titles'>
                                <p>{country.name}</p> 
                                <p>{format(country.population)} 
                                    {
                                        percentage(country.population) < 0.01 ?
                                        <spam>(less than 0.1% of the World's population)</spam>
                                        :
                                        <spam>({percentage(country.population)}% of the World's population)</spam>
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