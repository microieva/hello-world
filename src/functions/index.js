export const percentage = (population, worldPopulation) => {
    const percentage = population*100/worldPopulation
    return parseFloat((percentage).toFixed(2))
    
}

export const format = (population) => {
    return population
        .toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join(" ")
}