import { 
    useState, 
    useEffect 
  } from 'react';
  import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
  } from 'react-router-dom';
  import axios from "axios";
  import Home from './components/Home';
  import CountryPage from './components/CountryPage'
  import './App.css'
  
  const App = () => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState(
        {
            countriesApiData: [], 
            coronaApiData: [], 
            data: []
        }
    )  
    
    useEffect(() => {
        const fetchData = async () => {
            const countriesApi = await axios(
                `https://restcountries.eu/rest/v2/all`
              );
            const coronaApi = await axios(
                `https://corona-api.com/countries`
              );
            const combined = []
            for (const country of countriesApi.data) {
                const countryInCoronaApi = coronaApi.data.data
                    .find(c=> c.code === country.alpha2Code) 
                if (!countryInCoronaApi) {
                    combined.push(country)
                } else {
                    Object.assign(country, countryInCoronaApi)
                    combined.push(country)
                }   
            }
            setCountries(
                { 
                    countriesApiData: countriesApi.data, 
                    coronaApiData: coronaApi.data.data, 
                    data: combined
                }
            );
            setLoading(false)    
        };    
        fetchData();
        
    }, []);

    if (loading || countries.data.length === 1) {
        return  <h1 style={{
                    textAlign:'center',
                    background: '#EFECEF',
                    width: '85%',
                    margin: '0 8%',
                    padding: '2rem 0 50rem 0'
                }}>
                  Loading countries ..
                </h1>
    }
      
      return (  
        <Router>
            <div className='App'>
            </div>
            <Switch>
                <Route exact path='/country/:name' 
                    component={()=> <CountryPage 
                                        countries={countries.data}
                                    />
                    }
                /> 
                <Route exact path='/' 
                    component={() => <Home 
                                        countries={countries.data} 
                                    />
                    } 
                />
            </Switch>
        </Router>
    )
  }
  
  export default App;