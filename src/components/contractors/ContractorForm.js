import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ContractorContext } from "../contractors/ContractorProvider";

export const ContractorForm = (props) => {
  const { createContractor } = useContext(ContractorContext);
  const [contractor, setContractor] = useState({
    name: "",
  });
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newContractor = Object.assign({}, contractor);
    newContractor[event.target.name] = event.target.value;
    setContractor(newContractor);
  };

  const constructContractor = () => {
    createContractor(contractor)
    .then(res => res.json())
    .then(res => history.push(`/contractors/${res.id}`))
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name">Contractor full name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="John/Jane Doh"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <Button
        onClick={() => {
          constructContractor();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
