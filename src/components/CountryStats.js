import { format, formatUpdated } from '../functions'

const CountryStats = ({ country }) => {
    const { name, latest_data, today } = country
    return (
        <div className='stats-container' style={{width:'50%'}}>
            <h3>COVID-19 in {name}</h3>
            <div className='info-div'>
                <div className='info'>
                    <h5>Deaths today: </h5>
                    <p>{format(today.deaths)}</p>    
                </div>
                <div className='info'>
                    <h5>Confirmed today: </h5>
                    <p>{format(today.confirmed)}</p>    
                </div>
                <div className='info'>
                    <h5>Total number of recovered: </h5>
                    <p>{format(latest_data.recovered)}</p>    
                </div>
                <div className='info'>
                    <h5>Total number of deaths: </h5>
                    <p>{format(latest_data.deaths)}</p>    
                </div>
                       
            </div>
                <div className='info'id='updated'>
                    <h5>Data updated: </h5>
                    <p>{formatUpdated(country.updated_at)}</p>    
                </div>
        </div>
    )
}

export default CountryStats