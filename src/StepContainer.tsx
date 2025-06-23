import React, { useState } from 'react';
import StepNav from './components/StepNav';
import Step13Summary from './steps/Step13Summary';
import { useOnboarding } from '../context/OnboardingContext';

const StepContainer: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { currentStep, isPassing } = useOnboarding();
  const passing = isPassing();

  return (
    <div>
      {currentStep === 13 ? (
        <Step13Summary setEmailSent={setEmailSent} />
      ) : (
        // ...other steps...
      )}
      <StepNav emailSent={emailSent} passing={passing} />
    </div>
  );
};

export default StepContainer;