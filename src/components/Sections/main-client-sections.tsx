'use client';
import React from 'react';
import Footer from './Footer';
import ProjectsCarousel from './ProjectsCarousel';
import { Divider } from '@nextui-org/react';
import { Atharv } from './Atharv';
import {
  freelanceProjects,
  opensourceProjects,
  personalProjects,
} from '@/assests/data/projectsData';

function MainClientSections() {
  return (
    <div>
      <ProjectsCarousel
        projects={personalProjects}
        heading="Personal Projects"
      />
      {/* <ProjectsCarousel
        projects={freelanceProjects}
        heading="Freelance Projects (60+ Overall)"
      /> */}
      {/* <ProjectsCarousel
        projects={opensourceProjects}
        heading="Opensource Projects"
        carouselSettings={{
          slidesToScroll: 1,
          slidesToShow: 2,
        }}
      /> */}

      <Divider className="bg-divider" />
      <Atharv />
      <Footer />
    </div>
  );
}

export default MainClientSections;
