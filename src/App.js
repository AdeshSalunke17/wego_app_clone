import NavBar from './components/navbar/NavBar';
import '../src/App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ImageDiv from './components/imagediv/ImageDiv';
import FormDiv from './components/formdiv/FormDiv';
import {useTranslation} from 'react-i18next'
import CardDiv from './components/cardsdiv/CardDiv';
import { CardsDiv2 } from './components/cardsdiv2/CardsDiv2';

function App() {
  const [displayFullNav,setDisaplyFullNav]=useState(false)
  const handle=()=>{
    if(document.documentElement.scrollTop>50)
      setDisaplyFullNav(true)
    else
      setDisaplyFullNav(false)
  }
  useEffect(()=>{
    window.addEventListener("scroll",handle)  
  },[])
  const {i18n}=useTranslation()
  useEffect(()=>{
    document.body.dir=i18n.dir()
  },[i18n.language,i18n])
 
  return (
    <div className="App">
      <NavBar showFull={displayFullNav}/>
      <ImageDiv/>
      <FormDiv/>
      {/* <CardDiv/> */}
      <CardsDiv2/>
    </div>
  );
}

export default App;
