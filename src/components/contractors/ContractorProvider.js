import React, { useState } from "react"

export const ContractorContext = React.createContext()

export const ContractorProvider = props => {
    const [contractors, setContractors] = useState([])

    const getContractors = () => {
        return fetch("http://localhost:8000/contractors", {
            headers: {

                "Authorization": `Token ${localStorage.getItem('ribUserId')}`
            }
        })
        .then(res => res.json())
        .then(setContractors)
    }

    return (
        <ContractorContext.Provider value={{contractors, getContractors}}>
            {props.children}
        </ContractorContext.Provider>
    )
}