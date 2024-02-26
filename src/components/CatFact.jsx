import axios from 'axios';
import { useQuery } from 'react-query';

const CatFact = () => {
  const fetchCatData = () => {
    return axios.get('https://catfact.ninja/fact');
  };

  const { isLoading, error, data, refetch } = useQuery(
    'cat-fact',
    fetchCatData,
    {
      refetchOnMount: false,
      refetchInterval: 10000,
    },
  );
  return (
    <div>
      <h1>Cat Fact</h1>
      <h3>About this component</h3>
      <ul>
        <li>01 - Fetches data from an API</li>
        <li>02 - Uses React Query to fetch data</li>
        <li>03 - Displays data in a list</li>
        <li>04 - Re-fetches data every 10 seconds</li>
        <li>05 - Handles errors</li>
        <li>06 - Refetches on button click</li>
      </ul>
      <button onClick={refetch}>Get Random Cat Fact</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <h2>{data.data.fact}</h2>}
    </div>
  );
};

export default CatFact;
