import { useState, useEffect } from 'react';
import axios from 'axios';
import { RANDOM_URL } from '../services/constants';

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

    const results = response.data.data.images.donwsized_large.url;
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

export default Random;
