import { useState } from 'react'
import '../styles/user-banner.css'

const UserBanner = ({countries}) => {
    
    function useInput({ type }) {
        const [value, setValue] = useState("");
        const input = <input 
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

    function search(){

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
                <button 
                    onClick={search}>
                        NAME
                </button>
                <button 
                    onClick={search}>
                        CAPITAL
                </button>
                <button 
                    onClick={search}>
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