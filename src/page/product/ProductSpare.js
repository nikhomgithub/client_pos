import React from 'react';
import axios from 'axios'
import {MainContext} from '../../context/MainContext'
import Table from '../../component/table/Table'
import uuid from 'react-uuid'
import ModalConfirm from '../../render/ModalConfirm'

//import Badge from '../../render/renderBadge/Badge'
import renderBadge from '../../render/renderBadge/renderBadge'

import FormTemplate from '../../render/renderForm/FormTemplate'
import StateTemplate from '../../model/StateTemplate'
import StateUtil from '../../model/StateUtil'

import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalFilterInput from '../../render/renderFilter/ModalFilterInput'
import tableTemplate from '../../component/table/tableTemplate'

import PageForm from '../../render/renderForm/PageForm'
import renderModalError from '../../render/renderModalError'
import axiosUtil from '../../util/axiosUtil'

import ctUtil from '../../util/ctUtil'

import NewGroupComponent from '../../render/renderTree/NewGroupComponent'
import renderWidthRangeBar from '../../component/table/renderWidthRangeBar'
import renderHeightRangeBar from '../../component/table/renderHeightRangeBar'
import { ErrorOutlineOutlined, FilterDramaTwoTone } from '@material-ui/icons';

const dataTableTemplateName="productTableTemplate"
const detailTableTemplateName="productDetailTableTemplate"
const {createTableTemplateForPage,convertTableTemplateObjToArray}=ctUtil
const {genArrayForFilterAxios,genFD,addFileNameInPhotoUrl,catchErrorToMessage}=axiosUtil

const {productForm}=FormTemplate
const {productState}=StateTemplate
const {productFilter}=FilterTemplate
const {productInputState}=inputState
const { productTableTemplate,productDetailTableTemplate}=tableTemplate


function Product() {
  
  /*
  const {basicData,setReloadCheckToken}=React.useContext(MainContext)
  const {shopSignUpForm,shopLogInForm,shopChangePasswordForm}=FormTemplate      
  const {shopSignUpState,shopLogInState,shopChangePasswordState}=StateTemplate
  const {catchErrorToMessage}=axiosUtil
  //====================================
  const [showModalError,setShowModalError]=React.useState(false)
  const [showShopSignUp,setShowShopSignUp]=React.useState(false)
  const [showShopLogIn,setShowShopLogIn]=React.useState(false)
  const [showShopChangePassword,setShowShopChangePassword]=React.useState(false)
  const [message,setMessage]=React.useState(null)
  //====================================
  */
  //=======================
  const {genBlankState,genRefAndValue,revRefAndValue,combineLoadDataBlankState}=StateUtil  

const {basicDataSt,myheader}=React.useContext(MainContext)
const {basicData}=basicDataSt


const groupTitle="ค้นหาจากกลุ่มสินค้า"

const editData=null

const loadDataGroup=true


//to show range of height and width bar
const setShowRange=(show)=>{
    setFilterData({...filterData,showRange:show})
}

//change widthLeft when slide input range
const setWidthLeft=(width)=>{
    setFilterData({...filterData,widthLeft:width})
}

//change heightTop when slide input range
const setHeightTop=(height)=>{
    setFilterData({...filterData,heightTop:height})
}

//-----------------------
//when reloadDat is true => use Effect will start to use reloadAxiosAll()
//when press refresh => will start to use reloadAxiosAll()
//we get data ,count,lastRecordId and all tableTemplate 
const reloadAxiosAll=()=>{
    console.log('reloadAxiosAll')
    //console.log(filterData)

    const {pageNumber,limitRow,sort,qry,dataUrl,tableTemplateUrl,
           tableTemplateName,detailTableTemplateName,
           detailTableTemplateForFormName
    } = filterData
    const temp2 = {pageNumber,limitRow,sort,...qry}

    console.log('reloadAxiosAll..........')
    //console.log(qry)
    //console.log(temp2)

    console.log(filterData.editData)

    const promise1=axios.post(`/${dataUrl}/getlimit`,
                   {pageNumber,limitRow,sort,...qry},myheader)
    const promise2=axios.post(`/${tableTemplateUrl}/getcustom`,{},myheader)
    Promise.all([promise1,promise2])
        .then(result=>{

            const temp = createTableTemplateForPage(result[1].data.data)
            console.log('temp.......')
            console.log(temp)

            //console.log(temp["productTableTemplate"])
            const temp2= genFilterDataWithIndex(result[0].data.data)
            //console.log('temp2')
            //console.log(result[1])
            //console.log(temp2)
            //console.log(productTableTemplate)
            //console.log(result[0].data.lastRecordId)

            setFilterData( {...filterData,
                data0:temp2,
                count:result[0].data.count,
                lastRecordId:result[0].data.lastRecordId,
                tableTemplate:temp[tableTemplateName],
                detailTableTemplate: temp[detailTableTemplateName],
                detailTableTemplateForForm: temp[detailTableTemplateForFormName],

                //tableTemplate:productTableTemplate,
                //detailTableTemplate:productDetailTableTemplate,
                reloadData:false
            } )
         
        })
        .catch(error=>{
            setFilterData({...filterData,
                reloadData:false,
                message:catchErrorToMessage(error),
                showModalConfirm:false,
                showModalError:true,
            })
        })
}
//--------------------------
//when click folder group in newGroupComponent we get selectGroup
//it will filter data  by use groupId of selectGroup
const filterDataByGroup=(i)=>{
    //console.log('filterDataByGroup..........')
    //console.log(i)
    const {folders,...remaining}=i
    const temp = {...filterData,pageNumber:1,qry:{groupId:i.id},selectGroup:remaining,reloadData:true}
    //console.log(temp)
    setFilterData(temp)
    //setFilterData({...filterData,pageNumber:3,reloadData:true})
    //setFilterData({...filterData,pageNumber:1,qry:{groupId:id},reloadData:true})
    //reloadAxiosAll()
}

//------------------------
//use refresh button keep limitRow and sort ,
//rest editData and qry to null
const refreshPage=(data)=>{
    const {limitRow,sort}=data
    const temp = {...filterData,limitRow,sort,editData:null,qry:null,reloadData:true}
    setFilterData(temp)
}


//<LineForm/> onBlur => updateFilterData with LineForm
const updateFilterData=(index,i)=>{
    //<LineForm/>   onBlur => updateFilterData

    const {data0,selectProduct}=filterData
    //console.log(i)


    let tempArray=[] //for update  data0 with... i of LineForm
    data0.map(j=>{
        if(j._id==i._id){
            tempArray=[...tempArray,i]
        }   
        else{
            tempArray=[...tempArray,j]
        }
    })
    //get i from <LineForm/>

    //update selectProduct with LineForm as well 
    let tempArray2=[]

    selectProduct.map(k=>{
        if(k._id==i._id){
            //tempArray2=[...tempArray2,k]
        }
        else {
            tempArray2=[...tempArray2,k]
        }
    })
    tempArray2=[...tempArray2,i]
    setFilterData({...filterData,
        data0:tempArray,
        selectProduct:tempArray2
    })

}

//To change showColHead to see column head p text or MdClose 
//To show renderTableSetting or not
const setTableTemplate=(data)=>{
    setFilterData({...filterData,tableTemplate:data})
}

const setDetailTableTemplate=(data)=>{
    setFilterData({...filterData,detailTableTemplate:data})
}

//use when MdSave is clicked
const saveTableTemplateFunc=(tableTemplate)=>{
    const {tableTemplateUrl} = filterData
    //const {tableTemplateUrl,tableTemplate} = filterData

    let tempTableTemplate={}
    const object=Object.keys(tableTemplate)
    

    //make sure showColHead  and not show MdClose
    object.map(i=>{
        let tempObj=tableTemplate[i]
        tempTableTemplate={...tempTableTemplate,[i]:{...tempObj,["showColHead"]:true}}
    })

    //change formate before save to DB 
    const temp={
        tableName:dataTableTemplateName,
        template: convertTableTemplateObjToArray(tempTableTemplate)
    }

    axios.post(`/${tableTemplateUrl}/updatetabletemplate`,temp,myheader)
    .then(result=>{
       console.log(result)
    })
    .catch(error=>{
        console.log(catchErrorToMessage(error))
    })
    
}


//For Detail TableTemplate
//use when MdSave is clicked
const saveDetailTableTemplateFunc=(detailTableTemplate)=>{
    const {tableTemplateUrl} = filterData
    //const {tableTemplateUrl,detailTableTemplate} = filterData

    let tempDetailTableTemplate={}
    const object=Object.keys(detailTableTemplate)
    

    //make sure showColHead  and not show MdClose
    object.map(i=>{
        let tempObj=detailTableTemplate[i]
        tempDetailTableTemplate={...tempDetailTableTemplate,[i]:{...tempObj,["showColHead"]:true}}
    })

    //change formate before save to DB 
    const temp={
        tableName:detailTableTemplateName,
        template: convertTableTemplateObjToArray(tempDetailTableTemplate)
    }

    axios.post(`/${tableTemplateUrl}/updatetabletemplate`,temp,myheader)
    .then(result=>{
       console.log(result)
    })
    .catch(error=>{
        console.log(catchErrorToMessage(error))
    })
    
}


//=====================================
//pass this function to PageForm >> renderForm >> Table >> renderTable
const saveDetailTableTemplateForFormFunc=(tableTemplate)=>{

    let tempTableTemplate={}
    const object=Object.keys(tableTemplate)
    
    //make sure showColHead  and not show MdClose
    object.map(i=>{
        let tempObj=tableTemplate[i]
        tempTableTemplate={...tempTableTemplate,[i]:{...tempObj,["showColHead"]:true}}
    })

    //change formate before save to DB 
    const temp={
        tableName:"productDetailTableTemplateForForm",
        template: convertTableTemplateObjToArray(tempTableTemplate)
    }
    //p29tabletemplate
    //axios.post(`/${tableTemplateUrl}/updatetabletemplate`,temp,myheader)
    axios.post(`/p29tabletemplate/updatetabletemplate`,temp,myheader)

    .then(result=>{
       console.log(result)
    })
    .catch(error=>{
        console.log(catchErrorToMessage(error))
    })
    
}

//when click a line of table set that line as editData
//color of text turn red 
//or line change to input
const updateEditData=(data)=>{
    //console.log('editData')
    //console.log(data)
    const temp=data
     setFilterData({...filterData,editData:temp})
}

//to save filterData when sort Up and down each column
const setFilterDataData0=(data)=>{
    setFilterData({...filterData,
        data0:data
    })
}


//whet use reloadAxiosAll we add selectedLine = false 
//and _id with uuid() to make it unique
const genFilterDataWithIndex=(filterData)=>{
    let tempArray=[]

    filterData.map((i,idx)=>{
        
        const temp={...i,selectedLine:false,_id:uuid()}
        //const temp={...i,tempIndex:idx,selectedLine:false}
        tempArray=[...tempArray,temp]
         
    })

    return tempArray
}

//-------------------------
//when change page with input or icon page number is change 
//and send request to server for data of that page
const setPageNumber=(number)=>{
    //console.log(number)
    setFilterData({...filterData,pageNumber:number,reloadData:true})
}

//when setShowAdd(true) it show add PageForm by change showAdd to true and heightTop = 25
//when setShowAdd(false) it hide add PageFrom by change showAdd to false and heightTop = 90
const setShowAdd=(data)=>{
    //console.log('data')
    //console.log(data)
    if(data){ //data = true
        setFilterData({...filterData,
            showAdd:data,
            showEdit:false,
            heightTop:25
        })
    }
    else { //data == false
        setFilterData({...filterData,
            showAdd:data,
            heightTop:90
        })
    }
   
}


//when setShowEdit(true) it show add PageForm by change showEdit to true and heightTop = 25
//when setShowEdit(false) it hide add PageFrom by change showEdit to false and heightTop = 90
const setShowEdit=(data)=>{
    const {editData} = filterData

    if(data){ //data==true
        setFilterData({...filterData,
            showEdit:data,
            showAdd:false,
            heightTop:25
        })
    }
    else {
        setFilterData({...filterData,
            showEdit:data,
            heightTop:90
        })
    }
}

//when press MdDelete it show showModalConfirm
const setShowModalConfirm=(data)=>{
    setFilterData({...filterData,
        showModalConfirm:data,
    })
}

const setReloadData=()=>{

}

//when change input select of sort such as sort by name, price it 
const setSort=(data)=>{
    //console.log('setSort')
    //console.log(data)
    setFilterData({...filterData,sort:data})
}

//when click MdPlus or MdMinus it change limitRow of data per page
const setLimitRow=(data)=>{
    //console.log(data)
    setFilterData({...filterData,limitRow:data})
}

//when .catch activate it show ModalError
const setShowModalError=(data)=>{
    setFilterData({...filterData,showModalError:data})
}


//when click FaBullEyes it change data0.selectedLine 
//and set selectProct to null 
//and uncheck all input radio 
const setUnSelectAll=()=>{
    let tempArray=[]

    filterData.data0.map(i=>{
        tempArray=[...tempArray,{...i,selectedLine:false}]
    })

    setFilterData({...filterData,
        selectProduct:[],
        data0:tempArray
    })

}

//beforehand we have selectGroup by click folder icon on newGroupComponent
//when we click MdSearch in pageForm it change iconActionData
//to add group info into formInputState  
//In PageForm UseEffect will monoitor iconActionData 
//if it is change, it update in formInputState
const updateWithSelectGroup=()=>{
    if(filterData.selectGroup){        
        console.log('updateWithSelectGroup')

        const {id,...remaining}=filterData.selectGroup
        setFilterData({...filterData,
            iconActionData:{groupId:id,...remaining}
        })
    }
}

//when we click search $in or $or 
//it gen arrayForFilter and reload data again 
//========================================
const filterAxios=(option,inputState)=>{
    //console.log('filterAxios.....')
    //console.log(option)
    //console.log(inputState)
    const {pageNumber,limitRow,sort,dataUrl} = filterData

    const arrayCommand=genArrayForFilterAxios({
        filterTemplate:productFilter,
        inputState
    })

    console.log(arrayCommand)

    let qry = null
    
    if(option=="and"){ qry={$and:arrayCommand} }
    if(option=="or"){ qry={$or:arrayCommand} }

    setFilterData({
        ...filterData,
        pageNumber:1,
        qry:qry
    })
    //setPageNumber(1)
    //setQry(qry)

    axios.post(`/${dataUrl}/getlimit`,{pageNumber:1,limitRow,sort,...qry},myheader)
    .then(result=>{
        setFilterData(
        {
        ...filterData,
        data0:result.data.data,
        count:result.data.count,
        lastRecordId:result.data.lastRecordId,
        reloadData:false
        })
    })
    .catch(error=>{
        //catchErrorToMessage(error,setMessage)
        //setMessage(error.response.data.message)
        setFilterData({...filterData,
            reloadData:false,
            message:catchErrorToMessage(error),
            showModalConfirm:false,
            showModalError:true,
        })
    })
    
}


//when press MdDelete 
//it delete all line with have selectedLine = true
const submitDeleteFunction=()=>{

    const {dataUrl,selectProduct}=filterData
    let controller="deletemany"

    if(dataUrl=="transaction"){
        controller="deletetransaction"
    }

    let tempId=[]

    selectProduct.map(i=>{
        if (i.selectedLine){
            tempId=[...tempId,i.id]
        }
    })
    
    const qry = {id:{$in:tempId}}

    axios.post(`/${dataUrl}/${controller}`,qry,myheader)
    .then(result=>{
        setFilterData(
        {
        ...filterData,
        reloadData:true,
        showModalConfirm:false,
        selectProduct:[]
        })

    })
    .catch(error=>{
        //console.log('errrrrrr')
        //console.log(error.response.data.error.message)
        setFilterData({...filterData,
            reloadData:false,
            message:catchErrorToMessage(error),
            showModalConfirm:false,
            showModalError:true,
        })
    })
    
}

//
// when click confirm in add PageForm it request for addcustom to server
const submitFunctionAdd=(formInputState)=>{
    
    const {dataUrl} = filterData

    let controller="addcustom"
     
    if(dataUrl.includes("transaction")){
        controller="addtransaction"
    }

    const tempFormInputState1={...formInputState}

    const tempFormInputState2=addFileNameInPhotoUrl(tempFormInputState1)  
    
    const tempFormInputState3=combineLoadDataBlankState({template:productState,loadData: tempFormInputState2})


    const fd=genFD({inputState:tempFormInputState3,template:productState})

    axios.post(`/${dataUrl}/${controller}`,fd,myheader)
        .then(result=>{
            //console.log('result')
            //console.log(result)

            setFilterData({...filterData,
                reloadData:true,
                showEdit:false,
                heightTop:95,
            })
            //setShowAdd(false)
            //setReloadData(true)
        })
        .catch(error=>{
            setFilterData({...filterData,
                reloadData:false,
                message:catchErrorToMessage(error),
                showModalConfirm:false,
                showModalError:true,
                editData:tempFormInputState1
            })
            //catchErrorToMessage(error)
            //catchErrorToMessage(error,setMessage)
            //setShowModalError(true)
        })
}   

//when click confirm in edit PageForm it request updatecustom to server
const submitFunctionEdit=(formInputState)=>{

    const {dataUrl} = filterData

    let controller="updatecustom"

    if(dataUrl.includes("transaction")){
        controller="updatetransaction"
    }
    
    const tempFormInputState1={...formInputState}

    const tempFormInputState2=addFileNameInPhotoUrl(tempFormInputState1)  
    
    const tempFormInputState3=combineLoadDataBlankState({template:productState,loadData:tempFormInputState2})

    const fd=genFD({inputState:tempFormInputState3,template:productState})

    axios.post(`/${dataUrl}/${controller}`,fd,myheader)
        .then(result=>{

            setFilterData({...filterData,
                reloadData:true,
                showEdit:false,
                heightTop:95,
                editData:null
            })

            //setShowEdit(false)
            //setReloadData(true)
        })
        .catch(error=>{
            //console.log(error.response.data.error)
            setFilterData({...filterData,
                reloadData:false,
                message:catchErrorToMessage(error),
                showModalConfirm:false,
                showModalError:true,
                editData:tempFormInputState1
            })
            //catchErrorToMessage(error,setMessage)
            //setMessage(error.response.data.message)
            //setShowModalError(true)
        })
}   
    
//-------------------------
let [filterData,setFilterData]=React.useState({
    data0:null,
    count:0,
    lastRecordId:null,
    showRange:true,
    
    widthLeft:20,
    heightTop:30,

    pageNumber:1,
    limitRow:10,
    sort:{id:1},
    qry:{},
    tableTemplateUrl:"p29tabletemplate",
    dataUrl:"p29product",
    selectGroup:null,

    tableTemplate:null,
    detailTableTemplate:null,
    detailTableTemplateForForm:null,

    tableTemplateName:"productTableTemplate",
    detailTableTemplateName:"productDetailTableTemplate",
    detailTableTemplateForFormName:"productDetailTableTemplateForForm",

    reloadData:true,
    message:null,
    showModalError:false,
    editData:null,
    badgeState:{
        swapShow:false,swapFunc:()=>{},
        reloadShow:true,reloadFunc:refreshPage,
        filterShow:false,filterFunc:()=>{},
        addShow:true,addFunc:()=>{},
        editShow:true,editFunc:()=>{},
        delShow:true,delFunc:()=>{},
        printerShow:true,printerFunc:()=>{}
    },
    selectProduct:[],
    showAdd:false,
    showModalConfirm:false,
    showModalError:false,
    message:null,
    iconActionData:null,
    iconActionDataDetail:null
})


//monitor reload change from false to true to reloadAxiosAll
//-------------------------
React.useEffect(()=>{
    console.log('total filterData Change')
    console.log(filterData)
    if(filterData.reloadData==true){
        //console.log('React.useEffect........')
        reloadAxiosAll()
    }
},[filterData])
//---------------------------

//To render Filter 
const renderFilter=()=>{
    const {limitRow,sort}=filterData
    return (
        <ModalFilterInput
            title={`ค้นหา `}
            show={true} setShow={()=>{}}
            filterTemplate={productFilter}
            inputState={productInputState} 
            setInputState={()=>{}}
            limitRow={limitRow} 
            setLimitRow={setLimitRow}
            sort={sort} 
            setSort={setSort}
            filterAxios={filterAxios}
        />
    )
}

//to renderGroup
//=============================
const renderGroup=()=>{
    const {editData}=filterData

    if(!loadDataGroup){return null}

    return (
    <div className="w-100 h-100" style={{overflow:"auto",paddingBottom:"80px"}}>
        {
            renderFilter()
        }
        <div className="flex-center-center">
            <h3>{groupTitle}</h3>
        </div>
        <div className="">
            <NewGroupComponent
                groupDataUrl={"p29group"}
                canGroupChange={true}
                selectData={{basicData:basicData}}
                setSelectGroup={()=>{}}
                filterDataByGroup={filterDataByGroup}
                editData={editData}
            />
        </div>
    </div>
    )
}

//to renderTable
//======================
const renderTable=()=>{
    return (
            filterData.data0
            ?<Table
                colorHead={"#888"}
                tableTemplate={filterData.tableTemplate}
                setTableTemplate={setTableTemplate}

                filterData={filterData.data0}
                setFilterData={setFilterDataData0}
                
                editData={filterData.editData}
                setEditData={updateEditData}
                saveTableTemplateFunc={saveTableTemplateFunc}
                isSubTable={false}
                updateFilterData={updateFilterData}
                useInput={false}
                selectData={filterData.selectData}
            />
            :null
    )
}
//==========================
//there are 3 case to render add PageForm, edit PageForm or Table for detail of product
const renderSubTable=()=>{
    const {showAdd,showEdit,editData}=filterData

    if(showAdd){
        return (
            
            <PageForm
                                lb={"เพิ่มสินค้า"}
                                formTemplate={productForm}
                                stateTemplate={productState}
                                loadData={{id:filterData.lastRecordId+1}}
                                myFilterData={filterData}
                                selectData={{basicData:basicData}}
                                setShow={setShowAdd}
                                iconAction={[updateWithSelectGroup,()=>{}]}
                                iconActionData={filterData.iconActionData}
                                iconActionDataDetail={filterData.iconActionDataDetail}
                                detailTableTemplateForForm={filterData.detailTableTemplateForForm}
                                submitFunction={submitFunctionAdd}
                                keyName={["photoUrl1"]} //new ---------------------------------
                                calculation={null}
                                saveDetailTableTemplateForFormFunc={saveDetailTableTemplateForFormFunc}
            />
            
            
        )
    }
    else if(showEdit){
        return(
            <PageForm
                                lb={"แก้ไขสินค้า"}
                                formTemplate={productForm}
                                stateTemplate={productState}
                                loadData={filterData.editData}
                                myFilterData={filterData}
                                selectData={{basicData:basicData}}
                                setShow={setShowEdit}
                                iconAction={[updateWithSelectGroup,()=>{}]}
                                iconActionData={filterData.iconActionData}
                                iconActionDataDetail={filterData.iconActionDataDetail}
                                detailTableTemplateForForm={filterData.detailTableTemplateForForm}
                                submitFunction={submitFunctionEdit}
                                keyName={["photoUrl1"]} //new ---------------------------------
                                calculation={null}
                                saveDetailTableTemplateForFormFunc={saveDetailTableTemplateForFormFunc}
            />
            
        )
    }
    else if(editData){
        
        return(
            <div className="w-100 h-100">
                <div className="flex-center-center" 
                        style={{height:"1.4rem",margin:"0",padding:"0"}}>
                    <p>สินค้าย่อย</p>
                </div>
               
                <Table
                    colorHead={"#aaa"}
                    tableTemplate={filterData.detailTableTemplate}
                    setTableTemplate={setDetailTableTemplate}

                    filterData={filterData.editData.detail}
                    setFilterData={()=>{}}

                    editData={null}
                    setEditData={()=>{}}
                    saveTableTemplateFunc={saveDetailTableTemplateFunc}
                    isSubTable={false}
                    updateFilterData={()=>{}}
                    useInput={false}
                    selectData={null}
                />
            </div>    
        )
    }
    else {
        return null
    }
}
//======================
const genArray=(target)=>{
    let tempArray=[]
    for(let i=0;i<target;i++){
        tempArray=[...tempArray,i]
    }
    return tempArray
}
//=======================
//======================
const renderBody=()=>{
    return (
        <>
            <div className="bd-darkGray" 
            style={{height:"100%",width:`${filterData.widthLeft}%`}}>
                { 
                  renderGroup() 
                }
            </div>
            <div className="bd-darkGray" 
                style={{height:"100%",width:`${100-filterData.widthLeft}%`}}>

                        <div className="h-5 w-100"
                             style={{height:"5%"}}
                        >
                            { renderBadge({
                                filterData,
                                setPageNumber,
                                
                                totalSwapPage:1, 
                                setSwapState:()=>{},
                                
                                setReloadData:refreshPage,
                                setShowFilter:()=>{},
                                setShowAdd:setShowAdd,
                                setShowEdit:setShowEdit,
                                setShowModalConfirm:setShowModalConfirm,
                                setUnSelectAll:setUnSelectAll
                            }) }
                        </div>


                        <div className="" 
                            style={{width:"100%",
                                    //height:"30%"
                                    height:`${filterData.heightTop-1}%`,
                                    
                                    margin:"0 0 0.5rem 0"
                                    }}>
                        <div className="flex-center-center" 
                             style={{height:"1.4rem",margin:"0",padding:"0"}}>
                            <p>รายการสินค้า</p>
                        </div>
                            { renderTable() }
                            
                        </div>

                        <div className=""
                            style={{overflow:"auto",width:"100%",
                                    //height:"65%",
                                    height:`${95-filterData.heightTop}%`,
                                    padding:"2rem 0 0 0"
                                    }}>
                                        
                           {
                            renderSubTable()
                           }

                        </div>

            </div>
        </>
    ) 
}
//===================================
return (
    <div className="w-100 h-100">
        {
            renderWidthRangeBar({showRange:filterData.showRange,setShowRange,
                                 widthLeft:filterData.widthLeft,setWidthLeft})
        }

        {
            renderHeightRangeBar({showRange:filterData.showRange,setShowRange,
                                  heightTop:filterData.heightTop,setHeightTop})
        }
        <div className="flex-center-center"
             style={{height:"100%"}}
        >
            {   renderBody()    }
            
        </div>

        {
        filterData.showModalConfirm
        ?<ModalConfirm
            setShow={setShowModalConfirm}
            submitFunction={submitDeleteFunction}
        />
        :null
        }

        {  
        filterData.showModalError
        ?renderModalError({
            setShow:setShowModalError,
            message:filterData.message
        })
        :null
        }
    </div>
  );
}

export default Product;

