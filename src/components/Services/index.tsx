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
    title: 'Design',
    icon: <RiRulerLine />,
    content: 'Product design, UI/UX design, Design systems',
    titleColor: '#F43F5E',
  },
  {
    id: 2,
    title: 'Development',
    icon: <BiCode />,
    content: 'Developing scalable web apps and mobile apps',
    titleColor: '#EAB308',
  },
  {
    id: 3,
    title: 'Deployment',
    icon: <FaAws />,
    content: 'Automated deployment workflow and CI/CD pipelines',
    titleColor: '#3B82F6',
  },
  {
    id: 4,
    title: 'Maintainance',
    icon: <AiOutlineTool />,
    content: 'Continuous monitoring, maintenance and support',
    titleColor: '#22C55E',
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
        {cardData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon as never}
            title={card.title}
            content={card.content}
            titleColor={card.titleColor}
          />
        ))}
      </div>
    </section>
  );
}
