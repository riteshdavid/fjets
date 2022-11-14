// import CarouselContainer from "./components/CarouselContainer";
// import CarouselProducts from "./components/List";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "./components/Menu";
import CardExample from "./components/Card";
import Cards from "./components/ListFighters"
import Detail from "./components/Detail";
import { Routes, Route, useParams, BrowserRouter } from 'react-router-dom';
import About from './components/About';



    // let { id } = useParams();
  // ...


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/about" element={<About/>} />
      
        
      
    </Routes>
    </BrowserRouter>
  );
}
     
  
 

export default App;



