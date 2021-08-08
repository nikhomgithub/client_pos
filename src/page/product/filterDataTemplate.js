const product={
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
        reloadShow:true,reloadFunc:()=>{},
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
}

const filterDataTemplate=product

export default filterDataTemplate