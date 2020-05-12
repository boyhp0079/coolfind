import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Components/Home.component'
import SearchBar from './Components/SearchBar.component'

const SPLASH_KEY ="zyAr4LexQhZ2ffD86mHpLZSchef2PIc0b-8aGiKADqg";

function App() {
  const [images, setImages] = useState([]);

  async function fetchdata(searchString){
    await fetch(`https://api.unsplash.com/search/photos?query=${searchString}&client_id=${SPLASH_KEY}`)
    .then(res=>res.json())
    .then(data=>{
      if(data)
      setImages(data.results.map(item=>item.urls.small))})
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    fetchdata("landscape")
  },[])

  return (
    <div className="App">
      <SearchBar searchHandler={fetchdata}/>
      <Home images = {images}/>
    </div>
  );
}

export default App;
