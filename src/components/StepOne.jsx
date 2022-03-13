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

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

function StepOne({ page, setPage, data, setData }) {
  function Next() {
    setPage(() => page + 1);
  }
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper className="Stepper" activeStep={0} alternativeLabel>
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
          label="Ime..."
          variant="standard"
          onChange={(event) => setData({ ...data, ime: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Prezime..."
          variant="standard"
          onChange={(event) =>
            setData({ ...data, prezime: event.target.value })
          }
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Email..."
          variant="standard"
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
      </div>
      <div className="btn">
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={Next}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default StepOne;
