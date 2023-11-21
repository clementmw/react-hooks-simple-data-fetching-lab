// create your App component here
import React, { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [data , getData] = useState(null)

    useEffect (()=> {
        
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then (response => response.json())
        .then (data =>getData(data))

    }, []);
    console.log(data)

  return (
    <>
        {data ? (
        <img src={data.message} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
        
    </>
  )
}

export default App