import React, { useState, useEffect, useRef } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    alt: 'Youth learning on laptops in a classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    alt: 'Group of young people collaborating on a project',
  },
  {
    src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
    alt: 'Inclusive learning environment with persons with disabilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
    alt: 'Mentor guiding a group of students',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    alt: 'Young professionals celebrating success',
  },
];

const LandingCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const goTo = (idx: number) => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(next, 5000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-24 md:mt-32 mb-12" aria-label="Image Carousel">
      <div className="overflow-hidden rounded-xl shadow-lg">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`w-full h-64 md:h-96 object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            style={{ display: idx === current ? 'block' : 'none' }}
            aria-hidden={idx !== current}
          />
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-900 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-900 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={next}
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${idx === current ? 'bg-green-700' : 'bg-green-200'}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingCarousel; 