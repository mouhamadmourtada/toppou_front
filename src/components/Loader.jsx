import React from 'react';

export const Loader = () => {
  return (
    <>
      {/* <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div> */}
      <div class="flex justify-center items-center">
        <div class="rounded-full h-16 w-16 bg-secondaire animate-ping"></div>
      </div>

    </>
  );
};
