import * as React from 'react';

import clsxm from '@/lib/clsxm';

type ButtonDivProps = {
  content: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ButtonDiv({
  className,
  content,
  ...rest
}: ButtonDivProps) {
  return (
    <div
      className={clsxm(
        'rounded-md border border-black bg-transparent px-5 py-4 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
        className
      )}
      {...rest}
    >
      {content}
    </div>
  );
}
