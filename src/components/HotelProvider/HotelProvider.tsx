
import { createContext, useContext, ReactNode, useState} from 'react'

type hotelContextType={
    id:string,
    hotelID:number,
    price:number,
    name:string,
    setHotel:(id:string, hotelID:number, price:number, name:string)=>void;
}

const hotelContextDefaults: hotelContextType={
    id:'',
    hotelID:0,
    price:0,
    name:'',
    setHotel:()=>{}
}


const HotelContext=createContext<hotelContextType>(hotelContextDefaults);

export function useHotel(){
    return useContext(HotelContext);
}

type Props ={
    children:ReactNode;
}
export function HotelProvider({children}:Props){
    const [id ,setID]=useState('');
    const [hotelID ,sethotID]=useState(0);
    const [price ,setPrice]=useState(0);
    const [name ,setName]=useState('');


    const setHotel=(idnum:string, hotid:number, priceSet:number, nameSet:string)=>{
        setID(idnum);
        sethotID(hotid);
        setPrice(priceSet);
        setName(nameSet);
    }
    const value={
        id,
        hotelID,
        price,
        name,
        setHotel
    };
    return(
    <HotelContext.Provider value={value}>
        {children}
    </HotelContext.Provider>
    )
    
}
