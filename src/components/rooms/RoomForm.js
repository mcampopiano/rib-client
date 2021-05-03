import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { RoomContext } from "./RoomProvider";

export const RoomForm = (props) => {
    const id = props.match.params.clientId
    const history = useHistory()
    const {addRoom} = useContext(RoomContext)
  const [room, setRoom] = useState({
    clientId: id,
    name: "",
    height: 0,
    length: 0,
    width: 0,
    ceilingDamage: false,
    damageAboveTwoFeet: false,
    class: 1,
  });
  const walls = []
  const [wallsDisplay, setWallsDisplay] = useState([])
  const [showWalls, setShowWalls] = useState(false)
  const ceilingDamage = useRef(false);
  const damageAboveTwoFeet = useRef(true);
  const wallOneHeight = useRef(0)
  const wallOneLength = useRef(0)
  const wallTwoHeight = useRef(0)
  const wallTwoLength = useRef(0)
  const wallThreeHeight = useRef(0)
  const wallThreeLength = useRef(0)
  const wallFourHeight = useRef(0)
  const wallFourLength = useRef(0)

  const handleControlledInputChange = (event) => {
    const newRoom = Object.assign({}, room);
    newRoom[event.target.name] = event.target.value;
    setRoom(newRoom);
  };

  const constructRoom = () => {
      addRoom({
          clientId: room.clientId,
          name: room.name,
          height: parseInt(room.height),
          length: parseInt(room.length),
          width: parseInt(room.width),
          ceilingDamage: ceilingDamage.current.checked,
          damageAboveTwoFeet: damageAboveTwoFeet.current.checked,
          class: room.class,
          walls: walls
      })
  }
  

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Living room"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="height">Height in feet</Label>
        <Input
          type="number"
          name="height"
          id="height"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="length">Length in feet</Label>
        <Input
          type="number"
          name="length"
          id="length"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="width">Width in feet</Label>
        <Input
          type="number"
          name="width"
          id="width"
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="class">Class</Label>
        <Input
          type="select"
          name="class"
          id="class"
          onChange={handleControlledInputChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="ceilingDamage"
            innerRef={ceilingDamage}
          />{" "}
          Check if there is ceiling damage
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="damageAboveTwoFeet"
            innerRef={damageAboveTwoFeet}
            onChange={() => setShowWalls(damageAboveTwoFeet.current.checked)}
          />{" "}
          Check if there is wall damage above two feet
        </Label>
      </FormGroup>
      {showWalls ? (
        <section>
          <h3>Walls</h3>
          <ol>
          {
            wallsDisplay.map(wall => (
              <li>Height: {wall.height}" Length: {wall.length}"</li>
            ))
          }
          </ol>
          <FormGroup>
            <h6>Wall one dimensions</h6>
            <Label for="height">Height in feet</Label>
            <Input type="number" name="height" innerRef={wallOneHeight}/>
            <Label for="length">Length in feet</Label>
            <Input type="number" name="length" innerRef={wallOneLength}/>
            <Button onClick={() => {
                walls.push({height: parseInt(wallOneHeight.current.value), length: parseInt(wallOneLength.current.value)})
                setWallsDisplay(walls)
                // window.alert("wall added successfully")
            }}>Add wall</Button>
          </FormGroup>
          <FormGroup>
            <h6>Wall two dimensions</h6>
            <Label for="height">Height in feet</Label>
            <Input type="number" name="height" innerRef={wallTwoHeight}/>
            <Label for="length">Length in feet</Label>
            <Input type="number" name="length" innerRef={wallTwoLength}/>
            <Button onClick={() => {
                walls.push({height: parseInt(wallTwoHeight.current.value), length: parseInt(wallTwoLength.current.value)})
                setWallsDisplay(walls)
                // window.alert("wall added successfully")
            }}>Add wall</Button>
          </FormGroup>
          <FormGroup>
            <h6>Wall three dimensions</h6>
            <Label for="height">Height in feet</Label>
            <Input type="number" name="height" innerRef={wallThreeHeight}/>
            <Label for="length">Length in feet</Label>
            <Input type="number" name="length" innerRef={wallThreeLength}/>
            <Button onClick={() => {
                walls.push({height: parseInt(wallThreeHeight.current.value), length: parseInt(wallThreeLength.current.value)})
                setWallsDisplay(walls)
                // window.alert("wall added successfully")
            }}>Add wall</Button>
          </FormGroup>
          <FormGroup>
            <h6>Wall four dimensions</h6>
            <Label for="height">Height in feet</Label>
            <Input type="number" name="height" innerRef={wallFourHeight}/>
            <Label for="length">Length in feet</Label>
            <Input type="number" name="length" innerRef={wallFourLength}/>
            <Button onClick={() => {
                walls.push({height: parseInt(wallFourHeight.current.value), length: parseInt(wallFourLength.current.value)})
                setWallsDisplay(walls)
                // window.alert("wall added successfully")
            }}>Add wall</Button>
          </FormGroup>
        </section>
      ) : (
        ""
      )}
      <Button onClick={() => {
          constructRoom()
          history.push(`/clients/${id}`)
      }}>
        Submit
      </Button>
    </Form>
  );
};
