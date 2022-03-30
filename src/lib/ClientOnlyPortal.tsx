import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
interface ClientOnlyPortalProps {
  children: React.ReactNode;
  selector: string;
}
export default function ClientOnlyPortal({
  children,
  selector,
}: ClientOnlyPortalProps) {
  const ref = useRef<Element | null>();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMount(true);
  }, [selector]);

  return mount ? createPortal(children, ref.current as never) : null;
}
