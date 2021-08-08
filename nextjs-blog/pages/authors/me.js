import React from 'react';
import Image from 'next/image';
import profilePic from '../images/profile.jpg';

export default function Me() {
  return (
    <>
      <h1>Hi I am Junnna.</h1>
      <Image
        src={profilePic}
        height={144}
        width={144}
        alt="My Avatar"
      />
    </>
  );
}
