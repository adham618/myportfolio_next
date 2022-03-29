import * as React from 'react';

import clsxm from '@/lib/clsxm';

type ButtonProps = {} & React.ComponentPropsWithoutRef<'div'>;

export default function Button({ className, ...rest }: ButtonProps) {
  return <div className={clsxm('', className)} {...rest}></div>;
}
