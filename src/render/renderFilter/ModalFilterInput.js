import React from 'react';
import {FaRegArrowAltCircleDown,FaRegArrowAltCircleUp,
    FaPlusSquare,FaMinusSquare
} from 'react-icons/fa';

import stateUtil from '../../util/stateUtil'
import axiosUtil from '../../util/axiosUtil'
import '../Modal.css'

const {changeKeyKey} = stateUtil

const {genSortFromSortState,genSortStateFromSort}=axiosUtil

const ModalFilterInput=({
    show,setShow,
    title,

    filterTemplate,
    inputState,setInputState,

    limitRow,setLimitRow,
    sort,setSort,
    filterAxios
})=>{

console.log('ModalFilterInput')

const [sortState,setSortState]=React.useState(genSortStateFromSort(sort))
const [tempInputState,setTempInputState]=React.useState(inputState)

React.useEffect(()=>{
    //console.log('sortState')
    //console.log(sortState)
    const temp=genSortFromSortState(sortState)
    setSort(temp)
},[sortState])
//========================    

const renderBetweenNumber=(i,templateIdx)=>{
    return(
    <div key={templateIdx} className={i.cName}
         style={{paddingTop:"0.2rem"}}
    >
        
        <div  className="flex-center-center flex-no-wrap">

            <div className={i.subCName[0]} 
                style={{display:"flex",justifyContent:"center",alignItems:"center"}}
            >
                <input
                    style={{height:"1.5rem"}}
                    type="checkbox"
                    checked={tempInputState[i.keyName].toCheck}
                    ref={i.refInput[0]}
                    onKeyDown={e=>{
                        if(e.key=="Enter"){
                            i.refInput[1].current.focus()
                        }
                    }}
                    onChange={e=>{
                        changeKeyKey({
                            key:i.keyName,
                            subKey:"toCheck",
                            value:e.target.checked,
                            inputState:tempInputState,
                            setInputState:setTempInputState
                        })
                        i.refInput[1].current.focus()
                    }}
                />
            </div>

            <div className={i.subCName[1]}
                style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
            >
                <p className="label"
                    style={{margin:"auto 0"}}
                >{i.lb}</p>
            </div>

            <div className={i.subCName[2]}>
                <div className="xc12 flex-center-baseline" 
                     //style={{marginTop:"-0.8rem"}}
                >

                    <div className="xc6" style={{paddingLeft:"0.2rem"}}>
                        <input
                        style={{width:"100%"}}
                        type={i.inputType}
                        value={tempInputState[i.keyName].min}
                        ref={i.refInput[1]}
                        onKeyDown={e=>{
                            if(e.key=="Enter"){
                                i.refInput[2].current.focus()
                            }
                        }}
                        onChange={e=>{changeKeyKey({
                            key:i.keyName,
                            subKey:"min",
                            value:(e.target.type=="number")
                            ?e.target.value?parseFloat(e.target.value):0
                            :e.target.value,
                            inputState:tempInputState,
                            setInputState:setTempInputState
                        })}}  
                        />
                    </div>
                    {/*
                    <div className="xc1"
                            style={{textAlign:"center"}}
                    >
                        <p>-</p>
                    </div>
                    */}   
                    <div className="xc6" style={{paddingLeft:"0.2rem"}}>    
                        <input
                        style={{width:"100%"}}
                        type={i.inputType}
                        value={tempInputState[i.keyName].max}
                        ref={i.refInput[2]}
                        onKeyDown={e=>{
                         if(e.key=="Enter"){
                          if(filterTemplate.length-1!=templateIdx){
                           filterTemplate[templateIdx+1].refInput[0].current.focus()
                          }
                         } 
                        }} 
                        onChange={e=>{changeKeyKey({
                            key:i.keyName,
                            subKey:"max",
                            value:(e.target.type=="number")
                                ?e.target.value?parseFloat(e.target.value):0
                                :e.target.value,
                                inputState:tempInputState,
                                setInputState:setTempInputState
                        })}}
                        />  
                    </div>
                </div>
                    
            </div>
        </div>
     </div>
    )
}
//=================================
//=================================
const renderBoolean=(i,templateIdx)=>{
    return(
        <div key={templateIdx} className={i.cName} 
             style={{height:"100%",width:"100%",paddingTop:"0.2rem"}}
        >
            
            <div  className="flex-center-center flex-no-wrap">
    
                <div className={i.subCName[0]} 
                     style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    <input
                        style={{height:"1.5rem"}}
                        type="checkbox"
                        checked={tempInputState[i.keyName].toCheck}
                        ref={i.refInput[0]}
                        onKeyDown={e=>{
                            if(e.key=="Enter"){
                                i.refInput[1].current.focus()
                            }
                        }}
                        onChange={e=>{
                            changeKeyKey({
                                key:i.keyName,
                                subKey:"toCheck",
                                value:e.target.checked,
                                inputState:tempInputState,
                                setInputState:setTempInputState
                            })
                            i.refInput[1].current.focus()
                        }}
                    />
                </div>
    
    
                <div className={i.subCName[1]}
                      style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
                >
                    <p className="label"
                       style={{margin:"auto 0"}}
                    >{i.lb}</p>
                </div>
    
                <div className={`${i.subCName[2]}`}
                     style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    <input
                    style={{height:"1.5rem"}}
                    type={i.inputType}
                    checked={tempInputState[i.keyName].value}
                    ref={i.refInput[1]}
                    onKeyDown={e=>{
                        if(e.key=="Enter"){
                            if(filterTemplate.length-1!=templateIdx){
                                filterTemplate[templateIdx+1].refInput[0].current.focus()
                            }
                        }
                    }}
                    onChange={e=>{changeKeyKey({
                        key:i.keyName,
                        subKey:"value",
                        value:e.target.checked,
                        inputState:tempInputState,
                        setInputState:setTempInputState
                    })}}
                    />
                </div>
            </div>
        </div>
    )
}
//========================
//========================
const renderString=(i,templateIdx)=>{

    return(
        <div key={templateIdx} className={i.cName}
             style={{paddingTop:"0.2rem"}}
        >
            
            <div  className="flex-center-center flex-no-wrap">
    
                <div className={i.subCName[0]} 
                     style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    <input
                        style={{height:"1.5rem"}}
                        type="checkbox"
                        checked={tempInputState[i.keyName].toCheck}
                        ref={i.refInput[0]}
                        onKeyDown={e=>{
                            if(e.key=="Enter"){
                                i.refInput[1].current.focus()
                            }
                        }}
                        onChange={e=>{
                            console.log(tempInputState)
                            console.log(e.target.checked)
                            changeKeyKey({
                                key:i.keyName,
                                subKey:"toCheck",
                                value:e.target.checked,
                                inputState:tempInputState,
                                setInputState:setTempInputState
                            })
                            i.refInput[1].current.focus()
                        }}
                    />
                </div>

              <div className={i.subCName[1]}
                style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
              >
                <p className="label"
                    style={{margin:"auto 0"}}
                >{i.lb}</p>
              </div>           
    
              <div className={`${i.subCName[2]}`}
                   style={{paddingLeft:"0.25rem"}}
              >
                <input
                 type={i.inputType}
                 value={tempInputState[i.keyName].value}
                 ref={i.refInput[1]}
                 onKeyDown={e=>{
                  if(e.key=="Enter"){
                    if(filterTemplate.length-1!=templateIdx){
                     filterTemplate[templateIdx+1].refInput[0].current.focus()
                    }
                  }
                 }}
                 onChange={e=>{changeKeyKey({
                    key:i.keyName,
                    subKey:"value",
                    value:e.target.value.replace(/\s{2}$/,' '),
                    inputState:tempInputState,
                    setInputState:setTempInputState
                })}}
                />
              </div>
            </div>
        </div>
    )
}

//====================================

//<div style={{width:"100%",height:"100%"}}>     
const renderFilterBody=()=>{
return(
    filterTemplate.map((i,templateIdx)=>{
        //we change from switch case to if instead to prevent error
        if( (i.templateType =="number")||
            (i.templateType=="arrayNumber")||
            (i.templateType=="objectNumber")||
            (i.templateType=="arrayObjectNumber")||
            (i.templateType=="arrayObjectArrayNumber") ){
                return renderBetweenNumber(i,templateIdx)
            }
        else if( (i.templateType =="boolean")||
            (i.templateType=="arrayBoolean")||
            (i.templateType=="objectBoolean")||
            (i.templateType=="arrayObjectBoolean")||
            (i.templateType=="arrayObjectArrayBoolean") ){
                return renderBoolean(i,templateIdx)
            }
        else{
            return renderString(i,templateIdx)
        }
    })
    )
}

//=====================================

const renderSortBody=()=>{
    const arraySortStateKey=Object.keys(sortState)
    //["order1","order2","order3"]
    //=====================
    let tempFilterTemplate=[]
    
    filterTemplate.map((i)=>{
        //we change from switch case to if instead to prevent error
        if((i.templateType=="string")||
           (i.templateType=="number")||
           (i.templateType=="date")){
            tempFilterTemplate=[...tempFilterTemplate,i]
        }
    })
  
return(
<div className="w-100">
    {
        arraySortStateKey.map((i,index)=>{
            return(
            <div key={index} className={filterTemplate[0].cName} >
                <div  className="flex-center-center">
                    
                    <div className={filterTemplate[0].subCName[0]}
                        style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
                    >
                        {sortState[i].toAscending==1
                          ?<FaRegArrowAltCircleDown className="md-icon"
                                onClick={e=>{
                                    const tempOrder=sortState[i]
                                    tempOrder.toAscending=-1
                                    setSortState({
                                        ...sortState,
                                        [i]:tempOrder})
                                }}
                            />
                          :<FaRegArrowAltCircleUp className="md-icon"
                                onClick={e=>{
                                    const tempOrder=sortState[i]
                                    tempOrder.toAscending=1
                                    setSortState({
                                        ...sortState,
                                        [i]:tempOrder})
                                }}
                          />
                        }
                    </div>
                
                    <div className={filterTemplate[0].subCName[1]} 
                        style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
                    >
                        <p
                        style={{margin:"auto 0"}}
                        >{`No ${index+1}`}</p>
                    </div>
                    <div className={filterTemplate[0].subCName[2]} >
                        <select type="select" 
                                className="w-100"
                                value={sortState[i].sortName
                                        ?sortState[i].sortName
                                        :""}
                                onChange={e=>{
                     
                                    const tempOrder=sortState[i]
                                    tempOrder.sortName=e.target.value
                                    setSortState({
                                        ...sortState,
                                        [i]:tempOrder
                                    })
                                
                                    setSort({
                                        ...sortState,
                                        [i]:tempOrder
                                    })        
                                }}
                                

                        >  
                         <option value="" hidden>list...</option>
                         {    //we use keyName for filterTemplate, 
                                //but make sure to use only main Field 
                            tempFilterTemplate.map((k,index)=>{
                            return(
                            <option key={index} value={k.keyName}>{k.lb}</option>
                            )
                            })
                         }
                        </select>
                    </div>
                </div>
            </div>
            )
        })
    }
</div>
)    
}
//====================================
const renderLimitRow=()=>{
return(
        <div className="pt-2">
            <h5>กำหนดจำนวนรายการต่อหน้า</h5> 
            <div className="flex-center-center flex-no-wrap" >
                <div className="flex-center-center lc6">
                    <p>จำนวนรายการต่อหน้า</p>
                </div>
                <div className="flex-center-center lc6">
                    <div className="flex-center-center flex-no-wrap">
                        <FaMinusSquare className="md-icon mr-2 mb-3"
                            onClick={e=>{
                                if(limitRow>1){
                                    const temp=limitRow-1
                                    setLimitRow(temp)
                                }
                            }}
                        />
                        <p>{`${limitRow}`}</p>
                        <FaPlusSquare className="md-icon ml-2 mb-3"
                            onClick={e=>{
                                if(limitRow<50){
                                    const temp=limitRow+1
                                    setLimitRow(temp)
                                }
                            }}
                        />
                    </div>   
                </div>
            </div>
        </div>
)
}

/*
 <div className="Modal-background">
        <div className="Modal-box" style={{minWidth:"70%"}}>

*/
//====================================
return (
    <div>
        <div>
            <div className="flex-center-center h-100">
                <h4>{title}</h4>
            </div>

            <div className="flex-center-center jc-start h-100">
                <h5>หัวข้อ</h5>
            </div>

            <div className="flex-center-center jc-start h-100">
            { renderFilterBody() }
            </div>

            <div className="flex-center-center pt-2">
                <div className="w-45">
                    <button className="w-100" style={{margin:"0"}}
                        onClick={e=>{
                            //console.log(tempInputState)
                            filterAxios("and",tempInputState)
                            //setFilterOption(1)
                            //setPageNumber(1)
                            //setReload(true)
                            //setShow(false)
                        }}
                    >
                        ทุกหัวข้อจริง
                    </button>
                </div>
                <div className="w-45">
                    <button className="w-100"  style={{margin:"0"}}
                        onClick={e=>{
                            //console.log(tempInputState)
                            filterAxios("or",tempInputState)
                            //setFilterOption(2)
                            //setPageNumber(1)
                            //setReload(true)
                            //setShow(false)
                        }}
                    >
                        บางหัวข้อจริง
                    </button>
                </div>

                {/*
                <div className="w-30">
                    <button className="w-100"
                        onClick={e=>{
                            setShow(false)
                        }}
                    >
                        Cancel
                    </button>
                </div>
                */
                }
            </div> 

            <div className="pt-2">
                <h5>เรียงตามหัวข้อ</h5>
            </div>
            { sortState?renderSortBody():null }
            { renderLimitRow()}
        </div>
    </div>
)
}

ModalFilterInput.defaultProps={
    title:"Filter Form",
    show:null, 
    setShow:()=>{},
    filterTemplate:{},
    inputState:null, 
    setInputState:()=>{},
    limitRow:10,
    setLimitRow:()=>{},
    sort:null ,
    setSort:()=>{},
    setPageNumber:()=>{}, 
    setFilterOption:()=>{},
    setReload:()=>{},
    filterAxios:()=>{}
}
export default ModalFilterInput