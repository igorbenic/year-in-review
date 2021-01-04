import SearchForm from './components/SearchForm';
import Reviews from './components/Reviews';
import { useState } from 'react';
import { reviews } from './reviews';

function App() {
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  
  return (
    <div className="year-in-review">
      <header className="container	mx-auto bg-white rounded-lg my-6	shadow-md	 p-4 text-center">
        <h1 className="text-indigo-900	font-semibold	text-4xl font-mono">Year in Review</h1>
        <p className="text-gray-600 italic font-serif	mt-2">Read what other <strong>{reviews.length}</strong> have experienced in their "Year in Review" articles</p>
      </header>
      <SearchForm year={year} setYear={setYear} category={category} setCategory={setCategory} />
      <Reviews category={category} year={year} />
      <footer className="container	mx-auto bg-white rounded-lg my-6	shadow-md	 p-4 text-center">
        <p>Want to add a year in review?</p>
        <a target="_blank" className="inline-block rounded mt-2 px-4 py-2 bg-indigo-900 text-white hover:bg-indigo-500" href="https://github.com/igorbenic/year-in-review">Read how</a>
        <p className="mt-4 text-xs block text-center ">&copy; 2021. Made by <a target="_blank" href="https://ibenic.com">ibenic.com</a></p>
      </footer>
    </div>
  );
}

export default App;
