import React, { ReactNode } from 'react';
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { FaDocker, FaPython } from 'react-icons/fa';
import { SiPytorch, SiScikitlearn } from 'react-icons/si';
import { FiTriangle } from "react-icons/fi";

import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
} from 'react-icons/tb';

export type OneSkillObjectType = {
  name: string;
  icon: ReactNode;
};

export type AllSkillsObjectType = {
  [index: string]: OneSkillObjectType;
};

export const allSkills: AllSkillsObjectType = {
  reactjs: {
    name: 'ReactJs',
    icon: <TbBrandReact />,
  },
  nextjs: {
    name: 'Nextjs',
    icon: <TbBrandNextjs />,
  },
  nodejs: {
    name: 'Nodejs',
    icon: <TbBrandNodejs />,
  },
  javascript: {
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
  },
  typescript: {
    name: 'Typescript',
    icon: <BiLogoTypescript />,
  },
  tailwindcss: {
    name: 'TailwindCss',
    icon: <TbBrandTailwind />,
  },
  docker: {
    name: 'Docker',
    icon: <FaDocker />,
  },
  python: {
    name: 'Python',
    icon: <FaPython />,
  },
  pytorch: {
    name: 'Pytorch',
    icon: <SiPytorch />,
  },
  scikitLearn: {
    name: 'ScikitLearn',
    icon: <SiScikitlearn />,
  },
  prisma: {
    name: 'Prisma',
    icon: <FiTriangle />,
  }
};
export default function useSkills() {
  return {
    allSkills,
  };
}
