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

    const createContractor = contractor => {
        return fetch("http://localhost:8000/contractors", {
            method: 'POST',
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`,
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(contractor)
        })
    }

    const getContractorById = id => {
        return fetch(`http://localhost:8000/contractors/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`
            }
        })
        .then(res => res.json())
    }

    return (
        <ContractorContext.Provider value={{contractors, getContractors, createContractor, getContractorById}}>
            {props.children}
        </ContractorContext.Provider>
    )
}