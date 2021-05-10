import React, {useState,useCallback,useEffect} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import CloseIcon from '@material-ui/icons/Close';
import styless from '../../styles/BlockContent4.module.css'
function App({url,online}) {
	const [zoom,setZoom] = useState(true)
  const screen1 = useFullScreenHandle();
  const Openzoom =()=>{
	screen1.enter()

  }

  const Exitzoom =()=>{

	screen1.exit()


  }

  const reportChange = useCallback((state, handle) => {
      
	setZoom(!zoom)

	
  }, [screen1]);

 
  return (
    <div>
      
	  <img onClick={Openzoom} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src={url}></img>

      <div style={zoom?{display:'block'}:{display:'none'}}>
	  <FullScreen handle={screen1} onChange={reportChange}>
	  
		<div>
		<div onClick={Exitzoom} className={styless.close}>
            <CloseIcon></CloseIcon>
          </div>
		<img className={styless.imageFull} src={url}></img>
		</div>
		
      </FullScreen>
	  </div>

    </div>
  );
}

export default App;