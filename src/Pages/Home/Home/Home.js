import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import DentalCare from '../DentalCare/DentalCare';
import Testimonial from '../Testimonial/Testimonial';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;