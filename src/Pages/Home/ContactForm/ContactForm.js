import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactForm = () => {
    return (
        <section className='text-center py-16 rounded-lg my-16'

            style={{
                background: `url(${appointment})`
            }}
        >

            <div>
                <h1 className='text-primary text-2xl font-bold'>Contact Us</h1>
                <h2 className='text-4xl mb-8 text-white'>Stay Connected With Us</h2>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                <textarea className="textarea w-full max-w-xs h-32" placeholder="Your Message"></textarea>            </div>
            <div className='mt-8'>
                <PrimaryButton ><h2 className='px-6'>Submit</h2></PrimaryButton>
            </div>
        </section>
    );
};

export default ContactForm;