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
        .then(res => res.json())
        .then(setClients)
    }

    const createClient = client => {
        return fetch("http://localhost:8000/clients", {
            method: 'POST',
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`,
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(client)
        })
    }

    const getClientById = id => {
        return fetch(`http://localhost:8000/clients/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`
            }
        })
        .then(res => res.json())
    }

    return (
        <ClientContext.Provider value={{getClients, clients, createClient, getClientById}}>
            {props.children}
        </ClientContext.Provider>
    )
}