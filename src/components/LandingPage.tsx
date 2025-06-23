import React, { useState, useEffect } from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Equipping 50,000 Youths",
      subtitle: "IBCM In partnership with TrainingSol Joins Forces with Digital Bridge Institute",
      description: "Transforming Learning Experiences With Strategic Industry Collaboration. Through this partnership, we are equipping professionals with the knowledge and digital tools they need to thrive in a fast-changing global economy.",
      primaryBtn: "Learn More",
      secondaryBtn: "Our Courses"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Become A Professional",
      subtitle: "Call Center Agent Training Program",
      description: "Empowering Individuals With the Skills, Confidence, and Support Needed to Launch a Successful Career in Customer Service and Communication. Our comprehensive training program equips you with technical knowledge and practical experience.",
      primaryBtn: "Start Training",
      secondaryBtn: "Our Instructors"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Study Loan Privilege",
      subtitle: "Flexible, Affordable Student Loans",
      description: "Driving Social Impact and ROI Through Strategic Investment in Student Loan Programs. Our student loan program is designed to ease the financial burden of higher education with low interest rates and deferred payment options.",
      primaryBtn: "Apply For Loan",
      secondaryBtn: "More Details"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80",
      title: "Digital Innovation Hub",
      subtitle: "Powered by SBTS Group & Digital Bridge Institute",
      description: "Join Nigeria's leading digital transformation initiative. Access cutting-edge technology training, industry partnerships, and pathways to high-demand digital careers in telecommunications, IT, and emerging technologies.",
      primaryBtn: "Register Today",
      secondaryBtn: "Explore Programs"
    }
  ];

  const courses = [
    {
      id: 1,
      category: 'tech',
      title: 'Full Stack Web Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Master modern web technologies including React, Node.js, and databases',
      price: '₦150,000'
    },
    {
      id: 2,
      category: 'business',
      title: 'Digital Marketing & Social Media',
      duration: '3 months',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Learn to create effective digital marketing campaigns and manage social media',
      price: '₦80,000'
    },
    {
      id: 3,
      category: 'tech',
      title: 'Data Science & Analytics',
      duration: '4 months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Analyze data and create insights using Python, SQL, and visualization tools',
      price: '₦120,000'
    },
    {
      id: 4,
      category: 'business',
      title: 'Customer Service Excellence',
      duration: '2 months',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Professional call center training with communication and technical skills',
      price: '₦60,000'
    },
    {
      id: 5,
      category: 'tech',
      title: 'Cybersecurity Fundamentals',
      duration: '3 months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Learn to protect digital assets and understand security protocols',
      price: '₦100,000'
    },
    {
      id: 6,
      category: 'business',
      title: 'Project Management Professional',
      duration: '3 months',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Master project planning, execution, and leadership skills',
      price: '₦90,000'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      role: 'Software Developer at TechCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'IBCM Training transformed my career completely. The hands-on approach and industry connections helped me land my dream job in tech.',
      rating: 5
    },
    {
      id: 2,
      name: 'Fatima Hassan',
      role: 'Digital Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b436?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The digital marketing course was comprehensive and practical. I started my own agency 6 months after graduation.',
      rating: 5
    },
    {
      id: 3,
      name: 'Chidi Okoro',
      role: 'Data Analyst at FinanceHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The data science program exceeded my expectations. Real projects and mentorship made all the difference.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Students Trained', icon: '👥' },
    { number: '95%', label: 'Job Placement Rate', icon: '💼' },
    { number: '200+', label: 'Partner Companies', icon: '🏢' },
    { number: '25+', label: 'Course Programs', icon: '📚' }
  ];

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Basic computer literacy and a high school certificate or equivalent. Some specialized courses may have additional prerequisites.'
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'Yes, we have a dedicated career services team that helps with resume building, interview preparation, and connects you with our partner companies.'
    },
    {
      question: 'Are there scholarship opportunities?',
      answer: 'We offer various scholarship programs including merit-based, need-based, and special programs for underrepresented groups.'
    },
    {
      question: 'Can I study part-time while working?',
      answer: 'Absolutely! We offer flexible schedules including evening and weekend classes to accommodate working professionals.'
    },
    {
      question: 'What kind of certification will I receive?',
      answer: 'You will receive industry-recognized certificates upon completion, and many of our programs prepare you for international certifications.'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCourses = activeTab === 'all' ? courses : courses.filter(course => course.category === activeTab);

  const goToAssessment = () => {
    onStart();
  };

  const goToDBI = () => {
    window.open('https://dbi.edu.ng', '_blank');
  };

  const goToSBTS = () => {
    window.open('https://sbtsgroup.com', '_blank');
  };

  const goToPeaceInvest = () => {
    window.open('https://peaceinvest.net/', '_blank');
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/tga.jpeg"
                alt="TGA Logo"
                className="w-[216px] h-[48] rounded-lg object-cover"
              />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0186a3] font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0186a3] font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-[#0186a3] font-medium transition-colors">Courses</button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-[#0186a3] font-medium transition-colors">Partners</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#0186a3] font-medium transition-colors">Contact</button>
            </nav>
            
            {/* CTA Button */}
            <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all" onClick={goToAssessment}>
              Start Now
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0186a3] font-medium py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0186a3] font-medium py-2">About</button>
                <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-[#0186a3] font-medium py-2">Courses</button>
                <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-[#0186a3] font-medium py-2">Partners</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#0186a3] font-medium py-2">Contact</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-4 font-semibold">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{slide.description}</p>
                <div className="space-x-4">
                  <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all" onClick={goToAssessment}>
                    {slide.primaryBtn}
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all" onClick={goToAssessment}>
                    {slide.secondaryBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-opacity ${
                index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
              } hover:opacity-100`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0186a3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose IBCM Training</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover what makes our training programs stand out</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trending Courses</h3>
              <p className="text-gray-600 mb-6">Stay ahead of the curve with our most in-demand courses, carefully curated to match current industry needs and future job market trends.</p>
              <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all" onClick={goToAssessment}>Explore</button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Teachers</h3>
              <p className="text-gray-600 mb-6">Learn from experienced, certified instructors who bring real-world expertise and professional credentials to every training session.</p>
              <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all" onClick={goToAssessment}>Explore</button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Books & Library</h3>
              <p className="text-gray-600 mb-6">Access a rich collection of books and digital resources through our well-equipped library, designed to support your learning journey.</p>
              <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all" onClick={goToAssessment}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our comprehensive range of professional training programs</p>
          </div>

          {/* Course Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#0186a3] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'tech' 
                  ? 'bg-[#0186a3] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'business' 
                  ? 'bg-[#0186a3] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Business
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      course.category === 'tech' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {course.category === 'tech' ? 'Technology' : 'Business'}
                    </span>
                    <span className="text-2xl font-bold text-[#0186a3]">{course.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>📅 {course.duration}</span>
                    <span>📊 {course.level}</span>
                  </div>
                  <button className="w-full bg-[#0186a3] hover:bg-[#0186a3]/90 text-white py-3 rounded-lg font-semibold transition-all" onClick={goToAssessment}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our graduates who are now thriving in their careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-[#0186a3] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to begin your journey with us</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0186a3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Course</h3>
              <p className="text-gray-600">Browse our course catalog and select the program that matches your career goals.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0186a3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apply Online</h3>
              <p className="text-gray-600">Complete our simple online application form and submit required documents.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0186a3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Approved</h3>
              <p className="text-gray-600">Our admissions team will review your application and notify you of acceptance.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0186a3] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Learning</h3>
              <p className="text-gray-600">Begin your transformative learning journey with expert instructors and career support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our programs</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About IBCM Training</h2>
              <h3 className="text-2xl font-semibold text-[#0186a3] mb-6">Build Skills That Matters</h3>
              <p className="text-lg text-gray-600 mb-8">At IBCM Training, we offer practical, easy-to-follow courses designed to help you grow professionally. Learn at your own pace, from anywhere, with real-world content you can apply right away.</p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#0186a3] rounded-full mr-3"></div>
                    <span className="text-gray-700">Clear, expert-designed lessons</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#0186a3] rounded-full mr-3"></div>
                    <span className="text-gray-700">Flexible online access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#0186a3] rounded-full mr-3"></div>
                    <span className="text-gray-700">Support every step of the way</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-600 mb-8">Earn certificates, boost your confidence, and develop skills that make a difference. Start learning today with IBCM Training.</p>
              
              <button className="bg-[#0186a3] hover:bg-[#0186a3]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all" onClick={goToAssessment}>Learn More</button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning" 
                className="rounded-xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0186a3] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Collaborating with industry leaders to deliver world-class training</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DBI</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Digital Bridge Institute</h3>
                  <p className="text-gray-600">Nigeria's Premier ICT Training Institute</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">Digital Bridge Institute is Nigeria's leading telecommunications and ICT training institution, dedicated to building digital capacity and driving technological advancement across Africa. With state-of-the-art facilities and industry partnerships, DBI has trained thousands of professionals in emerging technologies.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#0186a3]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#0186a3]">50,000+</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
              </div>
              
              <button className="w-full bg-[#0186a3] hover:bg-[#0186a3]/90 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-auto" onClick={goToDBI}>Learn More About DBI</button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">SBTS Group</h3>
                  <p className="text-gray-600">Technology Solutions & Innovation</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">SBTS Group is a dynamic technology solutions company specializing in business process optimization, digital transformation, and innovative training programs. We bridge the gap between traditional education and modern industry demands through cutting-edge curriculum and practical training approaches.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#0186a3]">100+</div>
                  <div className="text-sm text-gray-600">Corporate Clients</div>
                </div>
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[#0186a3]">15+</div>
                  <div className="text-sm text-gray-600">Training Programs</div>
                </div>
              </div>
              
              <button className="w-full bg-[#0186a3] hover:bg-[#0186a3]/90 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-auto" onClick={goToSBTS}>Learn More About SBTS</button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#0186a3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PI</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">Peace Invest</h3>
                  <p className="text-gray-600">Global Investment Firm</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">A global investment firm that harnesses finance to build inclusive and peaceful economies through investments in human capital, digital inclusion, and more.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-xl font-bold text-[#0186a3]">Impact</div>
                  <div className="text-sm text-gray-600">Investing</div>
                </div>
                <div className="text-center p-4 bg-[#0186a3]/10 rounded-lg">
                  <div className="text-xl font-bold text-[#0186a3]">Global</div>
                  <div className="text-sm text-gray-600">Reach</div>
                </div>
              </div>
              
              <button className="w-full bg-[#0186a3] hover:bg-[#0186a3]/90 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-auto" onClick={goToPeaceInvest}>Learn More About Peace Invest</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#0186a3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Join thousands of young professionals who have already started their journey to career success with our comprehensive training programs.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0186a3] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all" onClick={goToAssessment}>Get Started Today</button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0186a3] transition-all" onClick={goToSBTS}>Schedule a Consultation</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0186a3] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">IB</span>
                </div>
                <span className="ml-3 text-xl font-bold">IBCM Training</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering the next generation of professionals through innovative training programs and strategic industry partnerships.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>About Us</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Courses</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Student Loans</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Career Services</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Call Center Training</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Digital Skills</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>ICT Certification</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors" onClick={goToAssessment}>Professional Development</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@ibcmtraining.com</li>
                <li>📞 +234 (0) 123 456 7890</li>
                <li>📍 Lagos, Nigeria</li>
                <li>🌐 www.ibcmtraining.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 IBCM Training. All rights reserved. | Powered by SBTS Group & Digital Bridge Institute</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;