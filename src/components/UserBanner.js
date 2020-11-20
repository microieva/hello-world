import { useState, useEffect } from 'react'
//import Home from './Home'
import '../styles/user-banner.css'

//move to Home
const UserBanner = ({countries}) => {
    const [searchWord, setSearchWord] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) => 
                country.name.toLowerCase().includes(searchWord.toLowerCase())        
            )
            
        );
        console.log('UserBanner countries : ', countries);    
    }, [searchWord, countries]);

    const useInput = ({ type }) => {
        const input = 
            <input 
                className='user-input'
                placeholder="Search countries ..."
                value={searchWord} 
                onChange={e => setSearchWord(e.target.value)} 
                type={type} 
            />;
        console.log('UserBanner filteredCountries: ', filteredCountries);
        //return [searchWord === '' ? countries : filteredCountries, input]
        return [input]
    }
    
    /*const useButton = ({ name }) => {
        const button =
            <button
                id={name}
                onClick={e => setFilteredCountries({countries, searchWord}, e.target.id)}
            >
                {name.toUpperCase()}    
            </button>
        console.log('filteredCountries: ', filteredCountries);
        return [searchWord === '' ? countries : filteredCountries, button]
    }*/
        
    return (
        <div className='banner-container'>
            <h1>Countries of The World</h1>
            {countries.length === 0 ? 
                    <h2>Loading ...</h2>
                :
                countries.length > 1 ?
                        <h2>Currently there are {countries.length} countries</h2>
                    :
                        <h2>There is 1 country</h2>
            }
            {useInput({ type: "text" })}
            <div className="buttons">
                {/* {useButton({name:'name'})}
                {useButton({name:'capital'})} */}

                {/* {useButton({name:'language'})} */}
                {/* <button id="name"
                    onClick={(e)=>useCountries({countries, searchWord}, e.target.id)}>
                        NAME
                </button>
                <button id="capital"
                    onClick={(e)=>useCountries({countries, searchWord}, e.target.id)}>
                        CAPITAL
                </button>
                <button id="langauge"
                    onClick={(e)=>useCountries({countries, searchWord}, e.target.id)}>
                        LANGUAGE
                </button> */}
                {/* <button 
                    className='btn'
                    onClick={onRefresh}>
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                </button> */}
            </div> 
        </div>
    )
}

export default UserBanner