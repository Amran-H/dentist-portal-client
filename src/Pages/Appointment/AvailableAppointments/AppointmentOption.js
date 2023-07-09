import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-lg">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "No Slots Available, Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available.</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white "
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;