import { useState } from 'react'
import '../styles/user-banner.css'

const UserBanner = ({ countries }) => {
    
    const useInput = ({ type }) => {
        const [value, setValue] = useState("");
        const input = 
            <input 
                className='user-input'
                placeholder="Search countries ..."
                value={value} 
                onChange={e => setValue(e.target.value)} 
                type={type} 
            />;
        console.log('value from useInput ', value);
        return [value, input];    
    }

    const [searchWord, userInput] = useInput({ type: "text" });

    const filterCountries = ({countries, searchWord}, id) => {
        const filteredCountries = countries
            .filter(country => {
                const { name, capital, languages } = country
                const isName = name
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
                const isCapital = capital
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
                const isLanguages = languages
                    .join()
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
            switch (id) {
                case 'name':
                    return isName;
                case 'capital':
                    return isCapital;
                case 'language':
                    return isLanguages;
                default:
                    return isName;
            }
        })
        const result = searchWord === '' ? countries : filteredCountries;
        console.log('filteredCountries: ', result);
        return result;
    }
    
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
            {userInput}
            <div className="buttons">
                <button id="name"
                    onClick={(e)=>filterCountries({countries, searchWord}, e.target.id)}>
                        NAME
                </button>
                <button id="capital"
                    onClick={(e)=>filterCountries({countries, searchWord}, e.target.id)}>
                        CAPITAL
                </button>
                <button id='langauge'
                    onClick={(e)=>filterCountries({countries, searchWord}, e.target.id)}>
                        LANGUAGE
                </button>
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