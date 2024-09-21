import React from 'react';

const About = () => {
  return (
    <div className="bg-yellow-400 p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-12">
        DON'T WORRY, WE'RE HERE TO HELP.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="NONPROFIT FUNDRAISING LEADERSHIP"
          content={`We understand the unique challenges facing small and medium-sized nonprofits when it comes to fundraising. That's why we offer expert fundraising leadership to help your organization build its capacity for success.

          As a designated Chartered Advisor in Philanthropy® (CAP®), we bring a deep understanding of the philanthropic landscape and a wealth of experience to every engagement.

          With our support, you can feel confident in your fundraising efforts and focus on what matters most – advancing your mission and making a positive impact on your community.`}
          buttonText="What's a CAP® ^"
        />
        <ServiceCard
          title="MISSION MANAGEMENT MARKETING STRATEGY"
          content={`Are you struggling to define your organization's narrative and convey your mission effectively? Don't worry, we're here to help.

          We start by leveraging your organization's unique assets and data to create an authentic and focused message that resonates with your target audience.

          With our proven approach, we help you build a powerful mission identity and tell your story in a way that inspires and motivates action.

          Let us help you connect with your audience and achieve your goals through compelling and impactful vision and marketing.`}
          buttonText="Learn more ^"
        />
        <ServiceCard
          title="STRATEGY + CONSTITUENCY DEVELOPMENT"
          content={`Connected to a group that's feeling stagnant or struggling to get started?

          We understand that engagement is a critical factor in the success of any organization, and we are here to help you develop and implement effective strategies for engaging and empowering your constituency members.

          With our expertise, you can move forward with confidence, knowing that you have a solid plan in place and a team of experts to support you every step of the way.

          Let's work together to bring your vision to life and achieve your goals.`}
          buttonText="Let's get started ^"
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  content: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, content, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">{title}</h3>
      <p className="text-gray-700 mb-6">{content}</p>
      <button className="bg-transparent border-2 border-pink-500 text-pink-500 px-4 py-2 rounded hover:bg-pink-500 hover:text-white transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default About;
