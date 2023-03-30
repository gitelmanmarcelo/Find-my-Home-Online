import './App.css';
import Home from './components/Home'
import AptList from './components/AptList'
import AptDetails from './components/AptDetails'
import { useContext, createContext, useState } from 'react'; 
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';

export const AppContext = createContext(null);
function App() {
  const [searchOptions,setSearchOptions] = useState({is_rent:true, minPrice:50, maxPrice:60000, minSize: 0, maxSize: 800});
  const [currentApt,setCurrApt] = useState({});

  return (
    <AppContext.Provider value={{searchOptions,setSearchOptions,currentApt,setCurrApt}}>
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/apt-list" element = {<AptList/>}/>
      <Route path="/apt-details" element = {<AptDetails/>}/>
      <Route path="/owner" element = {<LoginRegister/>}/>
    </Routes>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
