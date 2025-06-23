import React, { useState } from 'react';
import { OnboardingProvider } from './context/OnboardingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StepContainer from './components/StepContainer';
import { useOnboarding } from './context/OnboardingContext'; // Import the hook
import LandingPage from './components/LandingPage';

function AppContent() {
  const { currentStep } = useOnboarding(); // Get currentStep from context

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: 'url(https://www.icbm.training/tmp/cache/uploads/template_files/BZOwZ6cVX4W9EF2aMVwYFOXgEGzyCv3T02GUkL8y-1600x680.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay with blur */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/40"
        style={{ backdropFilter: 'blur(8px)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-6">
          {/* Show welcome message only on first step */}
          {currentStep === 1 && (
            <div className="max-w-2xl mx-auto mb-4 bg-white/80 rounded-lg shadow p-8 text-center">
              <h1 className="text-3xl font-bold mb-4 text-green-900">Welcome to ICBM Training Onboarding!</h1>
              <p className="text-sm text-gray-700">
                We're excited to have you here. Please fill out the form below to get started with your onboarding process. Please make sure you have a stable internet connection and a quiet environment to complete the onboarding process.
              </p>
            </div>
          )}
          <StepContainer />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <OnboardingProvider>
      {showAssessment ? (
        <AppContent />
      ) : (
        <LandingPage onStart={() => setShowAssessment(true)} />
      )}
    </OnboardingProvider>
  );
}

export default App;