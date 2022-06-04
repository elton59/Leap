
import './App.css';
import  Header from './components/Header/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SupportUs from './components/SupportUs';
import Description from './components/Description';
import ProjectDescription from './components/ProjectDescription';
import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MyContextProvider from './context/MyContext';
import ScrollToTop from './components/ScrollToTop';
  
function App() {

 
  return (
    <Router>
      <ScrollToTop>
    <div className="App">
    <MyContextProvider>
      <Header/>
      <Routes>
       <Route path="/" exact element={<Body/>}  />
       <Route path="/AboutUS"  element={<AboutUs/>}/>
       <Route path="/SupportUS"  element={<SupportUs/>}/>
       <Route path="/Description/:id" element={<Description/>} />
       <Route path="/ProjectDescription/:id" element={<ProjectDescription/>} />
       
       </Routes>

       <Footer/>
         </MyContextProvider>
    </div>
    </ScrollToTop>  
    </Router>
   
   
  );

}

export default App;
