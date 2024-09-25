import React from 'react'
import Nav from '../components/Nav'
import search from '../assets/search.jpg'
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="heading">
          <h1>America's most trusted news search platform</h1>
          <h2>Search global news with <span className='blue'>NewsFeed</span></h2>
        </div>
        <SearchBar placeholder="Search for topics, locations & sources"/>
        <div className="landing__img">
        <img src={search} alt="" />
        </div>
    </div>
  )
}

export default Home
