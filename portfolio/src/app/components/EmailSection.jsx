"use client"
import React, { useState } from 'react'
import GithubIcon from '../../../public/github.svg'
import LinkedinIcon from '../../../public/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }
    const response = await fetch(endpoint, options)
    const resData = await response.json()
    console.log(resData)

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='contact'>
        <h5 className='text-xl font-bold text-[#FC6F2F] my-2'>Let&apos;s Connect</h5>
        <p className='text-[#808080] mb-4 max-w-md font-bold'>
          {''}
          I&apos;m actively seeking new opportunities and welcome any inquiries or messages.
          Whether you have a question or simply want to say hello, feel free to reach out to me.
          I am committed to responding promptly to all messages received.
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='https://github.com/yingjod' target="_blank">
            <Image className='w-10' src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href='https://www.linkedin.com/in/ying-li-t/' target="_blank">
            <Image className='w-10' src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='text-[#FC6F2F] block mb-2 text-sm font-medium'>
              Your email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
              placeholder='example@gmail.com'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-[#FC6F2F] block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
              placeholder='Subject'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message'
              className='text-[#FC6F2F] block mb-2 text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className='text-red-500 text-sm mt-2'>
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection