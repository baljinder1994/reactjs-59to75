import React from 'react'

const SearchResults = ({ results }) => {
  return(
    <ul>
      {results.map((result) =>(
        <li key={result.pageid}>
          {result.thumbnail &&(
           <img src={result.thumbnail} alt={result.title}></img>
          )}
          <a href={`https:en.wikipedia.org/?curid=${result.pageid} target="_blank" rel="noopener noreferrer"`}>
            {result.title}
          </a>
          <p dangerouslySetInnerHTML={{ __html:result.snippet}}></p>
        </li>
      ))}
    </ul>
  )
}
export default SearchResults