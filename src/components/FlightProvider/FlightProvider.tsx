
import { createContext, useContext, ReactNode, useState} from 'react'

type flightType={
    id:string,
    flightID:number,
    price:number,
    orig:string,
    dest:string,
    depart:string,
    setFlight:(id:string, flightID:number, price:number, orig:string, dest:string, depart:string)=>void;
}


const flightContextDefaults: flightType={
    id:'',
    flightID:0,
    price:0,
    orig:'',
    dest:'',
    depart:'',
    setFlight:()=>{}
}


const FlightContext=createContext<flightType>(flightContextDefaults)

export function useFlight(){
    return useContext(FlightContext);
}

type Props ={
    children:ReactNode;
}
export function FlightProvider({children}:Props){
    const [id ,setID]=useState('63657a846c4cffd2cafad750');
    const [flightID ,setFlightID]=useState(7015);
    const [price ,setPrice]=useState(990);
    const [orig ,setOrig]=useState('Dallas-Fort-Worth');
    const [dest, setDest]=useState('San-Diego');
    const [depart, setDepart]=useState('2022-12-15 05:03');

    const setFlight=(idnum:string, flightid:number, priceSet:number, origSet:string, destination:string, departure:string)=>{
        setID(idnum);
        setFlightID(flightid);
        setPrice(priceSet);
        setOrig(origSet);
        setDest(destination);
        setDepart(departure);
    }
    const value={
        id,
        flightID,
        price,
        orig,
        dest,
        depart,
        setFlight
    };
    return(
    <FlightContext.Provider value={value}>
        {children}
    </FlightContext.Provider>
    )
    
}
