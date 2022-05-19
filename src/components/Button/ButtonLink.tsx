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
    <div
      className={clsxm(
        'rounded-md border border-black bg-transparent px-5 py-4 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black',
        className
      )}
    >
      <Link href={href} {...rest}>
        <a {...rest}>{content}</a>
      </Link>
    </div>
  );
}
