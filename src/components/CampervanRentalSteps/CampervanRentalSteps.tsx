import { Stepper, Step, StepLabel } from '@mui/material'; // Make sure to import necessary components

const steps = [
  'Create your listing',
  'Accept new bookings',
  'Start earning',
];

function CampervanRentalSteps() {
  return (

    <Stepper nonLinear alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default CampervanRentalSteps;
