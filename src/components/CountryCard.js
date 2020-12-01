import { Link } from 'react-router-dom';
import { format } from '../functions'
import '../styles/country-card.css'

const CountryCard = ({country}) => {
    const { 
        //alpha2Code,
        flag, 
        name, 
        capital, 
        languages,
        population
    } = country

    /*console.log('CountryCard  typeof coronaStats, ', typeof coronaStats);
    let cPop = 
        coronaStats.find((country) => country.code = alpha2Code).population
    if (cPop === undefined) {
        return "undefined"
    }
    console.log('CountryCard cPop, ', cPop);
    console.log('CountryCard typeof cPop: ', typeof cPop);*/
    //console.log('CountryCard ,', country);
    return (
        <Link 
            to={`/country/${name}`} 
            style={{textDecoration:'none', color: 'black'}}
        >
            <div className='country-card'>
                <div className='flag'>
                    <img src={flag} alt={`Flag of ${name}`}/>
                </div>
                <div className='country-info'>
                    <div className='name'>{name}</div>
                    <div className='info'>
                        <h5>Capital: </h5>
                        <p>{capital ? capital : '-'}</p>    
                    </div>
                    <div className='info'>
                        <h5>Population: </h5>
                        <p>{format(population)}</p> 
                        
                        {/* {cPop !== undefined ? 
                            <p>{cPop}</p>
                        :
                            <p>{format(population)}</p>} */}
                    </div>
                    {languages.length > 1 
                    ?
                        <div className='info'>
                            <h5>Languages: </h5>
                            <p 
                                style={{textAlign:'right', marginLeft:'2rem'}}
                            >
                                {languages
                                    .map(lang => lang.name).join(", ")}
                            </p>
                        </div>
                    :
                        <div className='info'>
                            <h5>Language: </h5>
                            <p>{languages[0].name}</p>
                        </div>
                    }
                </div>        
            </div> 
        </Link>
    )
}

export default CountryCard
