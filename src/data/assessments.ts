import { Assessment } from '../types';

// Basic IT Skills Assessment
export const basicITAssessment: Assessment[] = [
  {
    id: 'it1',
    question: 'Which of these is a web browser?',
    options: ['Microsoft Word', 'Google Chrome', 'Adobe Photoshop', 'Notepad'],
    correctAnswer: 'Google Chrome',
    score: 5
  },
  {
    id: 'it2',
    question: 'What does URL stand for?',
    options: [
      'Universal Resource Locator',
      'Uniform Resource Locator',
      'United Resource Link',
      'Universal Reference Link'
    ],
    correctAnswer: 'Uniform Resource Locator',
    score: 5
  },
  {
    id: 'it3',
    question: 'Which of these is used to store files long-term on a computer?',
    options: ['RAM', 'CPU', 'Hard Drive', 'Motherboard'],
    correctAnswer: 'Hard Drive',
    score: 5
  },
  {
    id: 'it4',
    question: 'What is the primary function of cloud storage services like Google Drive or Dropbox?',
    options: [
      'To increase a computer\'s speed',
      'To store files online for access from any device',
      'To create and edit documents',
      'To protect a computer from viruses'
    ],
    correctAnswer: 'To store files online for access from any device',
    score: 5
  },
  {
    id: 'it5',
    question: 'In a video conference call, what does the term "mute" mean?',
    options: [
      'To turn off your camera',
      'To end the call',
      'To silence your microphone so others can\'t hear you',
      'To make your screen brighter'
    ],
    correctAnswer: 'To silence your microphone so others can\'t hear you',
    score: 5
  }
];

// Problem Solving Assessment
export const problemSolvingAssessment: Assessment[] = [
  {
    id: 'ps1',
    question: 'What comes next in the sequence: 2, 4, 8, 16, ...',
    options: ['20', '24', '32', '64'],
    correctAnswer: '32',
    score: 8
  },
  {
    id: 'ps2',
    question: 'If a shirt costs $20 and is on sale for 25% off, what is the sale price?',
    options: ['$5', '$10', '$15', '$25'],
    correctAnswer: '$15',
    score: 7
  },
  {
    id: 'ps3',
    question: 'Which of these doesn\'t belong in the group? Apple, Orange, Carrot, Banana',
    options: ['Apple', 'Orange', 'Carrot', 'Banana'],
    correctAnswer: 'Carrot',
    score: 5
  },
  {
    id: 'ps4',
    question: 'You have a task that takes 90 minutes to complete. If you start at 10:45 AM, what time will you finish?',
    options: ['11:30 AM', '12:00 PM', '12:15 PM', '12:30 PM'],
    correctAnswer: '12:15 PM',
    score: 7
  },
  {
    id: 'ps5',
    question: 'A team needs to schedule three 30-minute meetings. There must be a 15-minute break between each meeting. What is the total time required from the start of the first meeting to the end of the last one?',
    options: ['1 hour 30 minutes', '1 hour 45 minutes', '2 hours', '2 hours 15 minutes'],
    correctAnswer: '2 hours',
    score: 8
  }
];

// Cybersecurity Assessment
export const cybersecurityAssessment: Assessment[] = [
  {
    id: 'cs1',
    question: 'What is phishing?',
    options: [
      'A fishing technique used by hackers',
      'An attempt to acquire sensitive information by pretending to be a trustworthy entity',
      'A type of computer virus',
      'A method to speed up your internet connection'
    ],
    correctAnswer: 'An attempt to acquire sensitive information by pretending to be a trustworthy entity',
    score: 8
  },
  {
    id: 'cs2',
    question: 'What is 2FA?',
    options: [
      'A type of encryption',
      'Two-Factor Authentication',
      'A type of firewall',
      'File Format Authorization'
    ],
    correctAnswer: 'Two-Factor Authentication',
    score: 8
  },
  {
    id: 'cs3',
    question: 'Which of these is a good password practice?',
    options: [
      'Using the same password for all accounts',
      'Writing down passwords on a sticky note',
      'Using a combination of letters, numbers, and special characters',
      'Sharing passwords with trusted colleagues'
    ],
    correctAnswer: 'Using a combination of letters, numbers, and special characters',
    score: 9
  },
  {
    id: 'cs4',
    question: 'What is the main purpose of a VPN (Virtual Private Network)?',
    options: [
      'To increase your internet speed',
      'To secure your internet connection and protect your privacy',
      'To get free access to paid software',
      'To block all advertisements'
    ],
    correctAnswer: 'To secure your internet connection and protect your privacy',
    score: 8
  },
  {
    id: 'cs5',
    question: 'Which of the following is considered PII (Personally Identifiable Information)?',
    options: [
      'Your favorite color',
      'The name of your pet',
      'Your phone number',
      'Your city of birth'
    ],
    correctAnswer: 'Your phone number',
    score: 8
  }
];