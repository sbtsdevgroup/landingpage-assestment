import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useOnboarding } from '../context/OnboardingContext';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { sections } from '../data/sections';
import { basicITAssessment, problemSolvingAssessment, cybersecurityAssessment } from '../data/assessments';
import StepNav from '../components/StepNav';

interface Step13SummaryProps {
  setEmailSent: (sent: boolean) => void;
}

const Step13Summary: React.FC<Step13SummaryProps> = ({ setEmailSent }) => {
  const { formData, calculateScore, isPassing } = useOnboarding();

  const score = calculateScore();
  const passing = isPassing();

  // Count correct answers
  const itCorrect = formData.basicITSkills.length;
  const problemSolvingCorrect = formData.problemSolvingAnswers.length;
  const cybersecurityCorrect = formData.cybersecurityAnswers?.length || 0;

  // Prevent multiple emails on re-render
  const emailSentRef = useRef(false);
  const [emailSent, setEmailSentState] = useState(false);

  // Replace with your actual EmailJS IDs
  const SERVICE_ID = 'service_7555w74';
  const TEMPLATE_ID = 'template_9ysc16q';
  const USER_ID = 'kOfy2pDoEyKz_pPEX';

  const sendEmail = () => {
    // Log all form data as JSON
    console.log('Form Data:', JSON.stringify(formData, null, 2));

    // Debug: Check email value
    console.log('Sending email to:', formData.email);

    if (!formData.email) {
      alert('No email address found. Please provide a valid email.');
      return;
    }

    const templateParams = {
      name: formData.fullName,              // <-- Add this line for user's name
      to_name: formData.fullName,           // (optional, if you use {{to_name}} elsewhere)
      email: formData.email,                // User's email
      company_name: 'ICBM Training',        // Company name
      score: score,
      track: formData.preferredTrack,
      result: passing ? 'Congratulations! You passed.' : 'Thank you for your application.',
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        setEmailSentState(true);
        setEmailSent(true); // <-- This updates the parent
      }, (err) => {
        setEmailSentState(false);
        setEmailSent(false); // <-- This updates the parent
      });
  };

  // Send email when component mounts (user finishes)
  // Only send email if passing
  useEffect(() => {
    if (!emailSentRef.current && passing) {
      sendEmail();
      emailSentRef.current = true;
    }
    // eslint-disable-next-line
  }, [passing, formData.email]);

  useEffect(() => {
    // Log all form data as JSON when the summary is shown
    console.log('Final Form Data:', JSON.stringify(formData, null, 2));
  }, []);

  const handleFinish = () => {
    window.location.href = 'https://icbm.training';
  };

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-md text-white text-center ${passing ? 'bg-primary' : 'bg-red-600'}`}>
        <h3 className="text-xl font-bold mb-2">
          {passing ? 'Congratulations!' : 'Thank You for Your Application'}
        </h3>
        <p>
          {passing
            ? 'You have qualified for the Human Capital Bond program.'
            : 'Unfortunately, you did not meet the minimum requirements at this time.'}
        </p>
        <div className="mt-4 text-2xl font-bold">
          Score: {score}%
          <span className="text-sm ml-2 font-normal">
            (Pass mark: 70%)
          </span>
        </div>
      </div>

      {passing ? (
        <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <h4 className="font-medium text-primary mb-2">Next Steps</h4>
          <p className="text-sm text-primary/90 mb-3">
            An email has been sent to <strong>{formData.email}</strong> with your login credentials
            to the ICBM e-learning platform. Please check your inbox (and spam folder).
          </p>
          <p className="text-sm text-primary/90">
            Your training for the <strong>{formData.preferredTrack === 'bpo' ? 'Business Process Outsourcing' : 'Cybersecurity/AI'}</strong> track
            will begin soon. The email contains all the necessary information about your cohort start date,
            orientation sessions, and what to prepare.
          </p>
          <div className="mt-4">
            <Button onClick={sendEmail}>
              Resend Welcome Email
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 p-4 rounded-md border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">Improvement Recommendations</h4>
          <p className="text-sm text-red-700 mb-3">
            Based on your assessment, we recommend focusing on the following areas:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
            {score < 70 && itCorrect < 2 && (
              <li>Improve your basic IT skills and technology familiarity</li>
            )}
            {score < 70 && formData.typingSpeed < 25 && formData.preferredTrack === 'bpo' && (
              <li>Practice typing to increase your speed (aim for at least 40 WPM)</li>
            )}
            {score < 70 && problemSolvingCorrect < 2 && (
              <li>Work on problem-solving and logical reasoning skills</li>
            )}
            {score < 70 && formData.preferredTrack === 'cybersecurity-ai' && cybersecurityCorrect < 2 && (
              <li>Learn more about basic cybersecurity concepts</li>
            )}
            {score < 70 && (formData.englishReading + formData.englishWriting + formData.englishSpeaking) < 9 && (
              <li>Improve your English language proficiency</li>
            )}
          </ul>
          <p className="mt-3 text-sm text-red-700">
            You may reapply in 3 months after improving in these areas.
          </p>
        </div>
      )}

      <div className="border rounded-md overflow-hidden">
        <div className="bg-gray-50 p-4 border-b">
          <h3 className="font-medium text-gray-900">Assessment Summary</h3>
        </div>

        <div className="divide-y">
          {sections.slice(0, -1).map((section) => (
            <div key={section.id} className="p-4">
              <h4 className="font-medium text-gray-800 mb-2">{section.title}</h4>
              {section.id === 1 && (
                <div className="space-y-1 text-sm">
                  <p>Personal Information: Complete</p>
                  <p>Education Level: {
                    formData.educationLevel === 'primary' ? 'Primary School' :
                      formData.educationLevel === 'secondary' ? 'Secondary School' :
                        formData.educationLevel === 'ond' ? 'OND' :
                          formData.educationLevel === 'hnd' ? 'HND' :
                            formData.educationLevel === 'bsc' ? 'BSc' : 'MSc or higher'
                  }</p>
                  <p>Preferred Track: {formData.preferredTrack === 'bpo' ? 'Business Process Outsourcing' : 'Cybersecurity/AI'}</p>
                  <p>English Proficiency: {Math.round((formData.englishReading + formData.englishWriting + formData.englishSpeaking) / 3)} / 5</p>
                </div>
              )}

              {section.id === 2 && (
                <div className="space-y-1 text-sm">
                  <p>Basic IT Skills: {itCorrect} of {basicITAssessment.length} correct</p>
                  <p>Typing Speed: {formData.typingSpeed} WPM</p>
                  <p>Digital Communication Skills: Good</p>
                  <p>Problem Solving: {problemSolvingCorrect} of {problemSolvingAssessment.length} correct</p>
                  {formData.preferredTrack === 'cybersecurity-ai' && (
                    <p>Cybersecurity Knowledge: {cybersecurityCorrect} of {cybersecurityAssessment.length} correct</p>
                  )}
                </div>
              )}

              {section.id === 3 && (
                <div className="space-y-1 text-sm">
                  <p>Needs Financial Assistance: {formData.needsLoan ? 'Yes' : 'No'}</p>
                  <p>Employment Status: {
                    formData.employmentStatus === 'employed' ? 'Employed' :
                      formData.employmentStatus === 'unemployed' ? 'Unemployed' : 'Underemployed'
                  }</p>
                  <p>Willing to Relocate: {
                    formData.willingToRelocate === 'yes' ? 'Yes' :
                      formData.willingToRelocate === 'no' ? 'No' : 'Conditional'
                  }</p>
                  <p>Has Laptop: {formData.hasLaptop ? 'Yes' : 'No'}</p>
                  <p>Availability: {
                    formData.availability === 'morning' ? 'Morning' :
                      formData.availability === 'afternoon' ? 'Afternoon' :
                        formData.availability === 'evening' ? 'Evening' : 'Full-time'
                  }</p>
                </div>
              )}

              {section.id === 4 && (
                <div className="space-y-1 text-sm">
                  <p>Motivation Essay: {formData.motivationEssay.split(/\s+/).filter(Boolean).length} words</p>
                  <p>Future Goals: Provided</p>
                  <p>Commitment to Work: {formData.willingToCommit ? 'Yes' : 'No'}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
          Thank you for completing the Human Capital Bond program assessment.
          If you have any questions, please contact <a href="mailto:support@icbm.learning" className="text-blue-600 hover:underline">support@icbm.learning</a>.
        </p>
      </div>
{/* 
      <StepNav emailSent={emailSent} passing={passing} /> */}
    </div>
  );
};

export default Step13Summary;