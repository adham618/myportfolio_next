import * as React from 'react';

import clsxm from '@/lib/clsxm';

type indexProps = {
  content: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function index({ className, content, ...rest }: indexProps) {
  return (
    <button
      className={clsxm(
        'rounded-md border border-black bg-transparent px-5 py-4 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
        className
      )}
      {...rest}
    >
      {content}
    </button>
  );
}
