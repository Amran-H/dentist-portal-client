import React from 'react';

const Review = ({ review }) => {

    const { name, img, review: userReview, location } = review;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 >{userReview}</h2>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div >
                        <p className='font-bold text-lg'>{name}</p>
                        <p className=''>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;