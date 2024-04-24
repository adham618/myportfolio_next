import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StrokeTitle from '@/components/StrokeTitle';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='prose max-w-3xl dark:prose-invert'>
            <StrokeTitle title='About Me' />
            <p
              className='mb-5 ml-5 max-w-sm  border-l-2 border-slate-500 py-2 pl-5
        '
            >
              Learn more about me.
            </p>
          </div>
          <div className='flex flex-col py-8 sm:py-12 sm:px-14'>
            <div className='prose prose-slate dark:prose-invert lg:prose-xl'>
              <p>
                Hey there! I&apos;m Adham, a passionate front-end developer
                calling Egypt home. I&apos;m all about diving into exciting
                projects, whether it&apos;s revamping existing pages or crafting
                something entirely new from scratch.
              </p>
              <p>
                Beyond the code, I&apos;m a creative soul who finds joy in all
                things web-related. From the artistry of design to the
                intricacies of development, I&apos;m constantly inspired by the
                possibilities of the digital world.
              </p>
              <p>
                When it comes to building websites and web applications, my goal
                is simple: to create something beautiful and functional. I take
                pride in writing code that&apos;s not just clean and
                understandable, but also a joy to interact with.
              </p>
              <p>
                I&apos;m your go-to guy for transforming any design, no matter
                how complex, into a stunning reality With Nextjs, React,
                TypeScript, Tailwind CSS and more.
              </p>
              <p>
                But what really sets me apart? It&apos;s my belief in the power
                of communication. I&apos;m all about keeping the lines open,
                collaborating closely with clients every step of the way to
                ensure we&apos;re always on the same page.
              </p>
              <p>
                So if you&apos;re on the lookout for someone who&apos;s not just
                a developer, but a partner in your project, look no further.
                Drop me a line, and let&apos;s create something amazing
                together!
              </p>
              <p>
                Best,
                <br />
                Adham
              </p>
            </div>
            <div className='flex justify-center'>
              <a
                href='/Frontend Developer(resume).pdf'
                className='mt-16 rounded-md border border-primary-focus bg-primary-focus px-10 py-4 text-slate-200 transition-colors hover:bg-primary hover:text-slate-100 dark:border-slate-300 dark:bg-primary-focus dark:hover:bg-slate-200 dark:hover:text-black'
                aria-label='my resume'
                target='_blank'
              >
                My Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
