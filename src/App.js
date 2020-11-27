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
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
   
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [coronaStats, setCoronaStats] = useState([])
    
    useEffect(() => {
        const url = 'https://corona-api.com/countries'
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setCoronaStats(data.data)
          })
         
    }, [])
  
    if (loading) {
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
                                    countries={countries}
                                    loading={loading}
                                  />
                  }
              /> 
              <Route exact path='/' 
                  component={() => <Home 
                                      countries={countries} 
                                      coronaStats={coronaStats}
                                      loading={loading}
                                    />
                  } 
              />
          </Switch>
      </Router>
  )
}

export default App;