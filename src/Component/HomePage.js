import React from 'react';
import { Cover } from './Cover';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
import { Banner } from './Banner';
import { TeamSection } from './TeamSection';

export const HomePage = () => {
  return (
    <>
      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Banner />
      <TeamSection />
    </>
  );
};
