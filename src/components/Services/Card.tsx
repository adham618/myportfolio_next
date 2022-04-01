import * as React from 'react';

interface CardProps {
  icon: string;
  title: string;
  content: string;
  titleColor: string;
}
export default function Card({ icon, title, content, titleColor }: CardProps) {
  return (
    <div className='flex h-72 transform flex-col items-center justify-center gap-4 rounded-xl bg-slate-100 text-center  transition duration-500 hover:scale-95 dark:bg-primary md:w-auto'>
      <div className={`text-2xl font-bold text-${titleColor}`}>
        <span className='inline-block text-5xl font-black'>{icon}</span>
        <h2>{title}</h2>
      </div>
      <p className='p-5 text-left opacity-50'>{content}</p>
    </div>
  );
}
