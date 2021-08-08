

import React from 'react';
import FormTemplate from '../../render/renderForm/FormTemplate'
import StateTemplate from '../../model/StateTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import PageComponent from '../../component/pageComponent/PageComponent';


const {transactionForm}=FormTemplate
const {transactionState}=StateTemplate
const {transactionFilter}=FilterTemplate
const {transactionInputState}=inputState


function Transaction() {

    return(
        <PageComponent
        dataUrl="p29transaction"
        tableTemplateUrl="p29tabletemplate"
        tableTemplateName="transactionTableTemplate"
        detailTableTemplateName="productDetailTableTemplate"
        detailTableTemplateForFormName="productDetailTableTemplateForForm"
        
        dataState={transactionState}
        dataFilter={transactionFilter}
        dataInputState={transactionInputState}
        dataForm={transactionForm}
        
        addFormTitle={"เพิ่มธุรกรรม"}
        editFormTitle={"แก้ไขธุรกรรม"}
        />
    )
}
export default Transaction;