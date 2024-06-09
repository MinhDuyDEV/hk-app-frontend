import React from "react";

interface HeaderAuthProps {
  heading: string;
  subheading: string;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ heading, subheading }) => {
  return (
    <div className='flex flex-col items-center mb-10'>
      <h2 className='text-2xl font-bold mb-3'>{heading}</h2>
      <p>{subheading}</p>
    </div>
  );
};

export default HeaderAuth;
