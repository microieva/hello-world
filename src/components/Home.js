import CountryCard from './CountryCard'
import UserBanner from './UserBanner'
import '../styles/home.css'

const Home = ({countries}) => {
    const countriesMapped = countries
        .map((country, i) => 
            <li style={{listStyle:'none'}} key={i}>
                <CountryCard country={country}/>
            </li>
        )
    
    return (
        <div className='home-container'>
            <div className='banner-wrapper'>
                <UserBanner countries = {countries}/>
            </div>
            <div className='list-wrapper'>
                {countriesMapped} 
            </div>
              
        </div>

    )
}

export default Home