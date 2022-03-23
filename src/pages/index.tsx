import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
// Don't forget to add this classes to any HTML rendered from Markdown,
// or pulled from a CMS. (Typography plugin)

// Class	               Gray scale
// prose-gray (default)	 Gray
// prose-slate	         Slate
// prose-zinc            Zinc
// prose-neutral	       Neutral
// prose-stone           Stone

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white dark:bg-dark'>
          <div className='container mx-auto flex min-h-screen flex-col items-center justify-center text-center'></div>
        </section>
      </main>
    </Layout>
  );
}
