import React from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import FormField from '../components/ui/FormField';
import Select from '../components/ui/Select';

const Step2Education: React.FC = () => {
  const { formData, updateFormData } = useOnboarding();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const educationOptions = [
    { value: 'primary', label: 'Primary School' },
    { value: 'secondary', label: 'Secondary School' },
    { value: 'ond', label: 'OND (Ordinary National Diploma)' },
    { value: 'hnd', label: 'HND (Higher National Diploma)' },
    { value: 'bsc', label: 'BSc (Bachelor\'s Degree)' },
    { value: 'msc-plus', label: 'MSc or Higher (Master\'s Degree or PhD)' }
  ];

  const studyAreaOptions = [
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'science', label: 'Science' },
    { value: 'engineering', label: 'Engineering & Technology' },
    { value: 'social-science', label: 'Social Sciences' },
    { value: 'business', label: 'Business & Economics' },
    { value: 'other', label: 'Other' }
  ];

  const trackOptions = [
    { value: 'bpo', label: 'Business Process Outsourcing (BPO)' },
    { value: 'cybersecurity-ai', label: 'Cybersecurity/AI' },
    { value: 'software-dev', label: 'Software Development' },
    { value: 'data-science', label: 'Data Science' }
  ];

  const subTrackOptions: Record<string, { value: string; label: string }[]> = {
    bpo: [
      { value: 'customer-service', label: 'Customer Service' },
      { value: 'data-entry', label: 'Data Entry' }
    ],
    'cybersecurity-ai': [
      { value: 'network-security', label: 'Network Security' },
      { value: 'ai-ml', label: 'AI & Machine Learning' }
    ],
    'software-dev': [
      { value: 'frontend', label: 'Frontend Development' },
      { value: 'backend', label: 'Backend Development' }
    ],
    'data-science': [
      { value: 'analytics', label: 'Analytics' },
      { value: 'visualization', label: 'Visualization' }
    ]
  };

  const nyscStatusOptions = [
    { value: 'completed', label: 'Completed' },
    { value: 'currently-serving', label: 'Currently Serving' },
    { value: 'exempted', label: 'Exempted' },
    { value: 'not-required', label: 'Not Required' },
    { value: 'not-yet-served', label: 'Not Yet Served' }
  ];

  return (
    <div className="space-y-4">
      <FormField
        id="educationLevel"
        label="Highest Level of Education"
        required
      >
        <Select
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          options={educationOptions}
        />
      </FormField>

      <FormField
        id="areaOfStudy"
        label="Area of Study"
        required
      >
        <Select
          id="areaOfStudy"
          name="areaOfStudy"
          value={formData.areaOfStudy}
          onChange={handleChange}
          options={studyAreaOptions}
        />
      </FormField>

      <FormField
        id="nyscStatus"
        label="NYSC Status"
        required
      >
        <Select
          id="nyscStatus"
          name="nyscStatus"
          value={formData.nyscStatus}
          onChange={handleChange}
          options={nyscStatusOptions}
        />
      </FormField>

      <FormField
        id="nyscCertificateNumber"
        label="NYSC Certificate Number"
        required={formData.nyscStatus === 'completed' || formData.nyscStatus === 'exempted'}
        hint="Enter your NYSC Certificate Number for verification"
      >
        <input
          type="text"
          id="nyscCertificateNumber"
          name="nyscCertificateNumber"
          value={formData.nyscCertificateNumber || ''}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          disabled={!(formData.nyscStatus === 'completed' || formData.nyscStatus === 'exempted')}
          placeholder="e.g. NYSC123456789"
        />
      </FormField>

      <FormField
        id="preferredTrack"
        label="Preferred Training Track"
        required
        hint="Choose the training track you're most interested in pursuing"
      >
        <Select
          id="preferredTrack"
          name="preferredTrack"
          value={formData.preferredTrack}
          onChange={handleChange}
          options={trackOptions}
        />
      </FormField>

      {formData.preferredTrack && subTrackOptions[formData.preferredTrack] && (
        <FormField
          id="preferredSubTrack"
          label="Preferred Sub-Track"
          required
          hint="Choose a sub-track under your selected track"
        >
          <Select
            id="preferredSubTrack"
            name="preferredSubTrack"
            value={formData.preferredSubTrack || ''}
            onChange={handleChange}
            options={subTrackOptions[formData.preferredTrack]}
          />
        </FormField>
      )}

      {/* Mentor radio button */}
      <FormField
        id="wantsMentor"
        label="Do you want a mentor?"
        required
      >
        <div className="flex space-x-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="wantsMentor"
              value="yes"
              checked={formData.wantsMentor === 'yes'}
              onChange={handleChange}
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="wantsMentor"
              value="no"
              checked={formData.wantsMentor === 'no'}
              onChange={handleChange}
            />
            <span>No</span>
          </label>
        </div>
      </FormField>

      <div className="bg-green-50 p-4 rounded-md mt-6">
        <h4 className="text-green-800 font-medium mb-2">Track Information</h4>
        {formData.preferredTrack === 'bpo' ? (
          <p className="text-sm text-gray-700">
            The <strong>Business Process Outsourcing (BPO)</strong> track focuses on customer service,
            data entry, transaction processing, and other business support skills. This track is ideal
            if you enjoy working with people and have good communication skills.
          </p>
        ) : formData.preferredTrack === 'cybersecurity-ai' ? (
          <p className="text-sm text-gray-700">
            The <strong>Cybersecurity/AI</strong> track focuses on network security, ethical hacking,
            artificial intelligence, and machine learning fundamentals. This track is ideal if you have
            a technical background or strong interest in technology and security.
          </p>
        ) : formData.preferredTrack === 'software-dev' ? (
          <p className="text-sm text-gray-700">
            The <strong>Software Development</strong> track focuses on programming, software design,
            and development practices. This track is ideal if you have a passion for coding and building
            applications.
          </p>
        ) : formData.preferredTrack === 'data-science' ? (
          <p className="text-sm text-gray-700">
            The <strong>Data Science</strong> track focuses on data analysis, visualization, and machine
            learning. This track is ideal if you enjoy working with data and uncovering insights.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Step2Education;