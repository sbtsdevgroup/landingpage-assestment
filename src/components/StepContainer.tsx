import React, { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import Card, { CardContent, CardFooter } from './ui/Card';
import StepNav from './StepNav';
import Step13Summary from '../steps/Step13Summary';
import { sections } from '../data/sections';

const StepContainer: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { currentStep, steps, isPassing } = useOnboarding();
  const passing = isPassing();

  // Get current step info
  const step = steps[currentStep - 1];
  const StepComponent = step?.component;

  // Get current section
  const section = sections[step.section - 1];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 md:py-10">
      {currentStep === 13 ? (
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <Step13Summary setEmailSent={setEmailSent} />
          <div className="mt-6">
            <StepNav emailSent={emailSent} passing={passing} />
          </div>
        </div>
      ) : (
        <Card className="bg-white/90 backdrop-blur-md">
          <div className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-1 text-primary-100">{section.description}</p>
          </div>
          <CardContent>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-primary">
                {step.title}
              </h3>
            </div>
            {StepComponent && <StepComponent />}
          </CardContent>
          <CardFooter>
            <StepNav emailSent={emailSent} passing={passing} />
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default StepContainer;