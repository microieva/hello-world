import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../styles/country-page.css'

const CountryPage = ({ loading, countries }) => {
    console.log('CountryPage.js ---------------------------------------------------------------------------------------------------------------------------------------------------------------');
    const { name } = useParams()
    let country = countries.find(c => c.name === name)

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
                <p>blah blah blah</p>
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
