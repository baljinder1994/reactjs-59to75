import React, { useState } from 'react'
import axios from 'axios'
const App=()=>{
 const[text,setText]=useState('')
 const[imageUrl,setImageUrl]=useState('')
 const[isLoading,setIsLoading]=useState(false)
 const[error,setError]=useState(null)

 const generate =async()=>{
  setIsLoading(true)
  setError(null)

  const apiKey='Your_Api_Key'
  try{
    const response=await axios.post('https://api.openai.com/v1/images/generations',
      {
        prompt:text,
        n:1,
        size:'1024x1024'
      },
      {
        headers:{
          'Authorization':`Bearer ${apiKey}`
        }
      }
    );
    const imageUrl=response.data.data[0].url;
    setImageUrl(imageUrl)
    setIsLoading(false)
    }catch(error){
      console.error('Error',error)
      setError('An error occured')
      setIsLoading(false)
    }
  }
 


 return(
  <>
  <div style={{textAlign:'center'}}></div>
  <input type="text"
  value={text}
  onChange={(e)=> setText(e.target.value)}

  ></input>
  
  <button onClick={generate} disabled={isLoading}>
   
  {isLoading ? 'Generating...':'Generate Image'}
  </button>
  <br/>
  {error && <p style={{color:'red'}}>{error}</p>}
  {imageUrl && <img src={imageUrl} alt="Title" width="500" height="500"></img>}
  </>
 )
}
export default App