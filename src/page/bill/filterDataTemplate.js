import FormTemplate from '../../render/renderForm/FormTemplate'
import StateTemplate from '../../model/StateTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import PageComponent from '../../component/pageComponent/PageComponent';


const {partnerForm,productForm,transactionForm}=FormTemplate
const {partnerState,productState,transactionState}=StateTemplate
const {partnerFilter,productFilter,transactionFilter}=FilterTemplate
const {partnerInputState,productInputState,transactionInputState}=inputState


const blankData={
    id:"",date:"",remindDate:"",branch:"",
    transactionName:"",transactionType:"",transactionStatus:"",
    active:"",effectStock:"",effectOrder:"",effectPlan:"",
    photoUrl1:[""],partnerId:"",partnerType:"",
    title:"",name:"",phone:[""], 
    address:{number:"",tambon:"",district:"",province:"",postcode:""},       
    remark:"",total:"",reduction:"",tax1:"",tax2:"",grandTotal:"",
    detail:[
        { id:"",barcode:"",productName:"",groupId:"",groupName:"",
          unit:"",price:"",quantity:"",result:"",remark:"",
          isRawMat:true,partnerId:"",name:""
        }
    ]
}


const bill={
    colorHead:"#7da097",

    dataIdx:"",
    //dataIdx:"data0",
    data0:null,
    data1:blankData,
    data2:blankData,
    data3:blankData,
    data4:blankData,
    data5:blankData,
    count:0,
    lastRecordId:null,
    showRange:true,
    
    widthLeft:20,
    heightTop:60,

    pageNumber:1,
    limitRow:10,
    sort:{id:1},
    qry:{},

    tableTemplateUrl:"p29tabletemplate",
    dataUrl:"p29transaction",
    selectGroup:null,
    tableTemplate:null,

    detailTableTemplate:null,
    detailTableTemplateForForm:null,

    reloadData:true,
    message:null,
    showModalError:false,
    editData:null,

    badgeState:{
        swapShow:false,swapFunc:()=>{},
        reloadShow:true,reloadFunc:()=>{},////////////////refreshPage
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
    iconActionDataDetail:null,

    showCustomer:false,
    showProduct:false,
    showTransaction:false,

    editTransaction:null,
    editProduct:null,
    editPartner:null
}

const product={
    dataUrl:"p29product",
    tableTemplateUrl:"p29tabletemplate",
    tableTemplateName:"productTableTemplate",
    detailTableTemplateName:"productDetailTableTemplate",
    detailTableTemplateForFormName:"productDetailTableTemplateForForm",
    dataState:productState,
    dataFilter:productFilter,
    dataInputState:productInputState,
    dataForm:productForm,

    groupTitle:"สวัสดี",
    groupDataUrl:"p29group",

    badgeState:{
        swapShow:false,swapFunc:()=>{},
        reloadShow:true,reloadFunc:()=>{},////////////////refreshPage
        filterShow:false,filterFunc:()=>{},
        addShow:false,addFunc:()=>{},
        editShow:false,editFunc:()=>{},
        delShow:true,delFunc:()=>{},
        printerShow:true,printerFunc:()=>{}
    }
}

const transaction={
    dataUrl:"p29transaction",
    tableTemplateUrl:"p29tabletemplate",
    tableTemplateName:"transactionTableTemplate",
    detailTableTemplateName:"productDetailTableTemplate",
    detailTableTemplateForFormName:"productDetailTableTemplateForForm",

    dataState:transactionState,
    dataFilter:transactionFilter,
    dataInputState:transactionInputState,
    dataForm:transactionForm,

    badgeState:{
        swapShow:false,swapFunc:()=>{},
        reloadShow:true,reloadFunc:()=>{},////////////////refreshPage
        filterShow:false,filterFunc:()=>{},
        addShow:false,addFunc:()=>{},
        editShow:false,editFunc:()=>{},
        delShow:true,delFunc:()=>{},
        printerShow:true,printerFunc:()=>{}
    }
}

const partner={
    dataUrl:"p29partner",
    tableTemplateUrl:"p29tabletemplate",
    tableTemplateName:"partnerTableTemplate",
    detailTableTemplateName:"productDetailTableTemplate",
    dataState:partnerState,
    dataFilter:partnerFilter,
    dataInputState:partnerInputState,
    dataForm:partnerForm,

    badgeState:{
        swapShow:false,swapFunc:()=>{},
        reloadShow:true,reloadFunc:()=>{},////////////////refreshPage
        filterShow:false,filterFunc:()=>{},
        addShow:false,addFunc:()=>{},
        editShow:false,editFunc:()=>{},
        delShow:true,delFunc:()=>{},
        printerShow:true,printerFunc:()=>{}
    }
}


const filterDataTemplate={
    bill:bill,
    product:product,
    transaction:transaction,
    product:product,
    partner:partner,
    blankData:blankData
}
export default filterDataTemplate