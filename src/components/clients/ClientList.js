import React, { useContext, useEffect } from "react"
import { ClientContext } from "./ClientProvider"

export const ClientList = () => {
    const {clients, getClients} = useContext(ClientContext)

    useEffect(() => {
        getClients()
    }, [])

    return (
        <ul>
            {
                clients.map(client => (
                    <li key={client.id}>{client.name}</li>
                ))
            }
        </ul>
    )
}