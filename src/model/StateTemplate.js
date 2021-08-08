
const patternNumber=/^\d{1,30}$/gi
const patternString=/^[ก-๙\w\+\-\*\/\\.=]{1,200}$/gi
const patternEmail=/^[\w@\.\-]{1,30}$/gi
const patternDate=/^\d{4}-\d{2}-\d{2}$/gi
const patternFileName=/^[\w\-\*\/\.\\=]{1,200}$/gi
const patternBoolean=/^(true)|(false)$/gi
const patternWildCard=/.{0,200}/gi
//const patternNumber=/^(\d{1,30})|(\d{1,15}\.\d{1,15})|(\d{1,29}.)$/gi

const valBasic= (pttn,str)=>{
    return new RegExp(pttn).test(str)
}

const valArray= (pttn,array)=>{
    let tempResult=true

    for (let i=0; i<array.length;i++){
        tempResult= new RegExp(pttn).test(array[i])
        if(!tempResult){
            break
        }
    }
    return tempResult
}
const valNone=()=>{
  return true
}

const shopSignUpState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อร้าน"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสร้าน"},
  ownerName:    {stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อเจ้าของ"},
  ownerPassword:{stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสเ้จ้าของ"},
  ownerEmail:   {stType:"string", validate:valBasic,  pattern:patternEmail, lb:"อีเมล"},
}

const shopLogInState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อร้าน"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสร้าน"},
}

const shopChangePasswordState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อร้าน"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสร้าน"},
  newPassword1: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสร้านใหม่"},
  newPassword2: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสร้านใหม่อีกรั้ง"},
}

const addUserState={
  id:       {stType:"string", validate:valBasic,  pattern:patternNumber, lb:"ไอดี"},
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"ยูสเซอร์เนม"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัส"},
  userLevel:{stType:"string", validate:valBasic,  pattern:patternString, lb:"กลุ่มผู้มีสิทธิ์"},
  name:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อ"},
  surname:  {stType:"string", validate:valBasic,  pattern:patternString, lb:"สกุล"},
}

const logInState={
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"ยูสเซอร์เนม"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัส"},
}

const changePasswordState={
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"ยูสเซอร์เนม"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัส"},
  newPassword1: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสใหม่"},
  newPassword2: {stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสใหม่อีกครั้ง"},
}


const partnerState={
  id: {stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสคู่ค้า"},
  title:{stType:"string", validate:valBasic,  pattern:patternString, lb:"คำนำหน้า"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อ"},

  phone:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"โทรศัพท์"},
  partnerType:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ประเภทคู่ค้า"},
  //arrayNumber
  address:{stType:"arrayObject",stChildren:{
    number:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ที่อยู่"},
    tambon:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ตำบล"},
    district:{stType:"string", validate:valBasic,  pattern:patternString, lb:"อำเภอ"},
    province:{stType:"string", validate:valBasic,  pattern:patternString, lb:"จังหวัด"},
    postcode:{stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสไปรษณีย์"},
  }},

  file1:{stType:"file",validate:valNone,pattern:null, lb:"ไฟล์1"},
  photoUrl1:{stType:"array",  validate:valArray,    patternFileName, lb:"รูป1"},
  //partnerType:{stType:"string",  validate:valBasic,     pattern:patternString, lb:""},
  remark:{stType:"string",  validate:valBasic,     pattern:patternString, lb:"หมายเหตุ"},
}

const groupState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสประเภทคู่ค้า"},
  newId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสประเภทคู่ค้าใหม่"},
  groupName:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ประเภทคู่ค้า"},
  children:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"ลูก"},
  parentId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ไอดีแม่"},
  newParentId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ไอดีแม่ใหม่"},

  allDeleteId:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"ไอดีต้องลบ"},
  parentGroup:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:""},
  mainGroup:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"กลุ่มหลัก"},

}

const productState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสสินค้า"},
  barcode:{stType:"string", validate:valBasic,  pattern:patternString, lb:"บาร์โค้ด"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อสินค้า"},
  
  groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสกลุ่มสินค้า"},
  groupName:{stType:"string", validate:valBasic,  pattern:patternString, lb:"กลุ่มสินค้า"},

  unit:{stType:"string", validate:valBasic,  pattern:patternString, lb:"หน่วย"},

  price:{stType:"number", validate:valBasic, pattern:patternNumber, lb:"ราคา"},

  priceLevel:{stType:"arrayObject",stChildren:{
    price:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ราคาย่อย"},
    remark:{stType:"string", validate:valBasic, pattern:patternString, lb:"หมายเหต"},
    }
  },

  remark:{stType:"string", validate:valBasic,  pattern:patternString, lb:"หมายเหตุ"},
  isRawMat:{stType:"boolean", validate:valBasic,  pattern:patternBoolean,  stDefault:true, lb:"เป็นวัตถุดิบ"},

  detail:{stType:"arrayObject",stChildren:{
    _id:{stType:"string", validate:valBasic, pattern:patternString, lb:"_id"},
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสสินค้า"},
    barcode:{stType:"string", validate:valBasic, pattern:patternString, lb:"บาร์โค้ด"},
    name:{stType:"string", validate:valBasic, pattern:patternString, lb:"ชื่อสินค้า"},
    groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสกลุ่มสินค้า"},
    groupName:{stType:"string", validate:valBasic, pattern:patternString, lb:"กลุ่มสินค้า"},
    unit:{stType:"string", validate:valBasic, pattern:patternString, lb:"หน่วย"},
    price:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ราคา"},
    quantity:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน"},
    result:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รวม"},
    remark:{stType:"string",  validate:valBasic,  pattern:patternString, lb:"หมายเหตุ"},
    isRawMat:{stType:"boolean", validate:valBasic,  pattern:patternBoolean,  stDefault:true, lb:"เป็นวัตถุดิบ"},
  }},//////////////////

  stock:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"สต็อก"},
  order:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จอง"},
  plan:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"แผน"},

  file1:{stType:"file",validate:valNone,pattern:null, lb:"ไฟล์1"},
  photoUrl1:{stType:"array",  validate:valArray,    pattern:patternFileName, lb:"รูป1"},
}

const basicDataState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัส"},
  title:{stType:"array", validate:valArray, pattern:patternString, lb:"คำนำหน้า"},
  unit:{stType:"array", validate:valArray, pattern:patternString, lb:"หน่วย"},
  userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"กลุ่มผู้มีสิทธิ์"},
  partnerType:{stType:"array", validate:valArray, pattern:patternString, lb:"ประเภทคู่ค้า"},

  transactionType:{stType:"arrayObject",stChildren:{
    groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสกลุ่ม"},
    groupName:{stType:"string",  validate:valBasic,  pattern:patternNumber, lb:"ชื่อกลุ่ม"},
    effectStock:{stType:"string", validate:valArray, pattern:patternString, lb:"กระทบสต็อก"},
    effectOrder:{stType:"string", validate:valArray, pattern:patternString, lb:"กระทบจอง"},
    effectPlan:{stType:"string", validate:valArray, pattern:patternString, lb:"กระทบแผน"},
  }},
  /*transactionStatus:{stType:"array", validate:valArray, pattern:patternString, lb:""},*/
  effectStock:{stType:"array", validate:valArray, pattern:patternString, lb:"กระทบสต็อก"},
  effectOrder:{stType:"array", validate:valArray, pattern:patternString, lb:"กระทบจอง"},
  effectPlan:{stType:"array", validate:valArray, pattern:patternString, lb:"กระทบแผน"},

  routeAuth:{stType:"arrayObject",stChildren:{
      id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัส"},
      routeAddress:{stType:"string", validate:valBasic, pattern:patternString, lb:"url"},
      routeName:{stType:"string", validate:valBasic, pattern:patternString, lb:"ชื่อสิทธิ์"},
      userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"กลุ่มผู้มีสิทธิ์"},
  }}

}

const routeAuthState={
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัส"},
    routeAddress:{stType:"string", validate:valBasic, pattern:patternString, lb:"url"},
    routeName:{stType:"string", validate:valBasic, pattern:patternString, lb:"ชื่อสิทธิ์"},
    userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"กลุ่มผู้มีสิทธิ์"},
}

const jobState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
  dateIn:{stType:"date",  validate:valBasic,  pattern:patternDate, lb:""},
  dateTarget:{stType:"date",  validate:valBasic,  pattern:patternDate, lb:""},
  dateOut:{stType:"date",  validate:valBasic,  pattern:patternDate, lb:""},

  file1:{stType:"file",validate:valNone,pattern:null, lb:""},
  photoUrl1:{stType:"array",  validate:valArray,    patternFileName, lb:""},
  
  file2:{stType:"file",validate:valNone,pattern:null, lb:""},
  photoUrl2:{stType:"array",  validate:valArray,    patternFileName, lb:""},

  jobType:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  jobStatus:{stType:"string", validate:valBasic,  pattern:patternString, stDefault:"ยังไม่ทำ"},

  customerId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
  title:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  surname:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  phone:{stType:"array", validate:valArray, pattern:patternString, lb:""},

  remark:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},

  /*
  jobValue:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
  progress:{stType:"number",  validate:valBasic,  pattern:patternNumber,},
  progressByValue:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},

   price:{stType:"object",stChildren:{
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    price:{stType:"number", validate:valBasic, pattern:patternString, lb:""},
    remark:{stType:"string", validate:valBasic, pattern:patternString, lb:""}
  }},{stType:"arrayObject",stChildren:{
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    productId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    barcode:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
    name:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
    groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    unit:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
    price:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    quantity:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:""},
    remark:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
    pic:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
    jobDetailStatus:{stType:"string", validate:valBasic,  pattern:patternString,stDefault:"ยังไม่ทำ"},

  }}
  */
}


const transactionState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสเอกสาร"},
  newId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสเอกสารใหม่"},

  date:{stType:"date",  validate:valBasic,  pattern:patternDate, lb:"วันที่"},

  groupName:{stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสประเภทเอกสาร"},
  groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ประเภทเอกสาร"},

  /*
  transactionStatus:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  transactionType:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
  */

  effectStock:{stType:"string", validate:valBasic,  pattern:patternString, lb:"กระทบสต็อก"},
  effectOrder:{stType:"string", validate:valBasic,  pattern:patternString, lb:"กระทบจอง"},
  effectPlan:{stType:"string", validate:valBasic,  pattern:patternString, lb:"กระทบแผน"},

  file1:{stType:"file",validate:valNone,pattern:null, lb:"ไฟล์1"},
  photoUrl1:{stType:"array",  validate:valArray,    pattern:patternFileName, lb:"รูป1"},

  partnerId: {stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสคู่ค้า"},
  title:{stType:"string", validate:valBasic,  pattern:patternString, lb:"คำนำหน้า"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ชือ"},

  phone:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"โทรศัพท์"},

  //arrayNumber
  address:{stType:"arrayObject",stChildren:{
    number:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ที่อยู่"},
    tambon:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ตำบล"},
    district:{stType:"string", validate:valBasic,  pattern:patternString, lb:"อำเภอ"},
    province:{stType:"string", validate:valBasic,  pattern:patternString, lb:"จังหวัด"},
    postcode:{stType:"string", validate:valBasic,  pattern:patternString, lb:"รหัสไปรษณีย์"},
  }},////////

  remark:{stType:"string",  validate:valBasic,     pattern:patternString, lb:"หมายเหตุ"},

  total:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รวม"},
  reduction:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ส่วนลด"},
  grandTotal:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"สุทธิ"},

  detail:{stType:"arrayObject",stChildren:{
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสสินค้า"},
    barcode:{stType:"string", validate:valBasic, pattern:patternString, lb:"บาร์โค้ด"},
    name:{stType:"string", validate:valBasic, pattern:patternString, lb:"ชื่อสินค้า"},
    groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รหัสกลุ่มสินค้า"},
    groupName:{stType:"string", validate:valBasic, pattern:patternString, lb:"กลุ่มสินค้า"},
    unit:{stType:"string", validate:valBasic, pattern:patternString, lb:"หน่วย"},
    price:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ราคา"},
    quantity:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน"},
    result:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"รวม"},
    remark:{stType:"string",  validate:valBasic,  pattern:patternString, lb:"หมายเหตุ"},
    isRawMat:{stType:"boolean", validate:valBasic,  pattern:patternBoolean,  stDefault:true, lb:"เป็นวัตถุดิบ"},
  }},
}

const transactionLogState={
  ...transactionState,
  status:{stType:"string", validate:valBasic,  pattern:patternString, lb:""},
}

const billDetailState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ชื่อ"},
  quantity:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน"},
  quantity2:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน2"},
  quantity3:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน3"},
  quantity4:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน4"},
  quantity5:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"จำนวน5"},
}



const StateTemplate={
  shopSignUpState,shopLogInState,shopChangePasswordState,
  addUserState,logInState,changePasswordState,
  partnerState,
  groupState,productState,
  basicDataState,routeAuthState,
  jobState,transactionState,
  transactionLogState,
  billDetailState
}

export default StateTemplate
