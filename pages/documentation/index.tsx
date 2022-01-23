import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Challenges from "../../components/documenation-steps/challenges";
import CoreFeature from "../../components/documenation-steps/core-feature";
import General from "../../components/documenation-steps/general";
import Improvements from "../../components/documenation-steps/improvements";
import ProjectStructure from "../../components/documenation-steps/project-structure";

const steps1 = [
  {
    label: "General",

    comp: <General />,
  },
  {
    label: "Project Structure",
    comp: <ProjectStructure />,
  },
  {
    label: "Core Feature",
    comp: <CoreFeature />,
  },
  {
    label: "Challenges",
    comp: <Challenges />,
  },
  {
    label: "Improvements",
    comp: <Improvements />,
  },
];

const Documentation: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps1.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <div className="w-full p-8 flex flex-col">
      <Head>
        <title>Storyblok example | Documentation</title>
      </Head>
      <h1 className="text-4xl text-center">
        Storyblok string replacement example
      </h1>

      <div className="mt-8 flex flex-grow border-t border-blue-300 pt-8">
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stepper nonLinear activeStep={activeStep} className="flex-wrap">
            {steps1.map(({ label }, index) => (
              <Step key={label}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div className="flex-grow flex flex-col">
            <React.Fragment>
              <div className="h-full mt-6">{steps1[activeStep].comp}</div>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
              </Box>
            </React.Fragment>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Documentation;
