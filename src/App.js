import './App.css';
import {useEffect, useState} from "react"
import List from './components/List';
import { Images, SearchImages } from './components/ApiFetchData';

function App() {
  const [query, setQuery]= useState()
  const [search, setSearch]= useState()
  // console.log(query)
  const data = Images();
  // console.log(data);
  
  const searchhandler = ()=>{
    setSearch(query)
  }
  const searchData = SearchImages(query);
  console.log(SearchImages(search))
  console.log(searchData)
  return (
    <>
    <div className='App'>
      <h1>
        React Photo Search
      </h1>
      <div>
        <input type ="text" placeholder='Enter the search item' onChange={(e)=>setQuery(e.target.value)}/> 
        <button onClick={searchhandler}>Search</button>
      </div>
      <div className='box'>
      {search ? searchData.map((img, key)=>(
        <List src={img.urls.thumb} key={key}/>
      )): data.map((img, key)=>(
        <List src={img.urls.thumb} key={key}/>
      ))
    }
    </div>
    </div>
    </>
  );
}

export default App;
