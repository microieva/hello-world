import '../styles/stats.css'

const Stats =({countries, worldPopulation}) => {
//sort array by population biggest->smallest
//splice top 10
//worldPopulation = 100% / 

    return (
        <div className='stats-wrapper'>
            <div className='world-column'>
                <div className='column-titles'>
                    <p>WORLD</p> <p style={{ paddingRight:'0.5rem' }}>{worldPopulation}</p>
                </div>
            </div>
            {countries.sort((a, b) => b.population - a.population).slice(0, 10)
                .map((country, i) => 
                    <div key={i} className='country-column'> 
                        <div className='inner-column' style={{width:`${10}%`}}> </div>  
                        <div className='column-titles'>
                            <p>{country.name}</p> <p>{country.population}</p>
                        </div>
                         
                    </div>
                )
            }
        </div>        
    )    
}
export default Stats