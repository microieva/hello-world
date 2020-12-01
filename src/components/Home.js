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
                            .toLowerCase().includes(searchWord.toLowerCase())
                    case 'language':
                        return country.languages
                            .map(lang => lang.name)
                            .join(", ")
                            .toLowerCase().includes(searchWord.toLowerCase());  
                    default:
                        return country.name
                            .toLowerCase().includes(searchWord.toLowerCase())
                }
            })
        )
    },[searchWord, countries, category]);

    const useInput = ({ type }) => {
        const input = 
            <input 
                className='user-input'
                placeholder="Search countries ..."
                value={searchWord} 
                onChange={e => setSearchWord(e.target.value)} 
                type={type} 
            />
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

    function findUpdatedPopulations(otherArray){
        return function(current){
          return otherArray.filter(function(other){
            return other.population === current.population && (other.alpha2Code === current.code||other.name === current.name)
          }).length === 0;
        }
      }
    function findMatchingPopulations(otherArray){
        return function(current){
          return otherArray.filter(function(other){
            return other.population !== current.population && (other.alpha2Code === current.code||other.name === current.name)
          }).length === 0;
        }
    }
    
    const matchingPopulations = coronaStats.filter(findMatchingPopulations(countries));
    const updatedPopulations = coronaStats.filter(findUpdatedPopulations(countries));
      
    const result = matchingPopulations.concat(updatedPopulations);
    console.log('matching populations: ', matchingPopulations); 

    console.log('updated populations: ', updatedPopulations);
    console.log('RESULT: ',result);

    const countriesMapped = filteredCountries.length>0 && coronaStats.length>0
        ?
        filteredCountries
            .map((country, i) => {
                return (
                    <li style={{listStyle:'none'}} key={i}>
                        <CountryCard 
                            country={country} population={1}/>
                    </li>
                )
            })
        :
        countries
            .map((country, i) => {
                return (
                    <li style={{listStyle:'none'}} key={i}>
                        <CountryCard 
                            country={country} population={1}/>
                    </li>
                )
            })
    
    let worldPopulation = countries.length>0 && 
        countries.map((country) => country.population)
        .reduce((acc, curr) => acc + curr)
      
    return (
        <div className='home-container'>
            <div className='banner-wrapper'>
                <div className='banner-container'>
                    <h1>Countries of The World</h1>
                    {countriesMapped.length > 1 ?
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
                {filteredCountries.length === countries.length ?
                    <CoronaStats 
                        countries={countries} coronaStats={coronaStats}/>
                :
                    <CoronaStats 
                        countries={filteredCountries} coronaStats={coronaStats}/>
                }
                
            </div>  
        </div>

    )
}

export default Home