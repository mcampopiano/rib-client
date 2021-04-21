import React from "react"

export const RoomContext = React.createContext()

export const RoomProvider = props => {
    const addRoom = room => {
        return fetch('http://localhost:8000/rooms', {
            method: 'POST',
            headers: {
                "Authorization": `Token ${localStorage.getItem('ribUserId')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(room)
        })
    }

    return (
        <RoomContext.Provider value={{addRoom}}>
            {props.children}
        </RoomContext.Provider>
    )
}