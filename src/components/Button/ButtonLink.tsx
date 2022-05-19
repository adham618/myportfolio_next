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
          'rounded-md border border-[#000] bg-transparent px-5 py-4  hover:bg-black hover:text-white dark:border-[#fff] dark:hover:bg-[#fff] dark:hover:text-[#000]',
          className
        )}
        {...rest}
      >
        {content}
      </a>
    </Link>
  );
}
