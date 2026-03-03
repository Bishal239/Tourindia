import Letsgo from "./Letsgo"
import { useState } from "react"
import Thingtodo from "./Thingtodo";
import Planetrip from "./Planetrip";


const Header=()=>{
  const [click, setclick] = useState(false);
  const click1=()=>{ {
  setclick(!click);
    setclickonplace(false)
     setclickonplace(false)
}
  console.log(click)

}
 const [clickonplace, setclickonplace] = useState(false);
  const clickplace=()=>{ {
   setclickonplace(!clickonplace);
    setclick(false)
      setclickonplane(false)
}
  console.log(clickonplace)
}
 const [clickonplane, setclickonplane] = useState(false);
  const clickplane=()=>{ {
       setclickonplane(!clickonplane);
    setclick(false)
      setclickonplace(false)
}
 console.log(clickonplane)
  
}
 
    return (<>
     
   <header className='Header' >
       
   
    <a className="Headb" href="#"   onClick={click1}  >
			Place to go
		</a>
    <a className="Headb"  href="#" onClick={clickplace}  >
			Thing to do
		</a>
    <a className="Headb"  href="#" onClick={clickplane}>
			 plan your tour
		</a>
  </header>
   {click=== true  ?<Letsgo/>:null }
   {clickonplace===  true  ?<Thingtodo/>:null }
   {clickonplane=== true ?<Planetrip/>:null }
     
   </>
    )
}

export default Header