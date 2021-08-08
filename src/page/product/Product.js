import React from 'react';
import FormTemplate from '../../render/renderForm/FormTemplate'
import StateTemplate from '../../model/StateTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import PageComponent from '../../component/pageComponent/PageComponent';


const {productForm}=FormTemplate
const {productState}=StateTemplate
const {productFilter}=FilterTemplate
const {productInputState}=inputState
function Product() {
  console.log('product...........')

//===================================
return (
    <PageComponent
        dataUrl="p29product"
        tableTemplateUrl="p29tabletemplate"
        tableTemplateName="productTableTemplate"
        detailTableTemplateName="productDetailTableTemplate"
        detailTableTemplateForFormName="productDetailTableTemplateForForm"
        dataState={productState}
        dataFilter={productFilter}
        dataInputState={productInputState}
        dataForm={productForm}
        badgeState={{
            swapShow:false,swapFunc:()=>{},
            reloadShow:true,reloadFunc:()=>{},
            filterShow:false,filterFunc:()=>{},
            addShow:true,addFunc:()=>{},
            editShow:true,editFunc:()=>{},
            delShow:true,delFunc:()=>{},
            printerShow:true,printerFunc:()=>{}
        }}
        addFormTitle={"เพิ่มสินค้า"}
        editFormTitle={"แก้ไขสินค้า"}
        groupTitle={"สวัสดี"}
        groupDataUrl="p29group"
        />
  );
}

export default Product;

