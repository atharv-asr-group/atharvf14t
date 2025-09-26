import React, { ReactNode } from 'react';
import { BiLogoJavascript, BiLogoSass, BiLogoTypescript } from 'react-icons/bi';
import { FaDocker, FaEthereum, FaHardHat, FaPython } from 'react-icons/fa';
import { SiNestjs, SiPytorch, SiScikitlearn, SiSolidity } from 'react-icons/si';
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
  nestjs: {
    name: 'NestJs',
    icon: <SiNestjs />,
  },
  tailwindcss: {
    name: 'TailwindCss',
    icon: <TbBrandTailwind />,
  },
  sass: {
    name: 'Sass',
    icon: <BiLogoSass />,
  },
  docker: {
    name: 'Docker',
    icon: <FaDocker />,
  },
  solidity: {
    name: 'Solidity',
    icon: <SiSolidity />,
  },
  etherjs: {
    name: 'Ether.Js',
    icon: <FaEthereum />,
  },
  hardhat: {
    name: 'Hardhat',
    icon: <FaHardHat />,
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
