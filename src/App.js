import { useState, useEffect, useRef } from "react";
import Gallery from "./Components/Gallery"
import Searchbar from "./Components/Searchbar"
import { DataContext } from "./Context/DataContext";
import { SearchContext } from "./Context/SearchContext";

function App() {
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])
  const searchInput = useRef('')

  const API_URL = "https://itunes.apple.com/search?term="
 
  const handleSearch = (e, term) => {
    e.preventDefault()
    //Fetch data
    const fetchData = async () => {
      document.title = `${term} Music`
      const URL = encodeURI(API_URL + term)
      const response = await fetch(URL)
      const data = await response.json()
      if(data.results.length > 0){
        return setData(data.results)
      }else{
        return setMessage('Not Found')
      }
    }

    fetchData()
  }

  return (
    <div >
      <SearchContext.Provider value = {{
        term: searchInput,
        handleSearch: handleSearch
      }}>
       <Searchbar/>
      </SearchContext.Provider>
     
      {message}
      <DataContext.Provider value={data}>
        <Gallery/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
