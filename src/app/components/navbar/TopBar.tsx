"use client"
import React, { useState } from 'react';
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from '@clerk/nextjs'


const TopBar = () => {

  const [showTopBar, setShowTopBar] = useState(true);

  const handleClick = () => {
    setShowTopBar(false);
  };

  return (
    <>
    {
      showTopBar  && (
        <div className="w-full h-[38px] bg-black text-white flex items-center justify-between px-4 md:px-[544px]">
      <p className="text-xs md:text-sm text-center w-full md:w-auto">
        Sign up and get 20% off your first order.{' '}
      </p>
      {/* Authentication Buttons */}
      <div className="flex items-center space-x-4">
        {/* When the user is signed out, show Sign Up and Sign In buttons */}
        <SignedOut>
          <SignUpButton>
            <button className="text-white text-sm">Sign Up</button>
          </SignUpButton>
        </SignedOut>

        {/* When the user is signed in, show Sign Out button */}
        <SignedIn>
          <SignOutButton>
            <button className="text-white text-sm">Sign Out</button>
          </SignOutButton>
        </SignedIn>
      </div>

      {/* Close Button */}
      <button onClick={handleClick} className="hidden md:block ml-auto text-white">
        ✕
      </button>
    </div> )
    }
    </>
  );
};

export default TopBar;
