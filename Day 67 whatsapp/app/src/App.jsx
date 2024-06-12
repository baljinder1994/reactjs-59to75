import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
 function App(){
  const phone="1234556";
  const message='Hello'
  const url=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`

 
  return (
    <div>
      <Button
      varient="contained"
      color="primary"
      startIcon={<WhatsAppIcon/>}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      >
        Open
         
      </Button>
    </div>
  )
   
}

export default App;
