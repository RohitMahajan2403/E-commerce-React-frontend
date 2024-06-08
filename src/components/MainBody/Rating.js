import React from 'react';

const Rating = ({ rating }) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(i <= roundedRating ? fullStar : emptyStar);
    }

    return (
        <div className="star-rating">
            {stars.join('')}
        </div>
    );
};

export default Rating;
