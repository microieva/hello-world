import { useState, useEffect } from 'react'
import '../styles/user-banner.css'

const UserBanner = ({ countries }) => {
    const [searchWord, setSearchWord] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(()=>{
        setFilteredCountries((id)=>{
            countries
            .filter(country => {
                const { name, capital } = country
                const isName = name
                    .toLowerCase()
                    .startsWith(searchWord.toLowerCase())
                const isCapital = capital
                    .toLowerCase()
                    .startsWith(searchWord.toLowerCase())   
                    switch (id) {
                        case 'name':
                            return isName;
                        case 'capital':
                            return isCapital;
                        //case 'language':
                            //return isLanguages;
                        default:
                            return isName;
                        } 
                }
            )
        })
    }, [searchWord, countries])

    const useInput = ({ type }) => {
        //const [value, setValue] = useState("");
        const input = 
            <input 
                className='user-input'
                placeholder="Search countries ..."
                value={searchWord} 
                onChange={e => setSearchWord(e.target.value)} 
                type={type} 
            />;
        console.log('value from useInput ', searchWord);
        return [searchWord, input];    
    }
    //const [search, userInput] = useInput({ type: "text" });
    
    const useButton = ({ name }) => {
        //const [filteredCountries, setFilteredCountries] = useState([])
        const button =
            <button
                id={name}
                onClick={e => setFilteredCountries({countries, searchWord}, e.target.id)}
            >
                {name.toUpperCase()}    
            </button>
        console.log('filteredCountries: ', filteredCountries);
        return [filteredCountries, button]
    }
   
    //setResult(searchWord === '' ? countries : filteredCountries)
        
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
                {useButton({name:'name'})}
                {useButton({name:'capital'})}
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