import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            patient: name,
            treatment: treatment.name,
            slot,
            email,
            phone,
        }
        // TODO: send data to the server
        // and once data is saved then close the modal and display success toast.
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={date} className="input w-full font-bold" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots?.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full input-bordered" />
                        <input
                            className='btn btn-accent w-full'
                            type="submit" value="SUBMIT" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;