import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from 'react-hook-form';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StrokeTitle from '@/components/StrokeTitle';
interface IFormInput {
  name: string;
  email: string;
  message: string;
  ReCAPTCHA: string;
}
export default function ContactUSPage() {
  const [showElement, setShowElement] = React.useState(false);
  const recaptchaRef = React.useRef(null);

  const [submitted, setSubmitted] = React.useState(false);

  // States for contact form fields
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<IFormInput>({ mode: 'onChange' });

  //   Handling form submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
        setValue('name', '');
        setValue('email', '');
        setValue('message', '');
        setShowElement(true);
        setTimeout(function () {
          setShowElement(false);
        }, 3000);
      })
      .catch(() => {
        setSubmitted(false);
        alert('Something went wrong, please try again!');
      });
  };

  //   Handling form registerOptions
  const registerOptions = {
    name: {
      required: 'The Name Field is required',
      minLength: {
        value: 2,
        message: 'The Name Field must be at least 2 characters',
      },
      maxLength: {
        value: 20,
        message: 'The Name Field must be at most 20 characters',
      },
    },
    email: {
      required: 'The Email Field is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
    message: { required: 'The Message Field is required' },
    ReCAPTCHA: { required: 'Please Confirm You Are Not a Robot' },
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='prose dark:prose-invert'
            >
              <label className='mb-3 block'>
                Your Name
                <input
                  type='text'
                  {...register('name', registerOptions.name)}
                  maxLength={20}
                  minLength={2}
                  name='name'
                  className='dark:shadow-sm-light
            mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  placeholder='Your Name'
                />
                <span className='text-red-500'>{errors?.name?.message}</span>
              </label>
              <label className='mb-3 block'>
                Email Address
                <input
                  {...register('email', registerOptions.email)}
                  name='email'
                  type='email'
                  className='dark:shadow-sm-light
            mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  placeholder='Your Email'
                />
                <span className='text-red-500'>{errors?.email?.message}</span>
              </label>
              <label className='mb-3 block'>
                Message
                <textarea
                  {...register('message', registerOptions.message)}
                  name='message'
                  className='mb-5
            block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          '
                  rows={6}
                  placeholder="Tell me what you're thinking about..."
                ></textarea>
                <span className='text-red-500'>{errors?.message?.message}</span>
              </label>
              {touchedFields.name &&
                touchedFields.email &&
                touchedFields.message && (
                  <div {...register('ReCAPTCHA', registerOptions.ReCAPTCHA)}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={
                        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                      }
                    />
                    <span className='text-red-500'>
                      {errors?.ReCAPTCHA?.message}
                    </span>
                  </div>
                )}

              <div className='mb-6 mt-4'>
                <button
                  type='submit'
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className='
            focus:shadow-outline
            mb-2
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
                {showElement && (
                  <>
                    {submitted && (
                      <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
                        <span className='font-medium'>Alright!</span> Message
                        sent successfully.
                      </p>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
