import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../styles/country-page.css'

const CountryPage = ({countries}) => {
    const { name } = useParams()
    let country = countries.find(c => c.name === name)

    return (
        <div>
            {country.name}
            <Link to='/'>
                <button>
                    Back
                </button>
            </Link>  
        </div>
    )
}

export default CountryPage
