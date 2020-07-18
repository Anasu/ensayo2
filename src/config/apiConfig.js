import axios from 'axios';

export async function apiCall(parameters) 
{
  let api = 'https://rickandmortyapi.com/api/';
  try 
  {
    const res = await axios.get(
      `${api}${parameters}`);
    return res
  } 
  catch (error) 
  {
    console.log(error);
  }
}