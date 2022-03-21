import { useState, useEffect } from 'react';
import axios from 'axios';

const TRENDING_URL = "https://api.giphy.com/v1/gifs/trending?api_key=h0m5NBuQ8v6Bcz7GJuMtOjJ6mkqYzuG7"

function Trending() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    function fetchData() {}
    fetchData()
  }, []);

const fetchData = async () => {
  try {
    const response = await axios.get
    (TRENDING_URL);

    console.log(response);

    const results = response.data.data[0].images.downsized_large.url;
    console.log(results);
    setGif(results);
    console.log(gif);
  } catch (error) {
    console.log(error);
  }
};

return (
  <>
    <img src={gif} alt="stuff" />
    <button onClick={fetchData}>Trending</button>
  </>
 );
}

export default Trending;
