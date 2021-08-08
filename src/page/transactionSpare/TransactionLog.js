import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'
import { FaDoorClosed } from 'react-icons/fa';
//import './App2.css'

function TransactionLog() {
const {
       transactionForm,transactionGroupForm
      }=FormTemplate
const {
       transactionState,transactionGroupState 
      }=StateTemplate
const {transactionFilter}=FilterTemplate
const {transactionInputState}=inputState

//=======================================
const [isSecond,setIsSecond]=React.useState(false)
React.useEffect(()=>{
    if(!isSecond){
        setIsSecond(true)
    }
},[isSecond])    

//=======================================
const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
    <PageComponent
        dataForm={transactionForm}
        dataState={transactionState}
        dataFilter={transactionFilter}
        dataInputState={transactionInputState}
        groupTitle={"ประเภทธุรกรรม"}
        tableTitle={"รายการบันทึกธุรกรรม"}
        detailTableTitle={"รายการสินค้า"}
        graphTitle={"กราฟข้อมูลบันทึกธุรกรรม"}

        tableHeadColor={"#C0AB8E"}
        detailTableHeadColor={"#B4B7BA"}
        graphColor={"#FF6F61"}
        graphDetailKey={"name"}
        dataUrl={"p27transactionlog"}
        tableTemplateUrl={"p27tabletemplate"}
        
        canDataChange={false}
        dataTableTemplateName={"transactionTableTemplate"}
        detailTableTemplateName={"productDetailTableTemplate"}
        widthLeft={widthLeft}
        setWidthLeft={setWidthLeft}
        myheader={myheader}
        totalSwapPage={3}
        swapPageOption={["table","table-detailTable","table-graph"]}
    />

</div>
)

}
export default TransactionLog;