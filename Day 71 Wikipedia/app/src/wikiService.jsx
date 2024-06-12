// src/services/wikiService.jsx

import axios from 'axios';

const BASE_URL = 'https://en.wikipedia.org/w/api.php';

const fetchWikiData = async (searchQuery) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        action: 'query',
        list: 'search',     
        format: 'json',
        origin: '*',
        srsearch: searchQuery,
      },
    });
const searchResults=response.data.query.search;
const pageIds=searchResults.map(result => result.pageid).join('|');
const pageResponse=await axios.get(BASE_URL, {
  params: {
    action: 'query',
    pageids:pageIds,
    prop:'pageimages|extracts',
    format:'json',
    origin:'*',
    pithumbnail:'thumbnail',
    pithumbsize:'150',
    exintro:true,
    explaintext:true,
    
  },
})
const pages=pageResponse.data.query.pages;
const mergedResults=searchResults.map(result =>({
  ...result,
  thumbnail:pages[result.pageid].thumbnail?.source,
  extract:pages[result.pageid].extract,
}))
return mergedResults
    
  } catch (error) {
    console.error('Error fetching data from Wikipedia API:', error);
    return [];
  }
};

export default fetchWikiData;
