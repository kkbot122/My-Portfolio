import type { skills } from '@/lib/constants';
import React from 'react';

interface Skills {
  company: string;
  role: string;
  period: 'Now' | 'Previous';
  logo?: string;
}

const Skills = () => {
  const experiences: Skills[] = [
    {
      company: 'Google',
      role: 'UX Designer',
      period: 'Now'
    },
    {
      company: 'Razorpay',
      role: 'Senior Product Designer',
      period: 'Previous'
    },
    {
      company: 'Scapia',
      role: 'Senior Product Designer',
      period: 'Previous'
    },
    {
      company: 'Jar App',
      role: 'Product Designer',
      period: 'Previous'
    },
    {
      company: 'Cashbook UPI (YC)',
      role: 'Product Designer',
      period: 'Previous'
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-16">Experience</h2>
        
        <div className="space-y-12">
          <div>
            <p className="text-sm text-gray-500 mb-4">Now</p>
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-xl">🔵</span>
                </div>
                <span className="font-medium">Google</span>
              </div>
              <span className="text-gray-600">UX Designer</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-4">Previous</p>
            <div className="space-y-0">
              {experiences.filter(exp => exp.period === 'Previous').map((exp, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xl">
                        {index === 0 ? '🟦' : index === 1 ? '🟨' : index === 2 ? '🟧' : '📗'}
                      </span>
                    </div>
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <span className="text-gray-600">{exp.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;