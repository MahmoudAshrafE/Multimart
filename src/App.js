import { useState } from "react";
import "./App.css";
import Layout from './components/Layout/Layout'





const  App= () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');

  if (spinner){
    setTimeout( () => {
      spinner.style.display = "none";
      setLoading(false);
    },3000)
  }
  return( 
    !loading && (<Layout />)
  )
}

export default App;
