import * as React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BiCode } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';
import { RiRulerLine } from 'react-icons/ri';

import Card from './Card';
import StrokeTitle from '../StrokeTitle';
const cardData = [
  {
    id: 1,
    icon: <RiRulerLine />,
    title: 'Design',
    content: 'Product design, UI/UX design, Design systems',
    titleColor: 'rose-500',
  },
  {
    id: 2,
    icon: <BiCode />,
    title: 'Development',
    content: 'Developing scalable web apps and mobile apps',
    titleColor: 'yellow-500',
  },
  {
    id: 3,
    icon: <FaAws />,
    title: 'Deployment',
    content: 'Automated deployment workflow and CI/CD pipelines',
    titleColor: 'blue-600',
  },
  {
    id: 4,
    icon: <AiOutlineTool />,
    title: 'Maintainance',
    content: 'Continuous monitoring, maintenance and support',
    titleColor: 'green-500',
  },
];
export default function Services() {
  return (
    <section className='layout py-20'>
      <div className='max-w-3xl'>
        <StrokeTitle title={<>What I&apos;am offering</>} />
        <p
          className='mb-5 ml-5  max-w-sm border-l-2 border-slate-500 py-2
        pl-5 opacity-50'
        >
          I help you start your business with a modern, user-friendly, and
          intuitive web application.
        </p>
      </div>
      <div className='grid grid-cols-1 justify-center gap-9 py-14 sm:px-14 lg:grid-cols-2'>
        {cardData.map(({ id, icon, title, content, titleColor }) => (
          <Card
            key={id}
            icon={icon as never}
            title={title}
            content={content}
            titleColor={titleColor}
          />
        ))}
      </div>
    </section>
  );
}
