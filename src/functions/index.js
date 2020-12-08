export const percentage = (population, worldPopulation) => {
    const percentage = population*100/worldPopulation
    return parseFloat((percentage).toFixed(2))
    
}

export const format = (population) => {
    return population
        .toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join(" ")
}

export const formatUpdated = (updated_at) => {
    const months = 
        [
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