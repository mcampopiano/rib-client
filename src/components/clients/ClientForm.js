import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ContractorContext } from "../contractors/ContractorProvider";
import { ClientContext } from "./ClientProvider";

export const ClientForm = (props) => {
  const { createClient } = useContext(ClientContext);
  const { getContractors, contractors } = useContext(ContractorContext);
  const [client, setClient] = useState({
    name: "",
    claimNumber: "",
    contractor: "",
  });
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newClient = Object.assign({}, client);
    newClient[event.target.name] = event.target.value;
    setClient(newClient);
  };

  const constructClient = () => {
    createClient(client)
    .then(res => res.json())
    .then(res => history.push(`/clients/${res.id}`))
  };

  useEffect(() => {
    getContractors();
  }, []);

  return (
    <Form>
      <FormGroup>
        <Label for="name">Client full name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="John/Jane Doh"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="claimNumber">Claim number</Label>
        <Input
          type="text"
          name="claimNumber"
          id="claimNumber"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="contractor">Contractor</Label>
        <Input
          type="select"
          name="contractor"
          id="contractor"
          onChange={handleControlledInputChange}
        >
          <option>Select the contractor</option>
          {contractors.map((contractor) => (
            <option>{contractor.name}</option>
          ))}
        </Input>
      </FormGroup>
      <Button
        onClick={() => {
          constructClient();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
