// const useCountries = ({countries, searchWord}, id) => {
//     const [result, setResult] = useState([])
//     const filteredCountries = countries
//         .filter(country => {
//             const { name, capital, languages } = country
//             const isName = name
//                 .toLowerCase()
//                 .startsWith(searchWord.toLowerCase())
//             const isCapital = capital
//                 .toLowerCase()
//                 .startsWith(searchWord.toLowerCase())
//             const isLanguages = languages
//                 // .map(lang => lang
//                 //     .join()
//                 //     .toLowerCase()
//                 //     .startsWith(searchWord.toLowerCase())
//                 // )
                
//                 .join()
//                 .toLowerCase()
//                 .startsWith(searchWord.toLowerCase())
//         switch (id) {
//             case 'name':
//                 return isName;
//             case 'capital':
//                 return isCapital;
//             case 'language':
//                 return isLanguages;
//             default:
//                 return isName;
//         }
//     })
//     setResult(searchWord === '' ? countries : filteredCountries)
//     console.log('filteredCountries: ', result);
//     return [result]
// }