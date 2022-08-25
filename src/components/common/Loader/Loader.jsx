import { CirclesWithBar } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export const LoaderSpiner = () => {
  return (
    <Loader>
         <CirclesWithBar color='blue' />
    </Loader>
   
  );
};
