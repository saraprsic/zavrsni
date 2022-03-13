import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

function StepTwo({ page, setPage, data, setData }) {
  function Next() {
    setPage(() => page + 1);
  }
  function Back() {
    setPage(() => page - 1);
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper className="Stepper" activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        <TextField
          id="standard-basic"
          label="Zanimanje..."
          variant="standard"
          onChange={(event) =>
            setData({ ...data, zanimanje: event.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Grad..."
          variant="standard"
          onChange={(event) => setData({ ...data, grad: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Bio..."
          variant="standard"
          onChange={(event) => setData({ ...data, bio: event.target.value })}
        />
      </div>
      <div className="btn">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={Back}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button variant="contained" onClick={Next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default StepTwo;
