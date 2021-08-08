import React from 'react';
import StateUtil from '../../model/StateUtil'
import renderForm from './renderForm'
import Galleryone_add from '../../component/galleryone_add/Galleryone_add'
import photoUtil from '../../component/galleryone_add/photoUtil'
import formUtil from './formUtil'
import tableUtil from '../../component/table/tableUtil'
import uuid from 'react-uuid'

import axiosUtil from '../../util/axiosUtil'
import '../Modal.css'
import { LiveTv, LiveTvOutlined, LocalConvenienceStoreOutlined } from '@material-ui/icons';

function PageForm({
    lb,
    formTemplate,
    stateTemplate,
    
    selectData,

    iconAction,
    iconActionData,
    iconActionDataDetail,
    loadData,
    myFilterData,
    keyName,
    setShow,

    calculation,
    detailTableTemplateForForm,

    submitFunction,
    saveDetailTableTemplateForFormFunc

    //submitCancel
}) {
    console.log('PageForm')
    const {genBlankState,genRefAndValue,revRefAndValue,combineLoadDataBlankState}=StateUtil  
    const {submitFunc}=axiosUtil  
    const {changeArrayFile}=photoUtil
    const {convertFormTemplateToTableTemplate}=formUtil
    const {tableResize}=tableUtil

    const [isSecond,setIsSecond]=React.useState(false)

    React.useEffect(()=>{
        //console.log(`isSecond : ${isSecond}`)
        if(!isSecond){
            setIsSecond(true)
        }
    },[isSecond])
    
      
    const [hidePassword,setHidePassword]=React.useState(true)
    const [calculate,setCalculate]=React.useState(true)

    const refSubmitForm=React.createRef() //ตกลง
    const refCancelForm=React.createRef() //ยกเลิก     
    //const refClearForm=React.createRef() //ล้างข้อมูล     

    const blankData=genBlankState({template:stateTemplate}).state
    const refAndValueBlankData = genRefAndValue({template:formTemplate,FData:blankData})

    //we need to combin blankData with load Data to make sure null or Nan filed not exist
    const genFormInputState =() =>{
        /*
        if(isAddForm){

            if(genAutoId){
                return {...blankData,id:lastRecordId+1}
            }
            else{
                return blankData
            }
        }
        */
        if(loadData){
            //we create combineLoadDataBlankState function
            //to make sure that every filed is valid at least ""
            //because in mongoDB if model type = number, it we send "" it will be save as null
            //when we receive data back it will be just like customerId=null
            //so this function will make customerId="" again


            let temp=combineLoadDataBlankState({template:stateTemplate,loadData})

            if(temp){
                if(temp.detail){
                    let tempArray=[]
                    temp.detail.map(i=>{
                        const tempObj={...i,selectedLine:false}
                        tempArray=[...tempArray,tempObj]
                    })
                    temp={...temp,detail:tempArray}
                }
            }

            
            
            return temp
        }
        else{
            let temp=blankData

            if(temp.detail){
                let tempArray=[]
                temp.detail.map(i=>{
                    const tempObj={...i,selectedLine:false}
                    tempArray=[...tempArray,tempObj]
                })
                temp={...temp,detail:tempArray}
            }

            return temp
        }
    }
    


    let [formInputState,setFormInputState]=React.useState(genFormInputState())
    let [sumAmount,setSumAmount]=React.useState(null)

    
    React.useEffect(()=>{
    if(isSecond){
        //console.log('useEffect iconActionData')
        if(iconActionData){
            setFormInputState({...formInputState,...iconActionData})
        }
    }
    },[iconActionData])
    

    //we use iconActionDataDetail to add product in detail
    React.useEffect(()=>{
    if(isSecond){
        //console.log('useEffect iconActionDataDetail')

        if(iconActionDataDetail&&selectRow){
            if(iconActionDataDetail.id>0){

                let temp=[]
                formInputState.detail.map((i,index)=>{
                    if(selectRow.index==index){
                       const tempLine={...i,...iconActionDataDetail}
                       temp=[...temp,tempLine] 
                    }
                    else{
                        temp=[...temp,i]
                    }
                })

                setFormInputState({...formInputState,["detail"]:temp})
            }
        }
        
    }
    },[iconActionDataDetail])


    //we need refAndValue for jump from input to input
    let [refAndValue,setRefAndValue]=React.useState(
        genRefAndValue({template:formTemplate,FData:formInputState})
    )
    

    //we monitor formInputState 
    //to update field such as sum total result
    //when formInputState change we need to update refAndValue everytime
    React.useEffect(()=>{

    if(isSecond){
        //console.log('useEffect formInputState')
        
        let passCheck=false
        
        if(formInputState){
            if(formInputState.detail){
                passCheck=true
            }
        }

        if(tableTemplate){
           passCheck=true
        }

        if(passCheck){

            /*
            const objKeys=Object.keys(tableTemplate)
            let newSum={}
            let showSum=false

            objKeys.map(h=>{
                if(tableTemplate[h]){
                    if(tableTemplate[h].showSum){
                        newSum={...newSum,[h]:0}
                        showSum=true
                    }
                }
            })


            formInputState.detail.map((i,idx)=>{

                objKeys.map(j=>{
                    if(tableTemplate[j]){
                        
                        if(tableTemplate[j].showSum){
                            const updateSum=newSum[j]+parseInt(i[j]*10000)

                            if(idx==formInputState.detail.length-1){
                                newSum={...newSum,[j]:updateSum/10000}
                            }
                            else{
                                newSum={...newSum,[j]:updateSum}

                            }
                        }
                    }
                })
            })

            //console.log('newSum')
            //console.log(newSum)


            if(showSum){

                setSumAmount(newSum)
            }
            */
        }
        

        const temp=genRefAndValue({
            template:formTemplate,
            FData:formInputState
            })
        setRefAndValue({...temp})
        

        /*
        if(calculation){
            if(calculate){
                setFormInputState(calculation(formInputState))
                setCalculate(false)
            }
        }
       */

        //console.log('formInputState')
        //console.log(formInputState)
    
    }
    },[formInputState])
  //===================================
  //===================================
  //===================================

  const [editData,setEditData]=React.useState(null)

  React.useEffect(()=>{
    //console.log('editData')
    //console.log(editData)
  },[editData])


  //in product we need to update detail table in formInputState as well
  
  const updateFilterData=(idx,inputState)=>{
    
    let tempArray=[]

    formInputState.detail.map((i,index)=>{
        if(idx==index){
            tempArray=[...tempArray,inputState]
        }
        else{
            tempArray=[...tempArray,i]
        }
    })
    
    //console.log(tempArray)
    setFormInputState({...formInputState,detail:tempArray})
    

    //console.log('setFormInputStateInTable')
    //console.log(idx)
    //console.log(inputState)
  }

  //for tableForm
  let [showTable,setShowTable]=React.useState(
    tableResize({tableTemplate:detailTableTemplateForForm})
    //tableResize(convertFormTemplateToTableTemplate(formTemplate))
    //{width:1200,gridCol:""}
  )
  
  const [tableTemplate,setTableTemplate]=React.useState(
    detailTableTemplateForForm
    //convertFormTemplateToTableTemplate(formTemplate,detailTableTemplate)
  )
  
  React.useEffect(()=>{
  //if(isSecond){
    //console.log('useEffect tableTemplate')
    //setShowTable(tableResize({tableTemplate}))
  //}
  },[tableTemplate])

  const [selectRow,setSelectRow]=React.useState(null)

  React.useEffect(()=>{
    if(isSecond){
        //console.log(`selectRow : ${selectRow}`)
    }
   },[selectRow])
  
//=================================

const insertUp=()=>{
       
    if(formInputState.detail){
            if(editData){
                let tempFilterDataData0=[]
                //let tIdx=0
                let tempEditData=null
                formInputState.detail.map((i,idx)=>{
                    //console.log("xxx")
                    if(editData._id==i._id){
                           const temp={...blankData,_id:uuid()} //empty line
                        tempFilterDataData0=[...tempFilterDataData0,temp,i]
                    }
                    else{
                        tempFilterDataData0=[...tempFilterDataData0,i]
                    }
                })
                setFormInputState({...formInputState,
                    detail:tempFilterDataData0,
                })
            }
    }

}
//==============================
const insertDown=()=>{
    //console.log('insertDown')

    if(formInputState.detail){
            if(editData){
                let tempFilterDataData0=[]
                //let tIdx=0  
                let tempEditData=null
                formInputState.detail.map((i,idx)=>{
                    if(editData._id==i._id){

                        const temp={...blankData,_id:uuid()} //empty line
                        tempFilterDataData0=[...tempFilterDataData0,i,temp]
                        tempEditData=i
                    }
                    else{
                        tempFilterDataData0=[...tempFilterDataData0,i]
                    }
                })

                
                setFormInputState({...formInputState,
                    detail:tempFilterDataData0,
                })
                
                console.log('done')

                //setFilterData({...filterData,data0:tempFilterDataData0,editData:tempEditData})
            }
    }
    
}
//===============================

const selectAll=()=>{
    //console.log('selectAll')
    
    if(formInputState.detail){
            let tempArray=[]
            formInputState.detail.map(i=>{
                tempArray=[...tempArray,{...i,selectedLine:true}]
                
            })
            setFormInputState({...formInputState,detail:tempArray})
            setEditData(null)
            //setFilterData({...filterData,data0:tempArray})
    }
    
}

const unSelectAll=()=>{
    //console.log('selectAll')
    
    if(formInputState.detail){
            let tempArray=[]
            formInputState.detail.map(i=>{
                tempArray=[...tempArray,{...i,selectedLine:false}]
            })
            setFormInputState({...formInputState,detail:tempArray})
            setEditData(null)

            //setFilterData({...filterData,data0:tempArray})
    }
}


const moveSelectedUp=()=>{

    if(formInputState.detail){

            let beforeEditData=true
            let beforeArray = []
            let afterArray = []
            let selectedArray = []

            formInputState.detail.map(i=>{
                //1,2 beforeArray
                //5 editData
                //3,4,7,8 selectedArray
                //6,9,10 afterArray

                if(editData._id==i._id){
                    beforeEditData=false
                }
                else if( (i.selectedLine==false)&&(beforeEditData==true) ){
                    beforeArray=[...beforeArray,i]
                }
                else if( (i.selectedLine==false)&&(beforeEditData==false) ){
                    afterArray=[...afterArray,i]
                } 
                else {
                    selectedArray=[...selectedArray,i]
                }
            })
            const tempArray=[...beforeArray,...selectedArray,editData,...afterArray]
            
            setFormInputState({...formInputState,detail:tempArray})

    }
}

const moveSelectedDown=()=>{    
    
    if(formInputState.detail) {
            let beforeEditData=true
            let beforeArray = []
            let afterArray = []
            let selectedArray = []

            formInputState.detail.map(i=>{
                //1,2 beforeArray
                //5 editData
                //3,4,7,8 selectedArray
                //6,9,10 afterArray

                if(editData._id==i._id){
                    beforeEditData=false
                }
                else if( (i.selectedLine==false)&&(beforeEditData==true) ){
                    beforeArray=[...beforeArray,i]
                }
                else if( (i.selectedLine==false)&&(beforeEditData==false) ){
                    afterArray=[...afterArray,i]
                } 
                else {
                    selectedArray=[...selectedArray,i]
                }
            })
            const tempArray=[...beforeArray,editData,...selectedArray,...afterArray]
            
            setFormInputState({...formInputState,detail:tempArray})
    }
}
//===============================
const deleteLine=()=>{

    //console.log(data0)        
    if(formInputState.detail){
            let tempArray=[]
            //let idx=0
            formInputState.detail.map(i=>{
                if(!i.selectedLine){
                    tempArray=[...tempArray,{...i,selectedLine:false}]
                    //tempArray=[...tempArray,{...i,tempIndex:idx,selectedLine:false}]
                    //idx=idx+1
                }
            })
            
            setFormInputState({...formInputState,detail:tempArray})
            setEditData(null)
    }
    
}

const getSelectAll=()=>{


    if(formInputState.detail){
        let tempNewSelectAll=[]
        myFilterData.selectProduct.map(i=>{
            if(i.selectedLine){
                tempNewSelectAll=[...tempNewSelectAll,i]
            }
        })
    
        //console.log(tempNewSelectAll)
        setFormInputState({...formInputState,
            detail:[...formInputState.detail,...tempNewSelectAll]
        })
        //console.log('getSelectAll')
        //console.log(myFilterData)
    
    }

}

  //==============================
  //==============================
  //==============================
  //image
  // 1 = photoUrl1
  // 2 = photoUrl1 , photoUrl2
  
  //---------------
  //We limiet only 2 image which is photoUrl1,photoUrl2 perform
  //image1
  
  const [showImage1,setShowImage1]=React.useState(true)
  const [arrayFile1,setArrayFile1]=React.useState([])
  const [fileUrl1,setFileUrl1]=React.useState([])

  React.useEffect(()=>{
  if(isSecond){
    //console.log('useEffect ArrayFile1')

    
    if(keyName){
        if(keyName[0]=="photoUrl1"){
            changeArrayFile({ arrayFile:arrayFile1,
                fileUrl:fileUrl1,
                setFileUrl:setFileUrl1,
                inputState:formInputState,
                setInputState:setFormInputState,
                keyName:keyName[0],
                //fileName,
                //serverFolder,
                //fileName:"file",
                //serverFolder:"/upload/customer",
                setShowImage:setShowImage1})
        }
    }
    
  }
  },[arrayFile1])
  //----------------
  //image1
  const [showImage2,setShowImage2]=React.useState(true)
  const [arrayFile2,setArrayFile2]=React.useState([])
  const [fileUrl2,setFileUrl2]=React.useState([])


  React.useEffect(()=>{
  if(isSecond){
    //console.log('useEffect ArrayFile2')

    if(keyName){
        if(keyName[1]=="photoUrl2"){
            changeArrayFile({ arrayFile:arrayFile2,
                fileUrl:fileUrl2,
                setFileUrl:setFileUrl2,
                inputState:formInputState,
                setInputState:setFormInputState,
                keyName:keyName[1],
                //fileName,
                //serverFolder,
                //fileName:"file",
                //serverFolder:"/upload/customer",
                setShowImage:setShowImage2})
        }
    }

   }
  },[arrayFile2])

//==============================  
const clearForm=()=>{
    setFormInputState(blankData)
}
//==============================
//use when MdSave is clicked



//====================
//console.log('PageForm')
//====================
const renderFooter=()=>{
    return(
    <div className="flex-center-center jc-end"
        style={{marginTop:"2rem"}}
        //style={{display:"flex",position:"fixed",bottom:"2.5rem",right:"2rem",zIndex:"200"}}
    >
        <div>
            <button
                ref={refSubmitForm}
                onKeyDown={e=>{
                    if(e.key=="ArrowRight"){
                        refCancelForm.current.focus()
                    }
                }}
                onClick={e=>{
                    if(submitFunction){
                        submitFunction(formInputState)
                    }
                }}
            >Confirm</button>
        </div>
        {/*        
        <div>
            <button
                ref={refClearForm}
                onKeyDown={e=>{
                    if(e.key=="ArrowRight"){
                        refCancelForm.current.focus()
                    }
                    if(e.key=="ArrowLeft"){
                        refSubmitForm.current.focus()
                    }
                }}
                onClick={e=>{
                    clearForm();
                }}

            >
                ล้างข้อมูล
            </button>
        </div>
        */}
        
        <div>
            <button
                ref={refCancelForm}
                onKeyDown={e=>{
                    if(e.key=="ArrowLeft"){
                        refCancelForm.current.focus()
                    }
                }}
                onClick={e=>{
                    //if(submitCancel){
                    //    submitCancel()
                    //}
                    clearForm()
                    setShow(false)
                }}
            >Cancel</button>
        </div>

    </div>
    )
}

return (
    <div className="w-100 h-100" 
         style={{padding:"4rem 1rem",margin:"1rem",overflow:"auto"}}>
            <div className="Modal-header">

                <div>
                    <h1>{lb}</h1>
                </div>
               
            </div>
            <div className="Modal-body" >
                <div className="ModalInsideBody">
                {
                 renderForm({
                    cName:"form-row flex-justify-start flex-align-stretch bd-green",
                    template:formTemplate,
                    ref1:refSubmitForm,
                    iconAction,
                    refAndValue, //origin dont have ModalRefAndValue
                    setRefAndValue, //Origin dont have ModalRefAndValue
                    
                    loadData:formInputState,
                    setLoadData:setFormInputState,
                    
                    selectData,
                    //basicData:basicData,
                    blankData,
                    refAndValueBlankData,
                    hidePassword,setHidePassword,


                    tableTemplate:tableTemplate,
                    setTableTemplate:setTableTemplate,
                    saveDetailTableTemplateForFormFunc,

                    showTable,
                    setShowTable,
                    selectRow,
                    setSelectRow,
                    editData,
                    setEditData,
                    updateFilterData,
                    insertUp,insertDown,selectAll,unSelectAll,deleteLine,
                    moveSelectedDown,moveSelectedUp,getSelectAll,

                    setCalculate,
                    sumAmount,
                    saveDetailTableTemplateForFormFunc

                 })
                 
                }
                </div>
            </div>

            {
            keyName
            ?<div className="xc12 form-row h-100"
                  style={{justifyContent:"space-around"}}>
                    {  
                    keyName[0]=="photoUrl1"
                    ?<div className="xc4 sc10 bgc-darkGray bd-lightGray h-100">
                        {
                        showImage1
                        ?<Galleryone_add 
                            fileUrl={fileUrl1}
                            arrayFile={arrayFile1}
                            setArrayFile={setArrayFile1}
                            keyName={keyName[0]}

                            setShowImage={setShowImage1}
                            inputState={formInputState}
                            setInputState={setFormInputState}
                        />
                        :null
                        }   
                    </div>    
                    :null
                    }
                    {
                    keyName[1]=="photoUrl2"
                    ?<div className="xc4 sc10 bgc-darkGray bd-lightGray h-100">
                        {
                        showImage2
                        ?<Galleryone_add 
                            fileUrl={fileUrl2}
                            arrayFile={arrayFile2}
                            setArrayFile={setArrayFile2}
                            keyName={keyName[1]}

                            setShowImage={setShowImage2}
                            inputState={formInputState}
                            setInputState={setFormInputState}
                        />
                        :null
                        }   
                    </div>    
                    :null
                    }
            </div>
            :null
            }

            {renderFooter()}
    </div>
  );
}


PageForm.defaultProps={
    lb:"Form",
    formTemplate:{},
    stateTemplate:{},
    selectData:{},

    iconAction:null,
    iconActionData:{},
    iconActionDataDetail:{},
    loadData:null,
    keyName:null,
    setShow:()=>{},

    calculation:null,
    detailTableTemplateForForm:null,

    submitFunction:null,
    //submitCancel:null
}


export default PageForm;
