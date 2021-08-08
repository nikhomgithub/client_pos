import React from 'react';
import axios from 'axios'

import pageUtil from '../../component/pageComponent/pageUtil'
import {MainContext} from '../../context/MainContext'
import renderBill from './renderBill'
import filterDataTemplate from './filterDataTemplate'
import PageComponent from '../../component/pageComponent/PageComponent'
import ctUtil from '../../util/ctUtil'
import uuid from 'react-uuid'

import './Bill.css'

const {bill,transaction,product,partner,blankData}=filterDataTemplate

const {createTableTemplateForPage,convertTableTemplateObjToArray}=ctUtil

const {    
    reloadAxiosAll,updateFilterData,
    filterDataByGroup,refreshPage,
    setUnSelectAll,updateWithSelectGroup,

    filterAxios,submitDeleteFunction,
    submitFunctionAdd,submitFunctionEdit,

    saveTableTemplateFunc,
    insertUp,insertDown,deleteLine,selectAll,unSelectAll,
    moveSelectedDown,moveSelectedUp,importData,

    setMyFilterData,
    setShowAdd,setShowEdit,
    
} = pageUtil



function Bill() {
    console.log('Bill....')
 
    const {basicDataSt,myheader}=React.useContext(MainContext)
    const {basicData}=basicDataSt

    const [myPage,setMyPage]=React.useState("transaction")

    
    const [filterDataBill,setFilterDataBill]=React.useState(bill)

    const setShowPartner=()=>{
        setFilterDataBill({...filterDataBill,showTransaction:false,showProduct:false,showPartner:true})
    }

    const setShowProduct=()=>{
        setFilterDataBill({...filterDataBill,showTransaction:false,showProduct:true,showPartner:false})
    }

    const setShowTransaction=()=>{
        setFilterDataBill({...filterDataBill,showTransaction:true,showProduct:false,showPartner:false})
    }

    const setEditTransaction=(data)=>{
        //console.log('captureTransaction')
        setFilterDataBill({...filterDataBill,editTransaction:data})
    }

    const setEditPartner=(data)=>{
        //console.log('capturePartner')
        setFilterDataBill({...filterDataBill,editPartner:data})
    }

    const setEditProduct=(data)=>{
        //console.log('captureProduct')
        setFilterDataBill({...filterDataBill,editProduct:data})
    }

    const setData0=()=>{
        //console.log('setData0')
        let tempDetail=filterDataBill.editTransaction.detail
        tempDetail=genFilterDataWithIndex(tempDetail)

        const tempEditTransaction={...filterDataBill.editTransaction,detail:tempDetail}

        setFilterDataBill({...filterDataBill,data0:tempEditTransaction})
    }

    const setEditData=(data)=>{
        console.log('editData')
        console.log(data)
        setFilterDataBill({...filterDataBill,editData:data})
    }

    const selectAll=()=>{
        const {data0} = filterDataBill
    
        if(data0){
                let tempArray=[]
                data0.detail.map(i=>{
                    tempArray=[...tempArray,{...i,selectedLine:true}]
                })
                const tempData0={...data0,detail:tempArray}
                setFilterDataBill({...filterDataBill,data0:tempData0})
        }
    }

    const unSelectAll=()=>{
        const {data0} = filterDataBill
    
        if(data0){
                let tempArray=[]
                data0.detail.map(i=>{
                    tempArray=[...tempArray,{...i,selectedLine:false}]
                })
                const tempData0={...data0,detail:tempArray}
                setFilterDataBill({...filterDataBill,data0:tempData0})
        }
    }

        


    const insertUp=()=>{
        const {editData,data0}=filterDataBill

        if(data0){
            if(editData){
                let tempDetail=[]
                let tempEditData=null
                data0.detail.map((i,idx)=>{
                    if(editData._id==i._id){
                        const temp={...blankData.detail,_id:uuid()} //empty line
                        tempDetail=[...tempDetail,temp,i]
                        tempEditData=i
                    }
                    else{
                        tempDetail=[...tempDetail,i]
                    }
                })
                const tempData0={...data0,detail:tempDetail}

                setFilterDataBill({...filterDataBill,
                    data0:tempData0,
                    editData:tempEditData
                })
            }
        }
    }


    const insertDown=()=>{
        const {editData,data0}=filterDataBill

        if(data0){
            if(editData){
                let tempDetail=[]
                let tempEditData=null
                data0.detail.map((i,idx)=>{
                    if(editData._id==i._id){
                        const temp={...blankData.detail,_id:uuid()} //empty line
                        tempDetail=[...tempDetail,i,temp]
                        tempEditData=i
                    }
                    else{
                        tempDetail=[...tempDetail,i]
                    }
                })
                const tempData0={...data0,detail:tempDetail}

                setFilterDataBill({...filterDataBill,
                    data0:tempData0,
                    editData:tempEditData
                })
            }
        }
    }

    const deleteLine=()=>{        
        const {editData,data0}=filterDataBill
        if(data0){
            let tempArray=[]
            data0.detail.map(i=>{
                if(!i.selectedLine){
                    tempArray=[...tempArray,{...i,selectedLine:false}]
                }
            })
            const tempData0={...data0,detail:tempArray}
            setFilterDataBill({...filterDataBill,data0:tempData0,editData:null})
        }
    }

    const updateEditData=(idx,inputState)=>{
        //console.log('updateEditData')
        //console.log(idx)
        //console.log(inputState)

        let tempDetail = [...filterDataBill.data0.detail]
        tempDetail[idx]=inputState
        const tempData0={...filterDataBill.data0,detail:tempDetail}

        setFilterDataBill({...filterDataBill,data0:tempData0})
        //console.log(temp)
        
        //setFilterData({...filterData,data0:temp})
    }


    const setTableTemplate=()=>{
        setFilterDataBill({...filterDataBill,tableTemplate:filterDataBill.tableTemplate})
    }


    const moveSelectedUp=()=>{
        const {editData,data0}=filterDataBill
        let beforeEditData=true
        let beforeArray = []
        let afterArray = []
        let selectedArray = []

        data0.detail.map(i=>{
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
        
        const tempData0={...data0,detail:tempArray}

        setFilterDataBill({...filterDataBill,data0:tempData0})
    }

    const moveSelectedDown=()=>{
        const {editData,data0}=filterDataBill
        let beforeEditData=true
        let beforeArray = []
        let afterArray = []
        let selectedArray = []

        data0.detail.map(i=>{
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
        
        const tempData0={...data0,detail:tempArray}

        setFilterDataBill({...filterDataBill,data0:tempData0})
    }


    const switchFilterData=({dataIdx,colorHead})=>{

        let prevDataIdx=filterDataBill.dataIdx
        let prevData=filterDataBill.data0

        setFilterDataBill(
            {...filterDataBill,
                [prevDataIdx]:prevData,
                colorHead,
                dataIdx,
                data0:filterDataBill[dataIdx],
                editData:null
            }
        )
        
    }

    //whet use reloadAxiosAll we add selectedLine = false 
    //and _id with uuid() to make it unique
    const genFilterDataWithIndex=(detail)=>{
        let tempArray=[]

        detail.map((i,idx)=>{
            
            const temp={...i,selectedLine:false,_id:uuid()}
            //const temp={...i,tempIndex:idx,selectedLine:false}
            tempArray=[...tempArray,temp]
            
        })

        return tempArray
    }


    const reloadAxiosTableTemplate=()=>{
        axios.post(`/p29tabletemplate/getcustom`,{},myheader)
        .then(result=>{
            const temp = createTableTemplateForPage(result.data.data)

            setFilterDataBill(
                {...filterDataBill,
                    reloadData:false,
                    detailTableTemplate:temp["productDetailTableTemplateForForm"]
                })
        })
        .catch(error=>{
            setFilterDataBill({...filterDataBill,reloadData:false})
        })

    }

    React.useEffect(()=>{
        console.log('filterDataBill')
        console.log(filterDataBill)

        if(filterDataBill.reloadData==true){
            //console.log('React.useEffect........')
            reloadAxiosTableTemplate() 
        }
    },[filterDataBill])

    return(
        <div className="" style={{width:"100%"}}>
            <div className="" style={{width:"100%"}}>
            {
                renderBill({
                    filterData:filterDataBill,
                    basicData:basicData,
                    setShowPartner:setShowPartner,
                    setShowProduct:setShowProduct,
                    setShowTransaction:setShowTransaction,
                    setData0:setData0,
                    setTableTemplate:()=>{},//setTableTemplate,
                    setFilterDataData0:()=>{},//{setFilterDataData0}    
                    setEditData:setEditData,//{updateEditData}
                    saveTableTemplateFunc:()=>{},//{saveTableTemplateFunc}
                    updateEditData:updateEditData,//{updateFilterData}
                    switchFilterData:switchFilterData,
                    selectAll:selectAll,
                    unSelectAll:unSelectAll,
                    insertUp:insertUp,
                    insertDown:insertDown,
                    deleteLine:deleteLine,
                    moveSelectedDown:moveSelectedDown,
                    moveSelectedUp:moveSelectedUp
                })
            }
            </div>

            <div className="" style={{width:"100%"}}>
                {filterDataBill.showProduct
                ?<PageComponent
                    dataUrl={product.dataUrl}
                    tableTemplateUrl={product.tableTemplateUrl}
                    tableTemplateName={product.tableTemplateName}
                    detailTableTemplateName={product.detailTableTemplateName}
                    detailTableTemplateForFormName={product.detailTableTemplateForFormName}
                    dataState={product.dataState}
                    dataFilter={product.dataFilter}
                    dataInputState={product.dataInputState}
                    dataForm={product.dataForm}
                    badgeState={{
                        swapShow:false,swapFunc:()=>{},
                        reloadShow:true,reloadFunc:()=>{},
                        filterShow:false,filterFunc:()=>{},
                        addShow:false,addFunc:()=>{},
                        editShow:false,editFunc:()=>{},
                        delShow:true,delFunc:()=>{},
                        printerShow:true,printerFunc:()=>{}
                    }}
                    groupTitle={"สวัสดี"}
                    groupDataUrl="p29group"
                    heightTop={90}
                    captureEditData={setEditProduct}
                    bgColor={"radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(152,152,253,1) 93%)"}
                    />
                :null
                }

                {filterDataBill.showTransaction
                ?<PageComponent
                    dataUrl={transaction.dataUrl}
                    tableTemplateUrl={transaction.tableTemplateUrl}
                    tableTemplateName={transaction.tableTemplateName}
                    detailTableTemplateName={transaction.detailTableTemplateName}
                    detailTableTemplateForFormName={transaction.detailTableTemplateForFormName}
                    dataState={transaction.dataState}
                    dataFilter={transaction.dataFilter}
                    dataInputState={transaction.dataInputState}
                    dataForm={transaction.dataForm}
                    badgeState={{
                        swapShow:false,swapFunc:()=>{},
                        reloadShow:true,reloadFunc:()=>{},
                        filterShow:false,filterFunc:()=>{},
                        addShow:false,addFunc:()=>{},
                        editShow:false,editFunc:()=>{},
                        delShow:true,delFunc:()=>{},
                        printerShow:true,printerFunc:()=>{}
                    }}
                    heightTop={90}
                    captureEditData={setEditTransaction}
                    bgColor={"radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(255, 153, 153,1) 93%)"}
                    />
                :null
                }

                {filterDataBill.showPartner
                ?<PageComponent
                    dataUrl={partner.dataUrl}
                    tableTemplateUrl={partner.tableTemplateUrl}
                    tableTemplateName={partner.tableTemplateName}
                    detailTableTemplateName={partner.detailTableTemplateName}
                    detailTableTemplateForFormName={partner.detailTableTemplateForFormName}
                    dataState={partner.dataState}
                    dataFilter={partner.dataFilter}
                    dataInputState={partner.dataInputState}
                    dataForm={partner.dataForm}
                    badgeState={{
                        swapShow:false,swapFunc:()=>{},
                        reloadShow:true,reloadFunc:()=>{},
                        filterShow:false,filterFunc:()=>{},
                        addShow:false,addFunc:()=>{},
                        editShow:false,editFunc:()=>{},
                        delShow:true,delFunc:()=>{},
                        printerShow:true,printerFunc:()=>{}
                    }}
                    heightTop={90}
                    captureEditData={setEditPartner}
                    bgColor={"radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(204, 255, 102,1) 93%)"}
                    />
                :null
                }


            </div>
        </div>

    )

}
export default Bill;




/*





            

            


            









*/