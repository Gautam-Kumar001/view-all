import React , {useState, createContext, useEffect} from 'react'

export const DataContext = createContext ();


export function DataProvider (props) {

    const [response, setRespone] = useState(null)
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null);

    const handleResonse = (val) =>{
        setRespone(val)
    }

    const handleLoading = (val) =>{
        setLoading(val)
    }

    const handleFile = (val) =>{
        setFile(val)
        console.log(val)
    }

    return(
        <DataContext.Provider value={{response, handleResonse, loading, handleLoading, file, handleFile}}>
            {props.children}
        </DataContext.Provider>
    )
}