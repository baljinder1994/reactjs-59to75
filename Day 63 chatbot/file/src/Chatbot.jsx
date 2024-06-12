import React, { useState } from 'react'
import './App.css'
const App=() =>{
  const[message,setMessage]=useState([
    {from:'bot', text:'Hello'}
  ]);
  const[input,setInput]=useState('');

  const handleSend=() =>{
if(input.trim() === '') return;

const newM=[...message, {from:'user', text:input}]
setMessage(newM)
setInput('')

const botResponse=getBotResponse(input);
setTimeout(() =>{
    setMessage(prevMessage => [...prevMessage, {from:'bot', text:botResponse}])
},500)
  }

  const getBotResponse=(userInput)=>{
    const lowerCaseInput=userInput.toLowerCase();

    if(lowerCaseInput === 'hi'){
        return 'how are you'

    }else if(lowerCaseInput === 'i am good'){
        return 'how i can help you'
    }else if(lowerCaseInput === 'nothing'){
        return 'bye'
    }
  }








  return(
    <div className='chatbot'>
    <div className='chat-window'>
        {message.map((msg,index) =>(
        <div key={index} className={`message ${msg.from}`}>
            {msg.text}
        </div>
    ))}
    </div>
   
    <div className='input-area'>
        <input type="text" placeholder='Type your message here...'
         value={input}
         onChange={(e) => setInput(e.target.value)}

         onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        ></input>
        <button onClick={handleSend}>Send</button>
    </div>
    </div>
  )
}
export default App