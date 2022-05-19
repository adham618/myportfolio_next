import Link from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type indexProps = {
  content: React.ReactNode;
  className?: string;
  href: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function ButtonLink({
  className,
  content,
  href,
  ...rest
}: indexProps) {
  return (
    <Link href={href} {...rest}>
      <a
        className={clsxm(
          'rounded-md border-2 border-black bg-transparent px-5 py-4 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
          className
        )}
      >
        {content}
      </a>
    </Link>
  );
}
