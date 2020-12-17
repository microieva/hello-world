import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import { format } from '../functions'
import '../styles/country-page.css'

const CountryPage = ({ countries }) => {
    const { name } = useParams()
    let country = countries.find(c => c.name === name)
    console.log('country: ', country);
    return (
        <div className='country-page-container'>
            <div className='banner'>
                <div className='banner-flag'>
                    <img src={country.flag} alt={`Flag of ${country.name}`}/>
                </div>
                <div className='banner-name'>
                    <h2>{country.name}</h2>
                </div>
            </div>
            <div className='content'>
                {/* <h2>blah blah blah</h2> */}
                <div className='map-container'>
                    <div className='country-info'>
                    <div className='info'>
                            <h5>Capital: </h5>
                            <p>{country.capital}</p>    
                        </div>
                        <div className='info'>
                            <h5>Official Languages: </h5>
                            <p 
                                style={{textAlign:'right', marginLeft:'2rem'}}
                            >
                                {country.languages
                                    .map(lang => lang.name).join(", ")}
                            </p>   
                        </div>
                        <div className='info'>
                            <h5>Population: </h5>
                            <p>{format(country.population)}</p>    
                        </div>
                        <div className='info'>
                            <h5>Neighboring Countries: </h5>
                            <p 
                                style={{textAlign:'right', marginLeft:'2rem'}}
                            >
                                {country.borders
                                    .map(border => border).join(", ")}
                            </p>      
                        </div>
                    </div>
                    <MapContainer />
                </div>
                <Link to='/'>
                    <button>
                        Back
                    </button>
                </Link>  
            </div>
            
        </div>
    )
}

export default CountryPage
