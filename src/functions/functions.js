const functions = [
    function searchByName(){
        const {countries, searchWord} = this.state;
        const filteredCountries = countries.filter((country => 
          country.name.toUpperCase().startsWith(searchWord.toUpperCase())
        ));
        console.log("searchByName:", searchWord, filteredCountries)
        this.setState({
            countries: filteredCountries
        })
    },

    function searchByCaptila(){

    },

    function searchByLanguage() {

    },
    function handleChange() {

    }
]
export default functions