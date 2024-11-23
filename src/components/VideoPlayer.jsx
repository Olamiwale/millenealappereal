import React from 'react';
import video from '../assets/video/v1.mp4';
import video01 from '../assets/video/v2.mp4';

export default function VideoPlayer (){
  return (
    <div className=' w-full p-5 space-x-5 flex justify-center'>
      <video className='w-1/2   h-auto' loop controls autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className='w-1/2 object-fill h-auto' loop controls autoPlay muted>
        <source src={video01} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
