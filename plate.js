const axios = require('axios');
const API_KEY = '8579a4168c00e09d615ff56c06ff73913c16708f'; //  Recognizer API
const IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZOyq_QjHE09MOnaAZbCVqZ1sWoFZxlp7oQ';  // plate image

const config = {
  headers: {
    Authorization: `Token ${API_KEY}`,
  },
};

axios
  .get(`https://api.platerecognizer.com/v1/plate-reader?image=${IMAGE_URL}`, config)
  .then((response) => {
    const plateData = response.data; // plate data
    if (plateData){
    console.log("plate found.");
    }
    else if (!plateData){
        console.log("plate not found.");
    }
  })
