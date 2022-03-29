import * as React from 'react';

import clsxm from '@/lib/clsxm';

// eslint-disable-next-line @typescript-eslint/ban-types
type indexProps = {} & React.ComponentPropsWithoutRef<'div'>;

export default function index({ className, ...rest }: indexProps) {
  return <div className={clsxm('', className)} {...rest}></div>;
}
