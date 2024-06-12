import React, { useState } from 'react';

const ReadMore = ({ text,max }) => {
    const[isTr,setIsTr]=useState(true)
    const toggleTr=()=>{
       setIsTr(!isTr)
    }
     return(
        <div>
            {isTr ?(
            <div>
                {`${text.slice(0,max)}...`}
                <button onClick={toggleTr}>Read more..</button>
            </div>
            ):(
            <div>
            {text}
                <button onClick={toggleTr}>Show less</button>
            </div>
            )}
        </div>
     )
}
export default ReadMore 