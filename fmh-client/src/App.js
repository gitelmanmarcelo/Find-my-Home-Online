import './App.css';
import Home from './components/Home'
import AptList from './components/AptList'
import AptDetails from './components/AptDetails'
import { createContext, useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RegisterOwner from './components/RegisterOwner';
import RegisterApt from './components/RegisterApt';
import LoginRegister from './components/LoginRegister';
import Deal from './components/Deal';
import SellerContact from './components/SellerContact';
import RegisterBuyer from './components/RegisterBuyer';
import RegisterBuyerSuccess from './components/RegisterBuyerSuccess';
import About from './components/about';
import Contact from './components/Contact.js';
import FavsList from './components/FavsList';
import RegisterSmallDevices from './components/RegisterSmallDevices';
export const AppContext = createContext(null);

function App() {
  const [searchOptions,setSearchOptions] = useState({is_rent:true, minPrice:50, maxPrice:60000, minSize: 0, maxSize: 800});
  const [currentApt,setCurrApt] = useState({});
  const [currentScreen,setCurrScreen] = useState("");
  const [localData,setLocalData] = useState({city:"",neighborhood:"",street:""});
  const [currSeller,setCurrSeller] = useState(null);
  const [refreshFavs,setRefreshFavs] = useState(false);

  return (
    <AppContext.Provider value={{currentScreen,setCurrScreen,refreshFavs,setRefreshFavs,searchOptions,setSearchOptions,currentApt,setCurrApt,localData,setLocalData,currSeller,setCurrSeller}}>
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
      <Route path="/buyer/register/success" element = {<RegisterBuyerSuccess/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/favorites" element = {<FavsList/>}/>
      <Route path="/RegisterSmallDevices" element = {<RegisterSmallDevices/>}/>
    </Routes>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
