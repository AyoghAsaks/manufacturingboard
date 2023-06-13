import { useQuery } from 'react-query';
import { getLines } from '../services/lineApi';
import TableLayout from './TableLayout';

const Card4 = () => {

  /*-------------------------------BEGINNING OF LINES CODE--------------------------------------------*/

  //Destructure "getLines"
  const { isLoading, isError, error, data: lines } = useQuery("lines", getLines);

  let content 

  if(isLoading) {
    content = <p>Loading...</p>
  } else if (isError){
    content = <p>{error.message}</p>
  }else {
    //content = JSON.stringify(coins)
    content = lines
    
  }

  console.log(content)

  return (
    <>
        <TableLayout {...content[4]} />
    </>
  )
}

export default Card4;