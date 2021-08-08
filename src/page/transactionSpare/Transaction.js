import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'
import CardTemplate from '../../component/card/CardTemplate'
//import './App2.css'

function Transaction() {
const {groupForm,productForm,
       partnerForm,
       transactionForm,
      }=FormTemplate
const {groupState,productState,
       partnerState,
       transactionState,
      }=StateTemplate
const {productFilter,partnerFilter,transactionFilter}=FilterTemplate
const {productInputState,partnerInputState,transactionInputState}=inputState
const {transactionCard}=CardTemplate
//=======================================
const [isSecond,setIsSecond]=React.useState(false)
React.useEffect(()=>{
    if(!isSecond){
        setIsSecond(true)
    }
},[isSecond])    

//=======================================
const [showTransactionType,setShowTransactionType]=React.useState(false)
const [showPartnerModal,setShowPartnerModal]=React.useState(false)
const [showProductModal,setShowProductModal]=React.useState(false)

const {basicDataSt,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)
const {basicData}=basicDataSt

const [selectTransactionGroup,setSelectTransactionGroup]=React.useState(null)
const [selectPartner,setSelectPartner]=React.useState(null)
const [selectProduct,setSelectProduct]=React.useState(null)


const [iconActionData,setIconActionData]=React.useState(null)
const [iconActionDataDetail,setIconActionDataDetail]=React.useState(null)

React.useEffect(()=>{
    if(selectTransactionGroup){
    setIconActionData({groupId:selectTransactionGroup.id,
                       groupName:selectTransactionGroup.groupName,
                       effectStock:selectTransactionGroup.effectStock, // กระทบสต็อก
                       effectOrder:selectTransactionGroup.effectOrder, // กระทบจอง
                       effectPlan:selectTransactionGroup.effectPlan // กระทบแผน
                   
                    })
    }
},[selectTransactionGroup])

React.useEffect(()=>{
    if(selectPartner){
    setIconActionData({partnerId:selectPartner.id,
                       title:selectPartner.title,
                       name:selectPartner.name,
                       phone:selectPartner.phone,
                       address:selectPartner.address
                    })
    }
},[selectPartner])

React.useEffect(()=>{
    if(selectProduct){
    setIconActionDataDetail(selectProduct)
    }
},[selectProduct])

const transactionCalculation=(formInputState)=>{
    const {total,reduction,grandTotal,detail,groupName}=formInputState

    let tempTotal = 0
    let tempDetail=[]

    detail.map(i=>{
        const roundQuantity=parseInt(i.quantity*100)
        const roundPrice=parseInt(i.price*100)
        const tempResult=roundQuantity*roundPrice

        tempTotal=tempTotal+tempResult

        const tempObj={...i,["result"]:tempResult/10000}
        
        tempDetail=[...tempDetail,tempObj]
    })
    const roundReduction=parseInt(reduction*10000)

    const tempGrandTotal=(tempTotal-roundReduction)/10000
    let tempFormInputState={...formInputState,
                            ["detail"]:tempDetail,
                            ["total"]:tempTotal/10000,
                            ["grandTotal"]:tempGrandTotal
                            }

    /*
    let tempTransactionType=null

    basicData.transactionType.map(i=>{
        if(i.groupName==groupName){
            tempTransactionType={
                groupId:i.groupId,
                groupName:i.groupName,
                effectOrder:i.effectOrder,
                effectPlan:i.effectPlan,
                effectStock:i.effectStock
            }
        }
    })

    if(tempTransactionType){
        tempFormInputState={...tempFormInputState,...tempTransactionType}
    }
    */

    return tempFormInputState
}

return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
    <PageComponent
        basicData={basicData}
        dataForm={transactionForm}
        dataState={transactionState}
        dataFilter={transactionFilter}
        dataInputState={transactionInputState}
        groupTitle={"ประเภทธุรกรรม"}
        tableTitle={"รายการธุรกรรม"}
        detailTableTitle={"รายการสินค้า"}
        graphTitle={"กราฟข้อมูลธุรกรรม"}
        addFormTitle={"เพิ่มข้อมูลธุรกรรม"}
        editFormTitle={"แก้ไขข้อมูลธุรกรรม"}
        
        tableHeadColor={"#F7786B"}
        detailTableHeadColor={"#F7CAC9"}
        graphColor={"#FF6F61"}
        graphDetailKey={"name"}
        dataUrl={"p27transaction"}
        tableTemplateUrl={"p27tabletemplate"}

        canDataChange={true}
        dataTableTemplateName={"transactionTableTemplate"}
        detailTableTemplateName={"productDetailTableTemplate"}

        calculation={transactionCalculation}
        iconAction={[()=>setShowTransactionType(true),
                     ()=>setShowPartnerModal(true),
                     ()=>setShowProductModal(true),
                    ]}
        iconActionData={iconActionData}
        iconActionDataDetail={iconActionDataDetail}
        widthLeft={widthLeft}
        setWidthLeft={setWidthLeft}
        cardTemplate={transactionCard}
        cardTitle={"แสดงธุรกรรมอัตโนมัติ"}
        intervalTime={4000}
        myheader={myheader}
        totalSwapPage={3}
        swapPageOption={["table","table-detailTable","table-graph"]}
        keyName={["photoUrl1"]}
    />



    {showPartnerModal
    ?<ModalComponent className="bd-red"
        funcCancel={()=>{
            setIconActionData({partnerId:"",
                title:"",
                name:"",
                phone:[],
                address:[]

             })
            setShowPartnerModal(false)
        }}
        funcOK={()=>setShowPartnerModal(false)}

        children={
            <PageComponent
                basicData={basicData}
                dataForm={partnerForm}

                dataForm={partnerForm}
                dataState={partnerState}
                dataFilter={partnerFilter}
                dataInputState={partnerInputState}
                groupTitle={"ประเภทคู่ค้า"}
                tableTitle={"ตารางคู่ค้า"}
                graphTitle={"กราฟข้อมูลคู่ค้า"}
                addFormTitle={"เพิ่มข้อมูลคู่ค้า"}
                editFormTitle={"แก้ไขข้อมูลคู่ค้า"}
                tableHeadColor={"#6B5B95"}
                detailTableHeadColor={"#34568B"}
                graphColor={"#FF6F61"}
                graphDetailKey={"name"}
                dataUrl={"p27partner"}
                tableTemplateUrl={"p27tabletemplate"}

                canDataChange={false}
                dataTableTemplateName={"partnerTableTemplate"}
                setSelectData={setSelectPartner}
                widthLeft={widthLeft}
                setWidthLeft={setWidthLeft}
                myheader={myheader}
                totalSwapPage={1}
                swapPageOption={["table"]}            
            />
        }
    />
    :null
    }

    {
     showTransactionType
     ? <div className="Modal-background">
            <div className="Modal-box w-50">
                <select className="w-100"
                    onChange={e=>{
                     //console.log(e.target.value)
                     let tempTransactionType=null
                     //console.log(basicData.transactionType)
                     basicData.transactionType.map(i=>{

                         if(i.groupName==e.target.value){
                             setIconActionData({
                                groupId:i.groupId,
                                groupName:i.groupName,
                                effectStock:i.effectStock, // กระทบสต็อก
                                effectOrder:i.effectOrder, // กระทบจอง
                                effectPlan:i.effectPlan // กระทบแผน
                             })

                         }
                     })

                     setShowTransactionType(false)
                    }}
                >  
                    <option value="" hidden>list below...</option>
                    { basicData.transactionType.map((i,idx)=>{
                        return (
                            <option key={idx}>{i.groupName}</option>
                        )
                    })
                    }
                </select>
            </div>
      </div>
     :null
    }

    {showProductModal
     ?<ModalComponent className="bd-red"
        funcOK={()=>setShowProductModal(false)}
        children={
            <PageComponent
                basicData={basicData}
                dataForm={productForm}
                dataGroupForm={groupForm}
                dataState={productState}
                dataGroupState={groupState}
                dataFilter={productFilter}
                dataInputState={productInputState}
                groupTitle={"กลุ่มสินค้า"}
                tableTitle={"ตารางสินค้า"}
                tableHeadColor={"#6B5B95"}
                dataUrl={"p27product"}
                groupDataUrl={"p27group"}
                tableTemplateUrl={"p27tabletemplate"}

                canDataChange={false}
                dataTableTemplateName={"productTableTemplate"}
                detailTableTemplateName={"productDetailTableTemplate"}
                setSelectData={setSelectProduct}
                widthLeft={widthLeft}
                setWidthLeft={setWidthLeft}
                myheader={myheader}
                totalSwapPage={1}
                swapPageOption={["group-table"]}
            />
     }
    />

    :null
    }
</div>
)

}
export default Transaction;