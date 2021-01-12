import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import CountryStats from './CountryStats'
import { format } from '../functions'
import '../styles/country-page.css'

const CountryPage = ({ countries }) => {
    const { name } = useParams()
    let country = countries.find(c => c.name === name)
    console.log('country: ', country);
    const history = useHistory()
    const handleClick =()=>{
        history.push("/");
    }
    console.log('borders: ', country.borders);
    const neighboringCountries = []
    country.borders
        .map(border => {
            neighboringCountries.push(countries.find(c => c.alpha3Code === border))
        })
    console.log('neighboring: ', neighboringCountries);

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
                <div className='map-container'>
                    <div className='country-data' style={{fontSize: 'larger'}}>
                        <div className='info-data'>
                            <h5>Capital: </h5>
                            <p>{country.capital}</p>    
                        </div>
                        <div className='info-data'>
                            <h5>Official Languages: </h5>
                            <p 
                                style={{textAlign:'right', marginLeft:'2rem'}}
                            >
                                {country.languages
                                    .map(lang => lang.name).join(", ")}
                            </p>   
                        </div>
                        <div className='info-data'>
                            <h5>Population: </h5>
                            <p>{format(country.population)}</p>    
                        </div>
                        {country.borders.length>0 &&
                            <div className='info-data'>
                                <h5>Neighboring Countries: </h5>
                                {neighboringCountries
                                    .map((c, i) => {
                                        console.log(c.name);
                                        return (
                                            <p 
                                                key={i} 
                                                style={{textAlign:'right', marginLeft:'2rem'}}
                                            >
                                                <Link 
                                                    to={`/country/${c.name}`} 
                                                    style={{textDecoration:'none', color: 'black'}}
                                                >
                                                    <p>{c.name}</p>
                                                </Link>
                                            </p> 
                                        )
                                    })
                                    .join(", ")
                                }             
                            </div>
                        }
                    </div>
                    <MapContainer />
                </div>

                <div className='stats-wrapper'>
                    <CountryStats country={country} />
                </div>
                
                <button type='button' onClick={handleClick}>
                    Back
                </button>
                 
            </div>    
        </div>
    )
}

export default CountryPage
