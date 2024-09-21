import React from 'react';
import { Binoculars, Clock, MapPin, Users } from 'lucide-react';

const Connect: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-2 sm:mb-4">
          CREATIVITY PARTNERED WITH BOLD
        </h2>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-4 sm:mb-8">
          COURAGEOUSNESS
        </h3>
        
        <p className="text-sm sm:text-base text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
          In a crowded and competitive world, non-profits strive to connect with their audience through innovative
          and authentic messaging. At ARCHITECT Philanthropic Collective, we specialize in identity management,
          data-driven community engagement, and non-profit fundraising.
        </p>
        
        <p className="text-sm sm:text-base text-center mb-8 sm:mb-16 max-w-3xl mx-auto">
          Our approach is fueled by curiosity, creativity, and fearlessness. We work closely with our clients to
          understand their needs and develop a comprehensive strategy that aligns with their mission, goals, and
          budget.
        </p>
        
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <ServiceSection
            icon={<Binoculars className="w-8 h-8 sm:w-12 sm:h-12" />}
            title="DISCOVERY"
            description="Develop measurable goals and tactics to maximize messaging impact."
          />
          <ServiceSection
            icon={<Clock className="w-8 h-8 sm:w-12 sm:h-12" />}
            title="PLANNING"
            description="Keep communication open and stay on top of opportunities and projects."
          />
          <ServiceSection
            icon={<MapPin className="w-8 h-8 sm:w-12 sm:h-12" />}
            title="EXECUTION"
            description="Ensure all aspects are considered and potential risks are addressed."
          />
          <ServiceSection
            icon={<Users className="w-8 h-8 sm:w-12 sm:h-12" />}
            title="REVIEW"
            description="Align community needs with available resources and services."
          />
        </div>
        
        <p className="text-sm sm:text-base text-center mb-4 sm:mb-8 max-w-3xl mx-auto">
          At ARCHITECT, we prioritize strategy, logistics, marketing, and operations to create a winning mission story
          and identity. Our team is dedicated to bridging communication, social, and funding gaps, helping clients
          tell their story with authenticity and expertise.
        </p>
        
        <p className="text-sm sm:text-base text-center max-w-3xl mx-auto">
          We customize engagement plans that center around measurable goals and tactics, maximizing impact
          and intent. By leading innovation and nurturing relationships, ARCHITECT drives transformational
          engagement through design aesthetic, management, and strategy.
        </p>
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2 sm:mb-4">{icon}</div>
      <h4 className="text-lg sm:text-2xl font-light mb-2 sm:mb-4">{title}</h4>
      <p className="text-xs sm:text-sm">{description}</p>
    </div>
  );
};

export default Connect;