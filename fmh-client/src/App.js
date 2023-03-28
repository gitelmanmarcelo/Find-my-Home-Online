import './App.css';
import Home from './components/Home'
import AptList from './components/AptList'
import { useContext, createContext, useState } from 'react'; 
import { Route, Routes, Link } from 'react-router-dom';

export const AppContext = createContext(null);
function App() {
  const [searchOptions,setSearchOptions] = useState({});

  return (
    <AppContext.Provider value={{searchOptions,setSearchOptions}}>
    <div className="App">
      <Link to = "/">Home</Link>
      <Link to = "/apt-list">Apt List</Link>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/apt-list" element = {<AptList/>}/>
    </Routes>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
