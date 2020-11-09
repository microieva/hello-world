import { 
  useState, 
  useEffect 
} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import Home from './components/Home';
import CountryPage from './components/CountryPage'
import './App.css'


const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all'
      fetch(url)
          .then(response => response.json())
          .then(data => {
          setCountries(data)
    })
  }, [])

  return (   
      <Router>
          <div className='App'>
          </div>
          <Switch>
              <Route exact path='/country/:name' 
                  component={()=><CountryPage countries={countries}/>}
              /> 
              <Route exact path='/' 
                  component={() => <Home countries={countries}/>} 
              />
          </Switch>
      </Router>
  )
}

export default App;