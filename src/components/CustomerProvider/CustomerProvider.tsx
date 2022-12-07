import { createContext, useContext, ReactNode, useState} from 'react'

type custContextType={
    customerFirstName:string,
    customerLastName:string
    customerPass:string,
    customerEmail:string,
    customerDOB:string,
    customerPhone:number,
    setCustomer:(Fname:string, Lname:string, pass:string, email:string, dob:string, phone:number)=>void;
}

const custContextDefaults: custContextType={
    customerFirstName:'',
    customerLastName:'',
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
    const [customerFirstName ,setCustomerFirstName]=useState('');
    const [customerLastName ,setCustomerLastName]=useState('');
    const [customerPass ,setCustomerPass]=useState('');
    const [customerEmail ,setCustomerEmail]=useState('');
    const [customerDOB ,setCustomerDOB]=useState('');
    const [customerPhone ,setCustomerPhone]=useState(0);

    const setCustomer=(fname:string,lName:string, pass:string, email:string, dob:string, phone:number)=>{
        setCustomerFirstName(fname);
        setCustomerLastName(lName);
        setCustomerPass(pass);
        setCustomerDOB(dob);
        setCustomerEmail(email);
        setCustomerPhone(phone);
    }
    const value={
        customerFirstName,
        customerLastName,
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
