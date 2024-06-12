import React, { useState } from 'react'
function App(){
  const[question,setQuestion]=useState('');
  const[options,setOptions]=useState([]);
  const[vote,setVote]=useState([]);
  const[pollCreated,setPollCreated]=useState(false);

  const handleQuestion=(e)=>{
    setQuestion(e.target.value);
  }

  const handleOption=(e,index)=>{
    const newOption=[...options];
    newOption[index]=e.target.value;
    setOptions(newOption);
  }
const totalVotes=vote.reduce((acc,curr)=>acc+curr,0);
  const handleAddOption=()=>{
    setOptions([...options,'']);
    setVote([...vote,0])
  }
  const handleVote=(index) =>{
    const newVote=[...vote];
    newVote[index] += 1;
    setVote(newVote);
  }
  const handleCreatePoll=() =>{
   if(question.trim() !== '' && options.length >= 2){
    setPollCreated(true);
   }else{
    alert('Please enter a question and at least 2 options');
   }
  }
const handleRemove=(index)=>{
   const newOptions=[...options];
   const newVote=[...vote];

   newOptions.splice(index,1)
   newVote.splice(index,1)

   setOptions(newOptions);
   setOptions(newVote);
}










return(
  <div className='poll-container'>
    {!pollCreated ?(
    <>
      <h2>Create Poll</h2>
      <label htmlFor="question">Question:</label>
      <input type="text" onChange={handleQuestion}
      id="question"
      value={question}
      
      ></input>
      <h3>Options:</h3>
      {options.map((option,index)=>(
      <div className='option-container' key={index}>
        <input type="text" onChange={(e) => handleOption(e,index)}
        value={option}
        
        ></input>
        <button onClick={() => handleRemove(index)}>Remove</button>
        
      </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      <button onClick={handleCreatePoll}>Create Poll</button>
    </>
    ) : (
    <>
      <h2>{question}</h2>
      <ul>
        {options.map((option,index)=>(
        <li key={index}>
          <label>
            <input type="radio" onClick={() => handleVote(index)}></input>
           {option}
          </label>
        </li>
        ))}
      </ul>
      <button>Back to Create Poll</button>
    </>
    )}
    {pollCreated && (
    <>
      <h2>Vote Summary</h2>
      {options.map((option,index)=>(
      <div className='vote-summary' key={index}>
        <p>{option}</p>
        <progress value={vote[index]} max={totalVotes}></progress>
        <p>{((vote[index]/ totalVotes) * 100).toFixed(2)}%votes</p>
        <button onClick={() => handleVote(index)}>Vote</button>
      </div>
      ))}
    </>
    )}
  </div>
)
}
export default App;