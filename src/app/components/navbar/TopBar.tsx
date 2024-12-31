import React from 'react';

const TopBar = () => {
  return (
    <div className="w-full h-[38px] bg-black text-white flex items-center justify-between px-4 md:px-[544px]">
      <p className="text-xs md:text-sm text-center w-full md:w-auto">
        Sign up and get 20% off your first order.{' '}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </p>
      {/* Close Button */}
      <button className="hidden md:block ml-auto text-white">
        ✕
      </button>
    </div>
  );
};

export default TopBar;
