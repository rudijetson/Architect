import React from 'react';

const EngagementCard = ({ 
  title, 
  description, 
  backgroundColor, 
  textColor 
}: {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}) => (
  <div className={`${backgroundColor} ${textColor} p-6 rounded-lg shadow-md`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Engagement = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">
          <span className="text-cyan-400">CURIOSITY-INFUSED</span><br />
          <span className="text-fuchsia-500">FUNDRAISING &</span><br />
          <span className="text-cyan-400">ENGAGEMENT</span>
        </h2>
        
        <div className="space-y-6 mb-12">
          <p>At ARCHITECT Philanthropic Collective, we are committed to helping our nonprofit partners achieve a sustainable future. We believe that building and strengthening your fundraising infrastructure is key.</p>
          
          <p>We work closely with our clients to cultivate their unique voice and story, helping to amplify their message and reach their target audiences. Our team can also helps identify and pursue funding opportunities that align with your mission and goals, ensuring that you are well-positioned to achieve your long-term objectives.</p>
          
          <p>Through our comprehensive approach to fundraising, we help our nonprofit partners create a strong and sustainable foundation for growth and impact. Whether you need assistance with strategic planning, board engagement, or marketing and clarity, we are here to help you succeed.</p>
        </div>
        
        <p className="font-bold mb-8">Let&apos;s work together to build a bright future for your organization and the communities you serve.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EngagementCard
            title="VISIBILITY MANAGEMENT"
            description="Let us take the lead in building your mission identity and community presence so that you can focus on doing what you do best."
            backgroundColor="bg-yellow-500"
            textColor="text-white"
          />
          <EngagementCard
            title="FUNDRAISING STRATEGIES"
            description="Transform your fundraising with powerful action plans that not only harness support, but also share your mission with your target audience."
            backgroundColor="bg-emerald-500"
            textColor="text-white"
          />
          <EngagementCard
            title="STRATEGIC PLANNING"
            description="With strategic planning, you can set your course, allocate resources, and concentrate your efforts to reach your objectives."
            backgroundColor="bg-pink-500"
            textColor="text-white"
          />
          <EngagementCard
            title="DATA-DRIVEN DECISION-MAKING"
            description="Achieving outcomes is important, but how we reach our goals and who we involve in the decision-making process is just as crucial."
            backgroundColor="bg-black"
            textColor="text-white"
          />
          <EngagementCard
            title="AGILE METHODOLOGIES"
            description="By iterating and adapting quickly, we can optimize our efforts and stay on course to reach our destination with a fresh perspective."
            backgroundColor="bg-gray-500"
            textColor="text-white"
          />
          <EngagementCard
            title="EVENTS + LOGISTICS"
            description="We are here to support you every step of the way, from ideation to execution, ensuring a seamless journey towards the finish line."
            backgroundColor="bg-gray-300"
            textColor="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Engagement;