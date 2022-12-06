import { createContext, useContext, ReactNode, useState} from 'react'

type custContextType={
    customerName:string,
    customerPass:string,
    customerEmail:string,
    customerDOB:string,
    customerPhone:number,
    setCustomer:(name:string, pass:string, email:string, dob:string, phone:number)=>void;
}

const custContextDefaults: custContextType={
    customerName:'',
    customerPass:'',
    customerEmail:'',
    customerDOB:'',
    customerPhone:0,
    setCustomer:()=>{}
}

const CustomerContext=createContext<custContextType>(custContextDefaults)

export function useCustomer(){
    return useContext(CustomerContext);
}

type Props ={
    children:ReactNode;
}
export function CustomerProvider({children}:Props){
    const [customerName ,setCustomerName]=useState('');
    const [customerPass ,setCustomerPass]=useState('');
    const [customerEmail ,setCustomerEmail]=useState('');
    const [customerDOB ,setCustomerDOB]=useState('');
    const [customerPhone ,setCustomerPhone]=useState(0);

    const setCustomer=(name:string, pass:string, email:string, dob:string, phone:number)=>{
        setCustomerName(name);
        setCustomerPass(pass);
        setCustomerDOB(dob);
        setCustomerEmail(email);
        setCustomerPhone(phone);
    }
    const value={
        customerName,
        customerPass,
        customerEmail,
        customerPhone,
        customerDOB,
        setCustomer
    };
    return(
    <CustomerContext.Provider value={value}>
        {children}
    </CustomerContext.Provider>
    )
}
