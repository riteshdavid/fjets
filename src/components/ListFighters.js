import CardExample from "./Card";
import pic5 from "../pics/pic-5.jpg"; 
import pic6 from "../pics/pic-6.jpg";
import pic7 from "../pics/pic-7.jpg";
import pic8 from "../pics/pic-8.jpg";
import pic9 from "../pics/pic-9.jpg"
import pic10 from "../pics/pic-10.jpeg"



const Cards=()=>{
    const data=[
        {
         "name":"DASSAULT RAFALE",
         "desc":"A Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation. Equipped with a wide range of weapons, the Rafale is intended to perform air supremacy, interdiction, aerial reconnaissance, ground support, in-depth strike, anti-ship strike and nuclear deterrence missions. The Rafale is referred to as an omnirole aircraft by Dassault.Many of the aircraft's avionics and features, such as direct voice input, the RBE2 AA active electronically scanned array (AESA) radar and the optronique secteur frontal infra-red search and track (IRST) sensor, were domestically developed and produced for the Rafale programme. Originally scheduled to enter service in 1996, the Rafale suffered significant delays due to post-Cold War budget cuts and changes in priorities. The aircraft is available in three main variants, Rafale C single-seat land-based version, Rafale B twin-seat land-based version, and Rafale M single-seat carrier-based version.",
         "img":pic5
        },
        {
            "name":"Su-30MKI",
            "desc":"The Su-30 started as an internal development project in the Sukhoi Su-27 family by Sukhoi. The design plan was revamped and the name was made official by the Russian Defense Ministry in 1996. Of the Flanker family, the Su-27, Su-30, Su-33, Su-34 and Su-35 have been ordered into limited or serial production by the Russian Defense Ministry. The Su-30 has two distinct version branches, manufactured by competing organisations: KnAAPO and the Irkut Corporation, both of which come under the Sukhoi aerospace group's umbrella.",
            "img":pic6
        },
        {
            "name":"Lockheed Martin C-130J Super Hercules",
            "desc":"It is a four-engine turboprop military transport aircraft. The C-130J is a comprehensive update of the Lockheed C-130 Hercules, with new engines, flight deck, and other systems.The C-130J is the newest version of the C-130 Hercules and the only model in production. As of March 2022, 500 C-130J aircraft were delivered to 26 operators in 22 countries.",
            "img":pic7
        },
        {
        "name":"Mil Mi-17",
        "desc":"It is a Soviet-designed Russian military helicopter family introduced in 1975 (Mi-8M), continuing in production as of 2021 at two factories.It is known as the Mi-8M series in Russian service. The helicopter is mostly used as a medium twin-turbine transport helicopter, as well as an armed gunship version.",
        "img":pic8
        },
        {
            "name":"HAL Dhruv",
            "desc":"The HAL Dhruv is a utility helicopter designed and developed by Hindustan Aeronautics Limited (HAL). The development of HAL Dhruv was announced in November 1984. The helicopter first flew in 1992; however, its development was prolonged due to multiple factors including the Indian Army's requirement for design changes, budget restrictions, and sanctions placed on India following the 1998 Pokhran-II nuclear tests. The name comes from a Sanskrit origin word dhruv which means unshakeable or firm.",
            "img":pic9
        },
        {
            "name":"Embraer R-99",
            "desc":"It is an aircraft based on the ERJ 145 civil regional jet.The R-99 series are equipped with Rolls-Royce AE1 3007 turbofan engines. The military versions provide 20% more thrust than the civil version.",
            "img":pic10
        }
        
        ];

        
        
        return data.map((card)=>{
            return <CardExample name={card.name} desc={card.desc} img={card.img}/>
        });

}

export default Cards;