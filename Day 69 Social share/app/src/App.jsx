// App.js
import React from 'react';
import ShareButtons from './Tweet'
const App = () => {
   const url='https://www.example.com'
   const title='Check out this link'
   return(
    <>
    <h1>Social Media</h1>
    <ShareButtons url={url} title={title}/>
    </>
   
   )
 

};

export default App;
