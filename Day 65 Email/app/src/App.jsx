import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
function App() {
  const handleClick=() =>{
    window.location.href="mailto:abc@gmail.com?subject=Hello&body=Hi,This is an email"
  }
  return(
    <div>
      <Button
       varient="contained"
       startIcon={<EmailIcon />}
       onClick={handleClick}
      >Send Email</Button>
    </div>
  )
}
export default App