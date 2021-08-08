import React from 'react';
import {MdClose,MdCheck} from 'react-icons/md';


const renderWidthRangeBar=({showRange,setShowRange,widthLeft,setWidthLeft})=>{
/*
<div  style={{position:"absolute",bottom:"2rem",left:"0",
        width:`50%`,zIndex:"200"}}>
*/
return(
showRange  
?<div  style={{width:`100%`}}>
    
    <div className="flex-center-center jc-space-between">
        <div className="w-95">
            <input type="range" min="5" max="90"   
                style={{visibility:showRange?"visible":"hidden"}}
                value={widthLeft}
                onChange={e=>{setWidthLeft(e.target.value)}} 
            />
        </div>
        {false
        ?<div className="w-5"
             style={{display:"flex",justifyContent:"flex-end"}}
        >
           <MdClose className="sm-icon" 
                style={{backgroundColor:"rgba(255,255,255,0.5)"}}
                onClick={e=>{setShowRange(!showRange)}}/>
        </div>
        :null
        }
    </div>
</div> 
:<MdCheck className="sm-icon"
         style={{position:"absolute",top:"2.5rem",zIndex:"300",right:"0",
                backgroundColor:"rgba(255,255,255,0.5)"}}
          onClick={e=>{setShowRange(!showRange)}}/>
)
}

export default renderWidthRangeBar

