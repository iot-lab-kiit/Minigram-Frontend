
import {Cards} from '../components/Cards';
import sidebar from '../components/sidebar.js';
import messages from '../components/messages.js';
export default function index()
{
  return(
    <div>
      <sidebar/>
      <Cards/>
      <messages/>
    </div>
  )
}

