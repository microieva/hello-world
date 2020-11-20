import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import '../styles/user-banner.css'
import '../styles/home.css'

const Home = ({ countries }) => {
    const [searchWord, setSearchWord] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
    
    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) => 
                country.name.toLowerCase().startsWith(searchWord.toLowerCase())
            )
        )
        console.log('countries : ', countries); 
    },[searchWord, countries]);
    
    const useInput = ({ type }) => {
        const input = 
            <input 
                className='user-input'
                placeholder="Search countries ..."
                value={searchWord} 
                onChange={e => setSearchWord(e.target.value)} 
                type={type} 
            />;
        console.log('INPUT filteredCountries: ', filteredCountries);
        return [input]
    }

    const useButton = ({ name }) => {
        const button =
            <button
                id={name}
                onClick={setFilteredCountries && console.log('BUTTON filteredCountries: ', filteredCountries)}
            >
                {name.toUpperCase()}    
            </button>
        //return [searchWord === '' ? countries : filteredCountries, button]
        return [button]
    }

    const countriesMapped = filteredCountries.length>0
        ?
        filteredCountries
            .map((country, i) => 
                <li style={{listStyle:'none'}} key={i}>
                    <CountryCard country={country}/>
                </li>
        )
        :
        countries
            .map((country, i) => 
                <li style={{listStyle:'none'}} key={i}>
                    <CountryCard country={country}/>
                </li>
        )
       
    return (
        <div className='home-container'>
            <div className='banner-wrapper'>
                <div className='banner-container'>
                    <h1>Countries of The World</h1>
                    {countriesMapped.length === 0 ? 
                            <h2>Loading ...</h2>
                        :
                        countriesMapped.length > 1 ?
                                <h2>Currently there are {countriesMapped.length} countries</h2>
                            :
                                <h2>There is 1 country</h2>
                    }
                    {useInput({ type: "text" })}
                    <div className="buttons">
                        {useButton({name:'name'})}  
                        {useButton({name:'capital'})}  
                    </div>
                </div>
            </div>
            <div className='list-wrapper'>
                {countriesMapped}
            </div>     
        </div>

    )
}

export default Home