import React, { useState } from "react"

export const ClientContext = React.createContext()

export const ClientProvider = props => {
    const [clients, setClients] = useState([])

    const getClients = () => {
        return fetch("http://localhost:8000/clients", {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`
            }
        })
        .then(setClients)
    }

    return (
        <ClientContext.Provider value={{getClients, clients}}>
            {props.children}
        </ClientContext.Provider>
    )
}