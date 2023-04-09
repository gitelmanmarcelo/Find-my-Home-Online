import './App.css';
import Home from './components/Home'
import AptList from './components/AptList'
import AptDetails from './components/AptDetails'
import { useContext, createContext, useState } from 'react'; 
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import LoginOwner from './components/LoginOwner';
import RegisterOwner from './components/RegisterOwner';
import RegisterApt from './components/RegisterApt';
import LoginRegister from './components/LoginRegister';
import Deal from './components/Deal';
import SellerContact from './components/SellerContact';
import RegisterBuyer from './components/RegisterBuyer';

export const AppContext = createContext(null);
function App() {
  const [searchOptions,setSearchOptions] = useState({is_rent:true, minPrice:50, maxPrice:60000, minSize: 0, maxSize: 800});
  const [currentApt,setCurrApt] = useState({});
  const [localData,setLocalData] = useState({city:"",neighborhood:"",street:""});
  const [currSeller,setCurrSeller] = useState(null);


  


  return (
    <AppContext.Provider value={{searchOptions,setSearchOptions,currentApt,setCurrApt,localData,setLocalData,currSeller,setCurrSeller}}>
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/apt-list" element = {<AptList/>}/>
      <Route path="/apt-details" element = {<AptDetails/>}/>
      <Route path="/login-owner" element = {<LoginRegister/>}/>
      <Route path="/register-owner" element = {<RegisterOwner/>}/>
      <Route path="/apt/register" element = {<RegisterApt/>}/>
      <Route path="/deal" element = {<Deal/>}/>
      <Route path="/seller/contact" element = {<SellerContact/>}/>
      <Route path="/buyer/register" element = {<RegisterBuyer/>}/>
    </Routes>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
