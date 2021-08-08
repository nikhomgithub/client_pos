import React from 'react';
import {MdRadioButtonChecked,MdRadioButtonUnchecked} from 'react-icons/md';
//=================================
function LineForm(props) {

const {i,idx,objKeys,tableTemplate,showTable,
       updateFilterData
}=props

console.log('LineForm')
//console.log(i)
let [inputState,setInputState]=React.useState({...i})

React.useEffect(()=>{
   setInputState(i)
},[i])

const renderRadio=(idx,inputState_j)=>{
    //return <input type="radio"/>
    
    if(inputState_j){
        return <MdRadioButtonChecked className="sm-icon"
            onClick={e=>{
                setInputState({...inputState,selectedLine:false})
                updateFilterData(idx,{...inputState,selectedLine:false})
            }}
        />
    }
    else{
        return <MdRadioButtonUnchecked className="sm-icon"
            onClick={e=>{
                setInputState({...inputState,selectedLine:true})
                updateFilterData(idx,{...inputState,selectedLine:true})
            }}
        />
    }
}

//==========================
return(
<div 
    className="TableGrid-body" 
    style={{display:"grid",
        gridTemplateColumns:showTable.gridCol,
        gridAutoRows:"minmax(2rem,auto)"
    }}
   
>    
  
    {objKeys.map((j,index2)=>
            tableTemplate[j].showCol
            ?<div 
                key={index2}
                style={{
                    textAlign:"left",
                    width:`${tableTemplate[j].width}px`,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                onClick={e=>{
                    /*
                    if(tableTemplate[j].type=="radio"){
                        setInputState({...inputState,[j]:!inputState[j]})
                    }
                    */
                }}
            >

                {
                tableTemplate[j].type=="radio"
                ?renderRadio(idx,inputState[j])
                :<input value={inputState[j]} 
                       checked={inputState[j]}
                       style={j=="selectedLine"?{height:"50%"}:{height:"100%"}} 
                       
                       type={tableTemplate[j].type}
                       onChange={e=>{
                            if(tableTemplate[j].type!="radio"){
                                //console.log('aaaa')
                                let myvalue=e.target.value
                                if(tableTemplate[j].type=="number"){
                                    myvalue=parseFloat(e.target.value)
                                }

                                const temp={...inputState,[j]:myvalue}
                                setInputState(temp)
                            }
                       }}
                       onBlur={e=>{
                           updateFilterData(idx,inputState)
                       }}
                />
                }

            </div>
            :null
    )}

</div>

)
}
export default LineForm;

