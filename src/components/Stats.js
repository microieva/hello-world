const Stats =({countries, worldPopulation}) => {

//sort array by population biggest->smallest
//splice top 10
//worldPopulation = 100% / 


    let countriesSorted = 
        countries.sort((a, b) => b.population - a.population)
    console.log('sorted: ', countriesSorted);

    return (
        <div className='stats-wrapper'>
            <div className='country-column'>
                WORLD: {worldPopulation}
            </div>
            {countriesSorted.slice(0, 10)
                .map((country, i) => 
                    <div key={i} className='country-column'
                        style={{
                            width: `${country.population/1000}%`, 
                            hegiht:'2rem'
                        }}
                    >
                        {country.name} {country.population}
                    </div>
                )
            }
        </div>        
    )
    
}

export default Stats