const billTemplate = [
    //{lb:"ประเภทเอกสาร",key:"id",type:"select",selectDataKey:"basicData",selectObj:'billType'},
    {lb:"รหัสเอกสาร",key:"id",type:"string"},
    {lb:"วันที่",key:"date",type:"date"},
    {lb:"ชื่อเอกสาร",key:"transactionName",type:"string"},
    {lb:"ประเภทเอกสาร",key:"transactionType",type:"string"},
    {lb:"สถานะเอกสาร",key:"transactionStatus",type:"string"},
    {lb:"สาขา",key:"branch",type:"string"},


    {lb:"แอคทีฟ",key:"active",type:"string"},
    {lb:"วันที่แจ้งเตือน",key:"remindDate",type:"date"},
    //{lb:"สถานะเอกสาร",key:"id",type:"select",selectDataKey:"basicData",selectObj:'billStatus'},
    //{lb:"แอคทีฟ",key:"id",type:"select",selectDataKey:"basicData",selectObj:'active'},
]

const customerTemplate = [
    {lb:"รหัสลูกค้า",key:"partnerId",type:"string"},
    //{lb:"คำนำหน้า",key:"title",type:"select",selectDataKey:"basicData",selectObj:'title'},
    {lb:"คำนำหน้า",key:"title",type:"string"},
    {lb:"ชื่อ",key:"name",type:"string"},
    {lb:"เบอร์โทร",key:"phone",type:"string"},
    //{lb:"ประเภทลูกค้า",key:"customerType",type:"select",selectDataKey:"basicData",selectObj:'customerType'},
]

const tempTemplate = {
    billTemplate,
    customerTemplate
}

export default tempTemplate
