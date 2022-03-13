import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

function StepThree({ page, setPage, data }) {
  function Next() {
    setPage(() => page + 1);
  }
  function Back() {
    setPage(() => page - 1);
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper className="Stepper" activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <List>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="Ime:"
            secondary={data.ime}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="Prezime:"
            secondary={data.prezime}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="E-mail:"
            secondary={data.email}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="Zanimanje:"
            secondary={data.zanimanje}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="Grad:"
            secondary={data.grad}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className="listitemtext"
            primary="Bio:"
            secondary={data.bio}
          />
        </ListItem>
      </List>
      <div className="btn">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={Back}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button variant="contained" onClick={Next}>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default StepThree;
