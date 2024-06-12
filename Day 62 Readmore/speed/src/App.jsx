import React from 'react'
import ReadMore from './Read'
const App=()=>{
 const longText="Lorem ipsum dolor sit amet um dolor sit amet consectetur adipisicinum dolor sit amet consectetur adipisicinconsectetur adipisicing elit. Quisquam, quae."
return(
  <div>
    <h1>Read More Exp.</h1>
    <ReadMore text={longText} max={50}/>
  </div>
)
}
export default App