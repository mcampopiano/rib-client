import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ContractorContext } from '../contractors/ContractorProvider';
import { ClientContext } from './ClientProvider';

export const ClientForm = (props) => {
    const {createClient} = useContext(ClientContext)
    const {getContractors, contractors} = useContext(ContractorContext)
    const [client, setClient] = useState({"name": "", "claimNumber": "", "contractorId": 0})

    const handleControlledInputChange = event => {
        const newClient = Object.assign({}, client)
        newClient[event.target.name] = event.target.value
        setClient(newClient)
    }

    const constructClient = () => {
        createClient(client)
    }

    useEffect(() => {
        getContractors()
    }, [])

  return (
    <Form>
      <FormGroup>
        <Label for="name">Client full name</Label>
        <Input type="text" name="name" id="name" placeholder="John/Jane Doh" onChange={handleControlledInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="claimNumber">Claim number</Label>
        <Input type="text" name="claimNumber" id="claimNumber" onChange={handleControlledInputChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="contractorId">Contractor</Label>
        <Input type="select" name="contractorId" id="contractorId" onChange={handleControlledInputChange}>
            {
                contractors.map(contractor => (
                    <option>{contractor.name}</option>
                ))
            }
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
