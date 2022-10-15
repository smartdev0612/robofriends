import React from 'react'

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
        <input type='search' className='pa3 ba b--green bg-lightest-blue' onChange={searchChange} placeholder='Search Robots' />
    </div>
  )
}

export default SearchBox