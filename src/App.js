import CarouselContainer from "./components/CarouselContainer";
import CarouselProducts from "./components/List";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "./components/Menu";
import CardExample from "./components/Card";
import ListFighters from "./components/ListFighters"

function App() {
  const a=['RB005_-_Dassault_Rafale_-_Indian_Air_Force_-_50976863128.jpg','SU-30MKI-g4sp_-_edit_2(clipped).jpg','Lockheed_C-130J-30.jpg','Russian_Air_Force_Mil_Mi-17_yellow_62.jpg','IA_Dhruv_Berlin-08.jpg','DRDO_AEW&C_Embraer_ERJ_145.jpg'];
  return (
    <div>
      <Menu/>
      {/* <CarouselContainer/> */}
      {/* <CardExample /> */}
      <ListFighters/>
    </div>
     
  
  );
}

export default App;
