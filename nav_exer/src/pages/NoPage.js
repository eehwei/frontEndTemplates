import Header from '../components/Header'
import {useNavigate} from 'react-router-dom';


export default function NoPage(){
    const xx=useNavigate();
    return(
        <>
        <Header/>
        <h2>error 404:not found</h2>

         {/* Button for navigation */}
         <button onClick={() => xx('/about')} >
          Go to About Page
        </button>
         <button onClick={() => xx('/home')} >
          Go to Home Page
        </button>
         <button onClick={() => xx('/contact')} >
          Go to contact Page
        </button>
        </>
    )
}