import axios from 'axios';
import { useQuery } from 'react-query';

const DadJokes = () => {
  const fetchJokes = () => {
    return axios.get('https://v2.jokeapi.dev/joke/Any');
  };

  const { data, isLoading, isError, error } = useQuery('dad-jokes', fetchJokes);

  return (
    <div>
      <h2>Dad Jokes</h2>
      <p>{data?.data.setup}</p>
    </div>
  );
};

export default DadJokes;
