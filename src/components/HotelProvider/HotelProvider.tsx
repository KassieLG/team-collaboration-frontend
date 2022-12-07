
import { createContext, useContext, ReactNode, useState} from 'react'

type hotelContextType={
    id:string,
    hotelID:string,
    price:number,
    name:string,
    setHotel:(id:string, hotelID:string, price:string, name:string)=>void;
}

const hotelContextDefaults: hotelContextType={
    id:'',
    hotelID:'',
    price:0,
    name:'',
    setHotel:()=>{}
}


const HotelContext=createContext<hotelContextType>(hotelContextDefaults)

export function useCustomer(){
    return useContext(HotelContext);
}

type Props ={
    children:ReactNode;
}
export function HotelProvider({children}:Props){
    const [id ,setID]=useState('');
    const [hotelID ,sethotID]=useState('');
    const [price ,setPrice]=useState(0);
    const [name ,setName]=useState('');


    const setHotel=(idnum:string, hotid:string, priceSet:string, nameSet:string)=>{
        setID(idnum);
        sethotID(hotid);
        const newPrice=Number(priceSet)
        setPrice(newPrice);
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
