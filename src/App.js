import './App.css';
import Body from './components/Body';
import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MyContextProvider from './context/MyContext';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Rates from './components/Rates';
import Properties from './components/Properties';
import ListProperty from './components/ListProperty';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {

 
  return (
    <Router>
      <ScrollToTop>
    <div className="App">
    <MyContextProvider>
      <Navigation/>
      <Routes>
       <Route path="/" exact element={<Body/>}  />
       <Route path="/Services" exact element={<Services/>}  />
       <Route path="/Rates" exact element={<Rates/>}  />
       <Route path="/Properties" exact element={<Properties/>}  />
       <Route path="/ListProperty" exact element={<ListProperty/>}  />
       </Routes>
<Footer/>

      
         </MyContextProvider>
    </div>
    </ScrollToTop>  
    </Router>
   
   
  );

}

export default App;
