import { reviews } from '../reviews';
import Review from './Review';

function findReviews(category, year) {
    return reviews.filter((review) => {
        if ( category && ! review.categories.includes(category) ) {
            return false;
        }

        if ( year && parseInt(review.year) !== parseInt(year) ) {
            return false;
        }

        return true;
    });
}

export default function Reviews({ category, year }) {
    const reviews = findReviews( category, year );

    return (
        <div id="reviewList" className="container rounded mx-auto my-4 bg-white text-black p-4 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    reviews.map((review, index) => <Review index={index} key={"review-" + index} review={review} />)
                }
            </div>
        </div>
    );
}