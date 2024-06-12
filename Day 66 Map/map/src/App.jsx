import React, { useEffect, useRef,useState } from 'react'

function App(){

  const mapRef= useRef(null);
  const[map,setMap]=useState(null);
  const[searchInput,setSearchInput]=useState('');
  const[searchMarker,setSearchMarker]=useState(null);

  useEffect(() =>{
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      const newMap=new window.google.maps.Map(mapRef.current, {
        center:{lat:0,lng:0},
        zoom:5
      });
      setMap(newMap);
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation= {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            newMap.setCenter(userLocation);
            const marker=new window.google.maps.Marker({
              position:userLocation,
              map:newMap,
              title:'Your Location'
            });
            setSearchMarker(marker);
          },
          (error)=>{
            console.error('Error ',error);
          }
          
        );
      }else{
        console.error('Geolocation not supported');
      }
    })
    },[])
  const handleSearchInputChange=(event)=>{
    setSearchInput(event.target.value);
  }

  const handleSearch=() =>{
     const geocoder=new window.google.maps.Geocoder();
     geocoder.geocode({address:searchInput},(results,status)=>{
        if(status === 'OK' && results && results.length){
          const{geometry} = results[0];
          if(geometry){
            const{loaction} = geometry;
            map.setCenter(location);
            if(searchMarker){
              searchMarker.setMap(null);
            }
            const marker = new window.google.maps.Marker({
              position:location,
              map:map,
            });
            setSearchMarker(marker);
          }
        }else{
          console.error('Error ',status);
          alert('Location not found')
        }
     })
  }
    
 return(
  <div>
    
    <input type="text"
     value={searchInput}
     onChange={handleSearchInputChange}
    >


    </input>
    <button onClick={handleSearch}>Search</button>
    <div
    style={{width:'100%' , height:'400px'}}
    ref={mapRef}
    >

    </div>
    </div>
    
 )
}
export default App