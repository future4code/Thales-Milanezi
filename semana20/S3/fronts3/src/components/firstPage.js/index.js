import React, { useState } from 'react'
import axios from 'axios'

function FullStack(){
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState(undefined);

  const handleFile = async (event) => {
    try {
      setLink(undefined);
      setIsLoading(true);
      const data = new FormData();
      data.append("file", event.target.files[0]);
      const res = await axios.put("http://localhost:3001/files/upload", data);
      setLink(res.data.link);
      setIsLoading(false);
      console.log(res);
    } catch (err) {
      setIsLoading(false);
    }
  };
  return(
    <div>
    <input type="file" onChange={handleFile} />
    {isLoading && (
      <div>
        <p>Carregando...</p>
      </div>
    )}
    {link && (
      <div>
        <p> O seu arquivo se encontra nesse link: {link}</p>
      </div>
    )}
  </div>
  )
}

export default FullStack