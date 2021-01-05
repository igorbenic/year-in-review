/**
 * Get all unique categories
 */
function getCategories( reviews ) {
    return reviews.map((review) => review.categories).flat().filter((value, index, self ) => self.indexOf(value) === index);
}

/**
 * Get Years
 */
function getYears( reviews ) {
    return reviews.map((review) => review.year).flat().filter((value, index, self ) => self.indexOf(value) === index);
}

export default function SearchForm({ reviews, category, year, setCategory, setYear }) {
     
    return (
        <div id="searchFrom" className="container rounded mx-auto my-4 bg-indigo-900 text-white p-4 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
                <label>Select a Category</label>
                <select className="text-black block w-full rounded p-2" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="">Select a category</option>
                    {
                        getCategories( reviews ).map((category) => <option key={category} value={category}>{category}</option>)
                    }
                </select>
            </div>
            <div className="">
                <label>Select a year</label>
                <select className="text-black block w-full rounded p-2" value={year} onChange={(event) => setYear(event.target.value)}>
                    <option value="">Select a year</option>
                    {
                        getYears( reviews ).map((category) => <option key={category} value={category}>{category}</option>)
                    }
                </select>
            </div>
        </div>
    );
  }