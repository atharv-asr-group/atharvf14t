import React from 'react';
import {
  Image,
  Divider,
  Link,
  ScrollShadow,
} from '@nextui-org/react';
import { styles } from '@/styles/styles';
import { FaGithub } from 'react-icons/fa';
import { ProjectDataType } from '@/assests/data/projectsData';

type ProjectCardProps = {
  projectDetail: ProjectDataType;
  classNames?: string;
};

export default function ProjectCard({
  projectDetail,
  classNames,
}: ProjectCardProps) {
  return (
    <div
      className={`w-[320px] overflow-hidden rounded-xl border-none bg-background/60 p-3 shadow-lg md:w-[400px] ${classNames}`}
    >
      <div className="relative">
        <Image
          src={projectDetail.image}
          alt=""
          className="!max-h-[200px] w-full object-cover"
          width={390}
          height={300}
        />
      </div>
      <div className="mt-2 w-full justify-between">
        <h3 className={`${styles.label} h-[3.4rem] text-[18px] text-white`}>
          {projectDetail.name}
        </h3>
        <ScrollShadow hideScrollBar className="h-16 relative z-10">
          <p className={`font-[6px] text-white `}>{projectDetail.des}</p>
        </ScrollShadow>
      </div>

      <Divider className="my-3 bg-[#ffffff18]" />
      <div className="flex flex-wrap relative z-20 gap-2">
        {projectDetail.skills?.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 rounded-md bg-yellow-500 px-3 py-1 text-sm font-medium text-black shadow transition hover:bg-yellow-600"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>

      <Divider className="my-3 bg-[#ffffff18]" />
      <div className="flex w-full justify-between px-4 relative z-20">
        <Link href={projectDetail.github} target="_blank" className="no-underline">
          <button
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary bg-transparent px-4 py-2 text-primary transition hover:bg-primary hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </button>
        </Link>
        <Link href={projectDetail.demo} target="_blank" className="no-underline">
          <button
            className="inline-flex items-center rounded-xl border-2 border-primary bg-primary px-4 py-2 text-white transition hover:bg-primary/80"
          >
            Demo
          </button>
        </Link>
      </div>
    </div>
  );
}