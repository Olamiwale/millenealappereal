import React from 'react';
import video from '../assets/video/v1.mp4';

export default function VideoPlayer (){
  return (
    <div className=' w-full flex justify-center'>
      <video className='w-full' loop controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
