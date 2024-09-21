import React from 'react';
import Image from 'next/image';

const Stats = () => {
  return (
    <div className="bg-teal-800 text-white p-8 md:p-16">
      <h2 className="text-4xl font-light mb-12">STATS + FACTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <StatItem value="46%" label="engagement increase" description="by implementing new fundraising tools and innovative strategies" />
        <StatItem value="50+" label="nonprofits serviced" description="small to mid-sized, BIPOC-led nonprofits across various sectors" />
        <StatItem value="37.6%" label="fundraising growth" description="average within the first year of partnership for clients using comprehensive services" />
        <StatItem value="87%" label="operational efficacy" description="average within the first year of partnership for clients using comprehensive services" />
      </div>
      <h3 className="text-2xl font-light mb-8">NOTABLE PARTNERS:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <PartnerLogo src="/path-to-ncccgp-logo.png" alt="North Carolina Council of Charitable Gift Planners" />
        <PartnerLogo src="/path-to-afp-logo.png" alt="Association of Fundraising Professionals" />
        <PartnerLogo src="/path-to-giving-docs-logo.png" alt="Giving Docs" />
        <PartnerLogo src="/path-to-bloomerang-logo.png" alt="Bloomerang" />
      </div>
    </div>
  );
};

interface StatItemProps {
  value: string;
  label: string;
  description: string;
}

const StatItem = ({ value, label, description }: StatItemProps) => (
  <div className="text-center">
    <div className="text-5xl font-bold mb-2">{value}</div>
    <div className="text-xl mb-2">{label}</div>
    <p className="text-sm">{description}</p>
  </div>
);

interface PartnerLogoProps {
  src: string;
  alt: string;
}

const PartnerLogo = ({ src, alt }: PartnerLogoProps) => (
  <div className="bg-white rounded-full w-full pt-[100%] relative">
    <Image src={src} alt={alt} layout="fill" objectFit="contain" className="p-4" />
  </div>
);

export default Stats;