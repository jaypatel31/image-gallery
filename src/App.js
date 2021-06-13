import './App.css';
import React, {useState, useEffect} from "react";
import ImageCard from "./components/ImageCard"
import ImageSearch from "./components/ImageSearch"
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyles, darkTheme, lightTheme} from "./components/GlobalStyle";
import ToggleButton from "./components/ToggleButton"
import ImageModal from "./components/ImageModal";




function App() {

  const [modleMap, setModleMap] = useState([])
  const [theme, toggleTheme] = useState('dark');
  const themeMode = theme=="light" ? lightTheme :darkTheme;

  const clickHandler = () =>{
    (theme=="light") ? toggleTheme('dark') : toggleTheme('light');
  }

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState("");
  
  useEffect(() => {
    let tmparr = [];
    images.map((item) => {
      tmparr[item.id] = false
    })
    setModleMap(tmparr)
  }, [images])

  useEffect(() => {
    let trm =""
    let arr = JSON.parse(localStorage.getItem('terms'));
    if(arr.length>1){
      trm = arr[arr.length-1];
    }
    else{
      trm="";
      localStorage.setItem("terms",JSON.stringify([]));
    }
    console.log(trm);
    setTerm(trm);
  }, [])

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        let arr = JSON.parse(localStorage.getItem('terms'));
        if(arr.join(" ").indexOf(term)===-1 && data.total > 0){
          arr.push(...term.split(" "));
          localStorage.setItem("terms",JSON.stringify(arr));
        }
        setLoading(false);
      })
      .catch(err => console.log(err))
  }, [term])

  function openModal(id) {
    let tmparr = [];
    images.map((item) => {
      if(id===item.id){
        tmparr[item.id] = true
      }
      else{
        tmparr[item.id] = false
      }
      
    })
    setModleMap(tmparr)
  }

  function closeModal(id){
    let tmparr = [];
    images.map((item) => {
      if(id===item.id){
        tmparr[item.id] = false
      }
      else{
        tmparr[item.id] = false
      }
      
    })
    setModleMap(tmparr)
  }

  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <ToggleButton theme={theme} method={clickHandler}/>
    
    <h1 className="font-bold text-5xl m-auto w-full text-center mt-20 mb-10 md:my-10 text-green-500" style={{fontFamily:"Bangers", letterSpacing:"6px", textShadow:"0 2px 5px"}}>Image Gallery</h1>
    <div className="container mx-auto w-3/4 md:w-full">
      <ImageSearch serchText={(text) => setTerm(text)}/>
      { !loading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      { (loading) ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {
                images.map((item,index) => {
                  let id = item.id;
                  return (
                    <>
                      <ImageCard key={id} clickHandler={openModal}  image={item} theme={theme}/>
                      <ImageModal key={index} opener={modleMap[id]} item={item} closer={closeModal} theme={theme}/>
                      </>
                  )
                })
              }
            </div>}
    </div>
    </ThemeProvider>
  );
}

export default App;
