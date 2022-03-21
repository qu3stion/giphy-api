import { useState, useEffect } from 'react';
import axios from 'axios';

 const RANDOM_URL = "https://api.giphy.com/v1/gifs/random?api_key=h0m5NBuQ8v6Bcz7GJuMtOjJ6mkqYzuG7"

function Random() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    function fetchData() {}
    fetchData()
  }, []);

const fetchData = async () => {
  try {
    const response = await axios.get
    (RANDOM_URL);

    console.log(response);

    const results = response.data.data.images.downsized_large;
    console.log(results);
    setGif(results);
    console.log(gif);
  } catch (error) {
    console.log(error);
  }
};

return (
  <div>
    <img src={gif.url} alt="stuff" />
    <button onClick={fetchData}>Random</button>
  </div>
 );
}

export default Random;
