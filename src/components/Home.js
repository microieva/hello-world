import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import Stats from './Stats'
import CoronaStats from './CoronaStats'
import '../styles/user-banner.css'
import '../styles/home.css'

const Home = ({ countries, coronaStats }) => {
    const [searchWord, setSearchWord] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
    const [category, setCategory] = useState("name")

    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) => {
                switch(category) {
                    case 'capital':
                        return country.capital
                            .toLowerCase().startsWith(searchWord.toLowerCase())
                    case 'language':
                        return country.languages
                            .map(lang => lang.name)
                            .join(", ")
                            .toLowerCase().startsWith(searchWord.toLowerCase());  
                    default:
                        return country.name
                            .toLowerCase().startsWith(searchWord.toLowerCase())
                }
            })
        )
        console.log('countries : ', countries); 
    },[searchWord, countries, category]);

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
                onClick={e=> handleClick(e.target.id)}
            >
                {name.toUpperCase()}    
            </button>
        return [button]
    }

    const handleClick = (id) => {
        setCategory(id)
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
    
    let worldPopulation = countries.length>0 ? 
        countries.map((country) => country.population)
        .reduce((acc, curr) => acc + curr)
        : false
        console.log('world population: ', worldPopulation);
       
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
                        {useButton({name:'language'})} 
                    </div>
                </div>
            </div>
            <div className='list-wrapper'>
                {countriesMapped}
            </div>  
            <div className='stats-wrapper'>
                {filteredCountries.length === countries.length ?
                    <Stats 
                        countries={countries} worldPopulation={worldPopulation}/>
                :
                    <Stats 
                        countries={filteredCountries} worldPopulation={worldPopulation}/>
                }
            </div> 
            <div className='corona-stats-wrapper'>
                <CoronaStats coronaStats={coronaStats}/>
            </div>  
        </div>

    )
}

export default Home