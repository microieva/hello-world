import '../styles/corona-stats.css'

const CoronaStats = ({ countries, coronaStats }) => {
    console.log('stats, ', coronaStats);
    console.log('stats data type: ', typeof coronaStats);

    const deathTotal = coronaStats.length>0 && coronaStats
        .map(country => country.latest_data.deaths)
        .reduce((acc, curr) => acc + curr)

    const deathToday = coronaStats.length>0 && coronaStats
        .map(country => country.today.deaths)
        .reduce((acc, curr) => acc + curr)
    
    const formatUpdated = (updated_at) => {
        const months = [
            {name: 'Jan', nr: '01'},
            {name: 'Feb', nr: '02'},
            {name: 'Mar', nr: '03'},
            {name: 'Apr', nr: '04'},
            {name: 'May', nr: '05'},
            {name: 'Jun', nr: '06'},
            {name: 'Jul', nr: '07'},
            {name: 'Aug', nr: '08'},
            {name: 'Sep', nr: '09'},
            {name: 'Oct', nr: '10'},
            {name: 'Nov', nr: '11'},
            {name: 'Dec', nr: '12'},
        ]
        const day = updated_at.slice(8, 10)
        const year = updated_at.slice(0, 4) 
        for (const month of months) {
            if (month.nr === updated_at.slice(5, 7)) {
                return `${month.name} ${day}, ${year}`
            }
        }
    }
    
    return (
        <div className='corona-stats-container'>
            <h2>Corona Statistics</h2>
            {countries && countries.length === 250 ? 
                <div>
                    <p>Total number of deaths: {deathTotal}</p>
                    <p>Deaths today: {deathToday}</p>
                    <p>Data updated: {formatUpdated(coronaStats[0].updated_at)}</p>
                </div>
            :
                <div>
                    <p>Countries Found: {countries.length}</p>
                </div>
            }
        </div>
    )
}

export default CoronaStats