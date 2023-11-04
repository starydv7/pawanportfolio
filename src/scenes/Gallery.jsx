import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Define the number of image placeholders you want to display (in this case, 100)
    const numberOfPlaceholders = 100;

    // Fetch random image placeholders from the "Lorem Picsum" API
    axios.get(`https://picsum.photos/v2/list?page=1&limit=${numberOfPlaceholders}`)
      .then((response) => {
        // Extract image URLs from the response
        const randomImageUrls = response.data.map(item => item.download_url);
        setImageUrls(randomImageUrls);
      })
      .catch((error) => {
        console.error('Error fetching image placeholders:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={imageUrl} alt={`Image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
