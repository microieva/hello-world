import CountryCard from './CountryCard'
import '../styles/home.css'

const Home = ({countries}) => {
    const countriesMapped = countries
        .map((country, i) => 
            <li style={{listStyle:'none'}} key={i}>
                <CountryCard country={country}/>
            </li>

        )
    console.log('countries from Home', countriesMapped);
    return (
        <div className='home-container'>
            <div>
                USER INPUTS
            </div>
            <div className='list-wrapper'>
                {countriesMapped} 
            </div>
              
        </div>

    )
}

export default Home