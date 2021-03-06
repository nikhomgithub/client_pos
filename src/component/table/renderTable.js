
import React from 'react'
import showUtil from '../../util/showUtil'
import tableUtil from './tableUtil'
import Galleryone from '../galleryone/Galleryone'

import LineForm from './LineForm'
import {MdClose,MdArrowUpward,MdArrowDownward,
       MdSettings,MdSave,MdRadioButtonChecked,MdRadioButtonUnchecked
} from 'react-icons/md';

import './Table.css'

const {showArray,showObject} = showUtil
const {sortColumn} = tableUtil

const renderTable=({
  colorHead,
  tableTemplate,setTableTemplate,
  filterData,setFilterData,
  editData,setEditData,
  showTable,
  isSubTable,
  sumAmount,
  setShowTableSetting,
  saveTableTemplateFunc,
  updateFilterData,
  useInput
})=>{

  //console.log('renderTable')
  //console.log(tableTemplate)
  //updateFilterData()
  
  const calSumValue=({value,key})=>{
    if(showTable.showSum){
      //console.log(key)
      //console.log(value)
    }
  }

  const numberWithCommas=(x)=>{

    //const temp=x.toString().split(".")
    //console.log(temp)
    if(x){
      const temp=x.toString().split(".")
      const beforeDot=temp[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

      if(temp.length>1){
        return `${beforeDot}.${temp[1]}`
      }
      else{
        return beforeDot
      }
    }
    else if(x===0){
      return 0
    }
  }

  const showContent=(i,j,type,width,children,index1)=>{
    //console.log(children)
    /*
    {showContent(
      i, each line of filterData
      j, each of Object Key
      tableTemplate[j].type,tableTemplate[j].width,
      tableTemplate[j].children)}
    */
    let showColor="black"
    
    if(editData){
      if(i._id==editData._id){
        showColor="red"
      }  
    }

    if(j=="selectedLine"){
      return  i.selectedLine
              ?<div className="w-100 h-100" 
              >
                <MdRadioButtonChecked className="sm-icon"
                  style={{margin:"5px auto",width:"100%"}}
                  onClick={e=>{
                    //console.log('onClick')
                    //console.log(i)
                    updateFilterData(index1,{...i,selectedLine:false})
                  }}
                />
                </div>
              :<div className="w-100 h-100"
              >
              <MdRadioButtonUnchecked className="sm-icon"
                style={{margin:"5px auto",width:"100%"}}
                onClick={e=>{
                  //console.log('onClick')
                    //console.log(i)
                  updateFilterData(index1,{...i,selectedLine:true})
                }}
              />
              </div>
    }
    else if(type=="array"){
      return <p style={{color:showColor,margin:"0.5rem 0"}}>
        {showArray(i[j])}</p>
    }
    else if(type=="arrayObject"){
      return( i[j].map((k,idx)=>{
        return (
        <p style={{color:showColor,margin:"0.5rem 0"}} key={idx}>
          {showObject(k,children)}</p>
        )}
      ))

    }else if(type=="arrayPhoto"){
      
      return(  
        <Galleryone imgarrs={i[j]} width={width}/>
      )
    }
    else if(type=="boolean"){
      return  <p style={{color:showColor,margin:"0.5rem 0"}} >
                {i[j]?`????????????`:`????????????`}</p>
    }
    else if(type=="date"){
      return  <p style={{color:showColor,margin:"0.5rem 0"}} >
        {i[j]
        ?`${i[j].substring(8,10)}-${i[j].substring(5,7)}-${i[j].substring(0,4)}`
        :null
        }</p>
    }
    else if(type=="number"){
      return <p style={{color:showColor,margin:"0.5rem 0"}}>
              {numberWithCommas(i[j])}</p>
    }
    else if(type=="object"){
      return null
    }
    else{
      return <p style={{color:showColor,margin:"0.5rem 0"}}>{i[j]}</p>
    }
  }

  const handleChange=(i,value)=>{
      let temp=tableTemplate[i]
      temp={...temp,width:value}
      setTableTemplate({...tableTemplate,[i]:temp}) 
  }

  const renderToolBarForColumn=(i)=>{
    return(
      <div className="flex-center-center flex-no-wrap"
      style={{
          width:"400px",
          height:"50px",
          backgroundColor:"#4b6d62",
          borderRadius:"15px",
          boxShadow:"5px 5px 10px",
          position:"absolute",
          top:`100px`,
          left:`1px`,
          zIndex:"600"
      }}    
  >  
    <input 
      className="xc8"
      type="range" min="10" max="1000" 
      value={tableTemplate[i].width}
      onChange={e=>{
          handleChange(i,e.target.value)}} 
    />
    <MdSettings
        className="md-icon"
        onClick={e=>{
          if(setShowTableSetting){
            setShowTableSetting(true)
          }
        }}
    />
    <MdSave
        className="md-icon"
        onClick={e=>{
          saveTableTemplateFunc(tableTemplate)
        }}
    />
 
    {isSubTable
    ?null
    :<MdArrowDownward 
      className="md-icon"
      onClick={e=>{
        const temp=
          sortColumn(filterData,i,tableTemplate[i].type,"a-b")
        if(Array.isArray(temp)){
          setFilterData(temp)
        }                              
      }}
    />
    }
    {isSubTable
    ?null
    :<MdArrowUpward 
      className="md-icon"
      onClick={e=>{
        const temp=
          sortColumn(filterData,i,tableTemplate[i].type,"b-a")
        if(Array.isArray(temp)){
          setFilterData(temp)
        }                              
      }}
    />
    }
    <MdClose 
      className="md-icon"
      onClick={e=>{
        let temp=tableTemplate[i]
        let tempBool=tableTemplate[i].showColHead
        temp={...temp,showColHead:!tempBool}
        setTableTemplate({...tableTemplate,[i]:temp})

      }}
    />
  </div>
    )
  }

  //-------------------------------
  const objKeys = Object.keys(tableTemplate);
  return(
  //Frame
  <div className="w-100 h-100 overflow-hide-on-print"
       style={{padding:"0 0 2rem 0"}}
  >

    {/*Track*/}
    <div style={{width:`${showTable.width}px`}}>   
  
    {/*Table Head*/}
    <div className="TableGrid-head" 
        style={{display:"grid",
                 gridTemplateColumns:showTable.gridCol,
                 gridAutoRows:"minmax(2.7rem,auto)",
                 position:'sticky',top:'0',
                 backgroundColor:colorHead
              }}> 
      { objKeys.map((i,index)=>{
          
        return(
          tableTemplate[i].showCol
          ?<div 
              key={index}
              style={{
                  width:`${tableTemplate[i].width}px`,
                  padding:"0.3rem",
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-around',
              }}   
          >   
          { 
            tableTemplate[i].showColHead  
            ?<p
                onClick={e=>{
                  
                  let temp=tableTemplate[i]
                  let tempBool=tableTemplate[i].showColHead
                  temp={...temp,showColHead:!tempBool}
                  setTableTemplate({...tableTemplate,[i]:temp})
                  
                }}
              >{tableTemplate[i].lb}</p>
            :
              <div className="flex-center-center flex-no-wrap">
                <MdClose className="md-icon"
                  onClick={e=>{
                    
                    let temp=tableTemplate[i]
                    let tempBool=tableTemplate[i].showColHead
                    temp={...temp,showColHead:!tempBool}
                    setTableTemplate({...tableTemplate,[i]:temp})
                    
                  }}
                className="md-icon"/>
                  {
                    renderToolBarForColumn(i)
                  }
              
              </div>                   
            }
          </div>
          :null
        )
      })}
    </div>
  
    {/*Table Body*/} 
    {filterData.map((i,index1)=> {
      let passCheck=false
      if( (editData)&&(useInput) ){
        if(editData._id==i._id){
          passCheck=true
        }
      }
            
      if(passCheck){
        return (
          <LineForm
            i={i}
            key={index1}
            idx={index1}
            objKeys={objKeys}
            tableTemplate={tableTemplate}
            showTable={showTable}
            updateFilterData={updateFilterData}
          />
        )
      }
      else {
        return(
            <div  key={index1} 
                className="TableGrid-body" 
                style={{display:"grid",
                    gridTemplateColumns:showTable.gridCol,
                    gridAutoRows:"minmax(1.7rem,auto)"
                }}
                
            >    
              {objKeys.map((j,index2)=>
                  tableTemplate[j].showCol
                  ?<div 
                      key={index2}
                      style={{
                          textAlign:"left",
                          width:`${tableTemplate[j].width}px`,
                      }}

                      onClick={e=>{
                        //setEditData(null)
                        if(tableTemplate[j].type!="radio"){
                          setEditData(i)
                        }
                    }}
                  >
                  {showContent(i,j,
                    tableTemplate[j].type,
                    tableTemplate[j].width,
                    tableTemplate[j].children,
                    index1
                    )}
                  </div>
                  :null
              )}
            </div>
        )
      }
    })}
  
    {/*Table Footer*/}
    {
      sumAmount
      ? <div 
            className="TableGrid-body" 
            style={{display:"grid",
                gridTemplateColumns:showTable.gridCol,
                gridAutoRows:"minmax(2.7rem,auto)",
                backgroundColor:"#2184A0"
            }}

        >    
          {objKeys.map((k,index3)=>
              tableTemplate[k].showCol
              ?<div 
                  key={index3}
                  style={{
                      textAlign:"left",
                      width:`${tableTemplate[k].width}px`,
                  }}
              >
                <p>{numberWithCommas(sumAmount[k])}</p>
              </div>
              :null
          )}
      </div>
      :null
    }            
    </div>
  </div>
  
  )
}
export default renderTable



