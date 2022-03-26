import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
// interface AboutPageProps {
//   data: {
//     attributes: {
//       title: string;
//       content: string;
//     };
//   };
// }
export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />

      <main>
        <section className='dark:bg-dark'>
          <div className='layout min-h-screen py-16  text-content dark:text-content-dark'>
            <h1 className='mb-5'>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque provident necessitatibus aliquam iusto id magni! Amet
              fuga quo quisquam, quasi voluptatibus nesciunt optio ullam dolore
              esse quos repellendus. Dignissimos, voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque provident necessitatibus aliquam iusto id magni! Amet
              fuga quo quisquam, quasi voluptatibus nesciunt optio ullam dolore
              esse quos repellendus. Dignissimos, voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque provident necessitatibus aliquam iusto id magni! Amet
              fuga quo quisquam, quasi voluptatibus nesciunt optio ullam dolore
              esse quos repellendus. Dignissimos, voluptatem. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Doloremque provident
              necessitatibus aliquam iusto id magni!
            </p>
            <p>
              Amet fuga quo quisquam, quasi voluptatibus nesciunt optio ullam
              dolore esse quos repellendus. Dignissimos, voluptatem. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Doloremque provident
              necessitatibus aliquam iusto id magni! Amet fuga quo quisquam,
              quasi voluptatibus nesciunt optio ullam dolore esse quos
              repellendus. Dignissimos, voluptatem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque provident necessitatibus
              aliquam iusto id magni! Amet fuga quo quisquam, quasi voluptatibus
              nesciunt optio ullam dolore esse quos repellendus. Dignissimos,
              voluptatem.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
// export const getStaticProps = async () => {
//   const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
//   const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/about`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data: data.data },
//     revalidate: 1,
//   };
// };
