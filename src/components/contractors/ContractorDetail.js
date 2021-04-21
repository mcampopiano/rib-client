import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { ContractorContext } from "./ContractorProvider"

export const ContractorDetail = (props) => {
    const {getContractorById} = useContext(ContractorContext);
    const [contractor, setContractor] = useState({})
    const id = parseInt(props.match.params.contractorId)

    useEffect(() => {
        getContractorById(id).then(setContractor).then(() => console.log(contractor))
    }, [])
    debugger
    if (contractor !== null && contractor.clients) {
        return (
            <div className='contractor-details'>
                <h1>{contractor.name}</h1>
                <section className="associated-clients">
                    <h2>Clients</h2>
                    {
                        contractor.clients&&contractor.clients.length === 0
                        ? <h3>You do not have any clients using this contractor</h3>
                        : <ul>
                
                        {
                           contractor.clients.map(client => {
                               if (client.user === localStorage.getItem('ribUserId')) {
                                   return <li key={client.id}><Link to={`/clients/${client.id}`}>{client.name}</Link></li>
                               }
                           })
                        }
                        </ul>
                    }
                    
                </section>
            </div>
        )

    } else if (contractor !== null && !contractor.clients) {
        return (
            <div className='contractor-details'>
                <h1>{contractor.name}</h1>
                <section className="associated-clients">
                    <h2>Clients</h2>
                    <h3>You do not have any clients using this contractor</h3>
                    </section>
                    </div>
        ) 
    } else {
            return <Spinner color="danger" />; 
    }
}