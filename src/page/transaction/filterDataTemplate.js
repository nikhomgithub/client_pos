const transaction={
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

    tableTemplate:null,
    
    
    dataUrl:"p29transaction",
    tableTemplateUrl:"p29tabletemplate",
    tableTemplateName:"transactionTableTemplate",
    detailTableTemplateName:"productDetailTableTemplate",
    detailTableTemplateForFormName:"productDetailTableTemplateForForm",

    reloadData:true,
    message:null,
    showModalError:false,
    editData:null,
    badgeState:{
            swapShow:false,swapFunc:()=>{},
            reloadShow:true,reloadFunc:()=>{},
            filterShow:false,filterFunc:()=>{},
            addShow:false,addFunc:()=>{},
            editShow:false,editFunc:()=>{},
            delShow:true,delFunc:()=>{},
            printerShow:false,printerFunc:()=>{}
    },
    selectProduct:[],
    showAdd:false,
    showModalConfirm:false,
    showModalError:false,
    message:null,
    iconActionData:null,
    iconActionDataDetail:null
}

const filterDataTemplate=transaction

export default filterDataTemplate