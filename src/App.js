import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery"
import Searchbar from "./Components/Searchbar"

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  const API_URL = "https://itunes.apple.com/search?term="
  useEffect(() => {
    if(search) {
      const fetchData = async () => {
        const URL = encodeURI(API_URL + search)
        // console.log(URL)
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        if(data.results.length > 0){
          setData(data.results)
        }else{
          setMessage('Not Found')
        }
      }

      fetchData()
    }
  },[search])

const handleSearch = (e, term) => {
  e.preventDefault()
  setSearch(term)
}

  return (
    <div >
      <Searchbar handleSearch= {handleSearch} />
      {message}
      <Gallery data = {data}/>
    </div>
  );
}

export default App;
