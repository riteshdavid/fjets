import CardExample from "./Card";
import pic5 from "../pics/pic-5.jpg"; 
import pic6 from "../pics/pic-6.jpg";
import pic7 from "../pics/pic-7.jpg";
import pic8 from "../pics/pic-8.jpg";
import pic9 from "../pics/pic-9.jpg"
import pic10 from "../pics/pic-10.jpeg"
import {data} from "../utils/data"



const Cards=()=>{
    
        
        
        return data.map((card)=>{
            return <CardExample id={card.sno} name={card.name} key={card.name} desc={card.desc} img={card.img}/>
        });

}

export default Cards;