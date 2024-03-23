import { useState, useEffect } from 'react';
import axios from 'axios';
let NumberOfComp = 0;

export default function useFetchCompliment() {
  const [compliment, setCompliment] = useState('');

  useEffect(() => {
    if (NumberOfComp==0) { 
        NumberOfComp+=1;
      const fetchCompliment = async () => {
          const response = await axios.get('https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments');

          setCompliment(response.data);

      };

      fetchCompliment();
    }
  }, []);

  return compliment;
}
