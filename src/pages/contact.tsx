/* eslint-disable no-console */
import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StrokeTitle from '@/components/StrokeTitle';

export default function ContactUSPage() {
  // States for contact form fields
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [submitted, setSubmitted] = React.useState(false);
  //   Handling form submit
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Sending');
    const data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  return (
    <Layout>
      <Seo templateTitle='Contact Me' />

      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='prose max-w-3xl dark:prose-invert'>
            <StrokeTitle title='Contact Me' />
            <p
              className='mb-5 ml-5 max-w-sm  border-l-2 border-slate-500 py-2 pl-5
        '
            >
              Contact me via email.
            </p>
          </div>
          <div className='flex flex-col justify-center py-14 sm:px-14'>
            <form onSubmit={handleSubmit} className='prose dark:prose-invert'>
              <label className='mb-6 block'>
                Your Name
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name='name'
                  required
                  className='
            dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  placeholder='Your Name'
                />
              </label>
              <label className='mb-6 block'>
                Email Address
                <input
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  required
                  className='
            dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  placeholder='Your.Email@example.com'
                />
              </label>
              <label className='mb-6 block'>
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name='message'
                  required
                  className='
            block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  rows={6}
                  placeholder="Tell me what you're thinking about..."
                ></textarea>
              </label>
              <div className='mb-6'>
                <button
                  type='submit'
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className='
            focus:shadow-outline
            rounded-lg
            bg-primary-focus
            px-7
            py-2
            text-slate-50
            transition-colors
            duration-150
            hover:bg-primary
            dark:bg-gray-700
            dark:hover:bg-gray-800
          '
                >
                  Submit
                </button>
                {submitted ? (
                  <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
                    <span className='font-medium'>Alright!</span> Message sent
                    successfully.
                  </p>
                ) : (
                  <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
                    <span className='font-medium'>Sorry!</span> Message not
                    sent.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
