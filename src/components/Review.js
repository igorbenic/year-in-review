export default function Review({ review, index }) {
    const reviewIndex = index;
    return (
        <a target="_blank" className="p-2 relative border-gray-200 hover:border-gray-400 border-2 rounded" href={review.url}>
            {review.thumb && <img className="w-8 absolute top-2 right-2" src={review.thumb}/>}
            <h2 className="text-indigo-900 bold hover:text-purple-900	">{review.title}</h2>
            <span className="text-sm block">By: {review.author}</span>
            <span className="text-xs mt-2 inline-block py-1 px-2 bg-indigo-900 text-white rounded">Year: {review.year}</span>
            <ul className="flex flex-wrap mt-4">
                {review.categories.map((category, index) => <li key={"review-category-" + index + reviewIndex}  className="text-xs py-1 mr-1 mb-1 px-2 bg-indigo-400 text-white rounded">{category}</li>)}
            </ul>
        </a>
    );
}