import React from 'react';
import MainContext from '../../context/MainContext'

function test() {
    //const {basicData,setBasicData}=React.useContext(MainContext)

}

const testForm={
    id:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    date:{
        lb:'วันที่', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"thaiDate", 
        placeholder:'', 
    },
    title:{
        lb:'คำนำหน้า', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'title'
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    password:
    {   lb:'รหัสร้าน', 
        templateType:"string" , 
        cName:"xc6 sc12 p-2 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    icon:{
        lb:"กลุ่มคู่ค้า",
        templateType:"icon",
        cName:"xc4 sc12 p-1",  
        subCName:["xc6 div-center","xc6 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    groupId:{
        lb:'รหัสกลุ่ม', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
    groupName:{
        lb:'ประเภทกลุ่ม', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
        unchangeable:true
    },
    isRawMat:{
        lb:'เป็นวัตถุดิบ', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"checkbox", 
        placeholder:'', 
    },
    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    },
    phone:{
        lb:'โทรศัพท์', 
        templateType:"array" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    address:{
        lb:'ที่อยู่รอง',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            number:{
                lb:'เลขที่', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            tambon:{
                lb:'ตำบล', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            }
          
        }
      
    }, 
    mainaddress:{
        lb:'ที่อยู่หลัก',    
        templateType:"object", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            number:{
                lb:'เลขที่', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            tambon:{
                lb:'ตำบล', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            }
        }
      
    }, 
    detail:{
        lb: "รายละเอียด",
        templateType:"arrayObjectInTable",
        cName:"",
        subFormTemplate:{
          
          icon:{
            templateType:"icon",
            subCName:[60],
            inputType:"icon",
            iconActionIdx:1,
          },
          
          id:{
            lb:"ไอดี",
            templateType:"number",
            subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          barcode:{
            lb:"บาร์โค้ด",
            templateType:"string",
            subCName:[100,""],
            inputType:"text",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",0,"quantity"],lastKey:null}
          },
          name:{
            lb:"ชื่อ",
            templateType:"string",
            subCName:[240,""],
            inputType:"text",
            placeholder:"", 
          },

          groupId:{
            lb:"ไอดีกลุ่ม",
            templateType:"number",
            subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          groupName:{
            lb:"ชื่อกลุ่ม",
            templateType:"string",
            subCName:[90,""],
            inputType:"text",
            placeholder:"", 
          },
          quantity:{
            lb:"จำนวน",
            templateType:"string",
            subCName:[60,""],
            inputType:"number",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",1,"barcode"],lastKey:"endForm"}
          },

          unit:{
            lb:"หน่วย",
            templateType:"string",
            subCName:[80,""],
            inputType:"select",
            placeholder:"", 
            //selectObj:["นาย","นาง"]
            selectDataKey:"basicData",
            selectObj:'unit'
          },
          price:{
            lb:"ราคา",
            templateType:"string",
            subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          result:{
            lb:"รวม",
            templateType:"string",
            subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          remark:{
            lb:"หมายเหตุ",
            templateType:"string",
            subCName:[200,""],
            inputType:"text",
            placeholder:"", 
          },
          isRawMat:{
            lb:"เป็นวัตถุดิบ",
            templateType:"boolean",
            subCName:[40,""],
            inputType:"checkbox",
            placeholder:"", 
          }
        }
      }
}

const shopSignUpForm={
    shopName:
        {  lb:'ชื่อร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'รหัสร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    ownerName:
        {   lb:'ชื่อผู้ใช้', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
        },
    ownerPassword:
        {   lb:'รหัสผู้ใช้', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    ownerEmail: {  
            lb:'อีเมลผู้ใช้', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'',   
        },     
}

//====================

const shopLogInForm={
    shopName:
        {  lb:'ชื่อร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'รหัสร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },

}

//=======================
const shopChangePasswordForm={
    shopName:
        {   lb:'ชื่อร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'รหัสร้าน', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    newPassword1:
        {   lb:'รหัสร้านใหม่', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    newPassword2:
        {   lb:'ยืนยันรหัสร้านใหม่', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
}

const addUserForm={
    id:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    username:{
        lb:'ยูสเซอร์เนม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:''
    },
    password:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    userLevel:{
        lb:'ระดับผู้ใช้', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        //selectObj:["นาย","นาง"]
        selectDataKey:"basicData",
        selectObj:'userLevel'
    },
    name:{
        lb:'ชื่อจริง', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    surname:{
        lb:'นามสกุล', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }
}

const logInForm={
    username:{
        lb:'ยูสเซอร์เนม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'',
        autoFocus:"autoFocus"
    },
    password:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    }    
}

const changePasswordForm={
    username:{
        lb:'ยูสเซอร์เนม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    password:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    newPassword1:{   
        lb:'รหัสใหม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    newPassword2:{   
        lb:'ยืนยันรหัสใหม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
}

const partnerForm={
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    title:{
        lb:'คำนำหน้า', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'title'
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    phone:{
        lb:'โทรศัพท์', 
        templateType:"array" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },

    //=====================
    icon:{
        lb:"กลุ่มคู่ค้า",
        templateType:"icon",
        cName:"xc4 sc12 p-1",  
        subCName:["xc6 div-center","xc6 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },

    partnerType:{
        lb:'ประเภทคู่ค้า', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'partnerType'
        //disabled:"disabled"
    },
    //==============================
    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    },
    address:{
        lb:'ที่อยู่',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            number:{
                lb:'เลขที่', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            tambon:{
                lb:'ตำบล', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            district:{
                lb:'อำเภอ', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            province:{
                lb:'จังหวัด', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            postcode:{
                lb:'รหัสไปรษณีย์', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
        }
      
    }, 
}

const groupForm={
    id:{
        lb:'ไอดีกลุ่มสินค้า', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    groupName:{
        lb:'ชื่อกลุ่มสินค้า', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    /*
    children:{
        lb:'ไอดีกลุ่มย่อย', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },*/
    parentId:{
        lb:'ไอดีกลุ่มแม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
}
//===============================
const groupEditForm={
    id:{
        lb:'ไอดีกลุ่มสินค้า', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        disabled:"disabled"
    },
    newId:{
        lb:'ไอดีกลุ่มสินค้าใหม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },

    groupName:{
        lb:'ชื่อกลุ่มสินค้า', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    /*
    children:{
        lb:'ไอดีกลุ่มย่อย', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },*/
    parentId:{
        lb:'ไอดีกลุ่มแม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        disabled:"disabled"
    },
    newParentId:{
        lb:'ไอดีกลุ่มแม่ใหม่', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
}
//================================
const productWithoutDetailForm={
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    barcode:{
        lb:'บาร์โค้ด', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    groupId:{
        lb:'ไอดีกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    groupName:{
        lb:'ชื่อกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    unit:{
        lb:'หน่วย', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'unit'
    },

    isRawMat:{
        lb:'เป็นวัตถุดิบ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"checkbox", 
        placeholder:'', 
    },
    
    stock:{
        lb:'ยอดสต็อค', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    order:{
        lb:'ยอดจอง', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },

    price:{
        lb:'ราคาต่อหน่วย',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            price:{
                lb:'ราคา', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"number", 
                placeholder:'', 
            },
            remark:{
                lb:'หมายเหตุ', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
    }},        

    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    }, 

}
//======================================
const productForm={
    
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    barcode:{
        lb:'บาร์โค้ด', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    isRawMat:{
        lb:'เป็นวัตถุดิบ', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"checkbox", 
        placeholder:'', 
    },
    //==================

    icon:{
        lb:"กลุ่มสินค้า",
        templateType:"icon",
        cName:"xc6 lc6 sc12 p-1",  
        subCName:["xc6 div-center","xc6 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    groupId:{
        lb:'ไอดีกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //unchangeable:true
        //disabled:"disabled"
    },
    groupName:{
        lb:'ชื่อกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //unchangeable:true
        //disabled:"disabled"
    },
    //==========================

    price:{
        lb:'ราคา', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
    unit:{
        lb:'หน่วย', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'unit'
    },
    
    stock:{
        lb:'ยอดสต็อค', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    order:{
        lb:'ยอดจอง', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    plan:{
        lb:'ยอดแผน', 
        templateType:"string" , 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    //========================
    priceLevel:{
        lb:'ระดับราคา',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 lc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            price:{
                lb:'ราคา', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 div-start"], 
                inputType:"number", 
                placeholder:'', 
            },
            remark:{
                lb:'หมายเหตุ', 
                templateType:"string" , 
                cName:"xc12 sc12 p-1 bd-lightGray",  
                subCName:["xc4 alignSelfStart","xc8 div-start"], 
                inputType:"textarea", 
                placeholder:'', 
                textRow:1
            }, 
        }
    },

    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 lc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:5
    }, 
    //======================
    
    detail:{
        lb: "รายละเอียด",
        templateType:"arrayObjectInTable",
        cName:"xc12 lc12 sc12",
        subFormTemplate:{
          icon:{
            templateType:"icon",
            subCName:[60],
            inputType:"icon",
            iconActionIdx:1,
          },
          id:{
            lb:"ไอดี",
            templateType:"number",
            subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          barcode:{
            lb:"บาร์โค้ด",
            templateType:"string",
            subCName:[100,""],
            inputType:"text",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",0,"quantity"],lastKey:null}
          },
          name:{
            lb:"ชื่อ",
            templateType:"string",
            subCName:[240,""],
            inputType:"text",
            placeholder:"", 
          },

          groupId:{
            lb:"ไอดีกลุ่ม",
            templateType:"number",
            subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          groupName:{
            lb:"ชื่อกลุ่ม",
            templateType:"string",
            subCName:[90,""],
            inputType:"text",
            placeholder:"", 
          },
          quantity:{
            lb:"จำนวน",
            templateType:"string",
            subCName:[60,""],
            inputType:"number",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",1,"barcode"],lastKey:"endForm"}
          },

          unit:{
            lb:"หน่วย",
            templateType:"string",
            subCName:[80,""],
            inputType:"select",
            placeholder:"", 
            //selectObj:["นาย","นาง"]
            selectDataKey:"basicData",
            selectObj:'unit'
          },
          price:{
            lb:"ราคา",
            templateType:"string",
            subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          result:{
            lb:"รวม",
            templateType:"string",
            subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          remark:{
            lb:"หมายเหตุ",
            templateType:"string",
            subCName:[200,""],
            inputType:"text",
            placeholder:"", 
          },
          isRawMat:{
            lb:"เป็นวัตถุดิบ",
            templateType:"boolean",
            subCName:[40,""],
            inputType:"checkbox",
            placeholder:"", 
          }
        }
      }
}
//====================================
const {id,...remaining}=productForm

const productEditForm = {
    id,
    newId:{
        lb:'ไอดีใหม่', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
    barcode:productForm.barcode,
    name:productForm.name,
    isRawMat:productForm.isRawMat,
    icon:productForm.icon,
    groupId:productForm.groupId,
    groupName:productForm.groupName,
    price:productForm.price,
    unit:productForm.unit,
    stock:productForm.stock,
    order:productForm.order,
    plan:productForm.plan,
    remark:productForm.remark,
    detail:productForm.detail,
} 


//====================================

const productDetailForm={
    
    icon:{
        lb:"ค้นหาสินค้า",
        templateType:"icon",
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 div-center","xc10 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
        
    },
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //disabled:"disabled"
    },
    barcode:{
        lb:'บาร์โค้ด', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    groupId:{
        lb:'ไอดีกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    groupName:{
        lb:'ชื่อกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    unit:{
        lb:'หน่วย', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'unit',
        //disabled:"disabled"
    },
    isRawMat:{
        lb:'เป็นวัตถุดิบ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"checkbox", 
        placeholder:'', 
        //disabled:"disabled"
    },
    quantity:{
        lb:"จำนวน", 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    }
}

const basicDataForm={
    title:{
        lb:'คำนำหน้า', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }, 
    unit:{
        lb:'หน่วย', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }, 
    userLevel:{
        lb:'ระดับผู้ใช้', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    partnerType:{
        lb:'ประเภทคู่ค้า', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    transactionType:{
        lb:'ประเภทธุรกรรม',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            groupId:{
                lb:"รหัสกลุ่ม", 
                templateType:"string" , 
                cName:"xc6 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"number", 
                placeholder:'', 
                //disabled:"disabled"
            },
            groupName:{
                lb:"ชื่อกลุ่ม", 
                templateType:"string" , 
                cName:"xc6 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
                //disabled:"disabled"
            },
            effectOrder:{
                lb:"กระทบจอง", 
                templateType:"string" , 
                cName:"xc6 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
                //disabled:"disabled"
            },
            effectPlan:{
                lb:"กระทบแผน", 
                templateType:"string" , 
                cName:"xc6 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
                //disabled:"disabled"
            },
            effectStock:{
                lb:"กระทบสต็อก", 
                templateType:"string" , 
                cName:"xc6 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
                //disabled:"disabled"
            },
        }
    },

}

const routeAuthForm={
    id:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    routeAddress:{
        lb:'url', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    routeName:{
        lb:'ชื่อสิทธิ์', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    userLevel:{
        lb:'ระดับผู้ใช้', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        //inputType:"text",
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'userLevel'
    }
}


const transactionForm={
    iconTransactiontype:{
        lb:"ค้นหาประเภทธุรกรรม",
        templateType:"icon",
        cName:"xc3 sc12 p-1",  
        subCName:["xc7 div-center","xc4 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    groupName:{
        lb:'ประเภทธุรกรรม', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc6 div-center","xc6 div-start"], 
        inputType:"text", 
        placeholder:'', 
        disabled:"disabled"
        //calculation:{method:"autoId"},
    },
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    date:{
        lb:'วันที่', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"date", 
        placeholder:'', 
    },
    /*
    groupId:{
        lb:'รหัส', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
    */

    /*
    transactionStatus:{        
        lb:'สถานะ', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'transactionStatus'
        //inputType:"text", 
        //placeholder:'', 
    },
    */
    iconPartner:{
        lb:"ค้นหาคู่ค้า2",
        templateType:"icon",
        cName:"xc3 sc12 p-1",  
        subCName:["xc7 div-center","xc4 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:1,
    },
    partnerId:{
        lb:'ไอดีคู่ค้า', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //autoFocus:"autoFocus"
    },
    title:{
        lb:'คำนำหน้า', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'title'
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    phone:{
        lb:'โทรศัพท์', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },

    address:{
        lb:'ที่อยู่',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{
            number:{
                lb:'เลขที่', 
                templateType:"string" , 
                cName:"xc4 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            tambon:{
                lb:'ตำบล', 
                templateType:"string" , 
                cName:"xc4 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            district:{
                lb:'อำเภอ', 
                templateType:"string" , 
                cName:"xc4 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            province:{
                lb:'จังหวัด', 
                templateType:"string" , 
                cName:"xc4 sc12 p-1 bd-lightGray",  
                subCName:["xc4 div-center","xc8 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
            postcode:{
                lb:'รหัสไปรษณีย์', 
                templateType:"string" , 
                cName:"xc4 sc12 p-1 bd-lightGray",  
                subCName:["xc6 div-center","xc6 p-2 div-start"], 
                inputType:"text", 
                placeholder:'', 
            },
        }
      
    }, 
    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    },
    total:{
        lb:'รวม', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        unchangeable:true,
        //calculation:{method:"total",param:["detail","price","quantity"]},
        //autoFocus:"autoFocus"
    },
    reduction:{
        lb:'ส่วนลด', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //autoFocus:"autoFocus"
    },
    grandTotal:{
        lb:'สุทธิ', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        unchangeable:true
        //calculation:{method:"grandTotal",param:["detail","price","quantity","reduction"]},
        //autoFocus:"autoFocus"
    },
    //=================
    //=================
    //=================
    detail:{
        lb: "รายละเอียด",
        templateType:"arrayObjectInTable",
        cName:"",
        subFormTemplate:{
          icon:{
            //templateType:"icon",
            //subCName:[60],
            inputType:"icon",
            iconActionIdx:2,
          },
          id:{
            //lb:"ไอดี",
            //templateType:"number",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          barcode:{
            //lb:"บาร์โค้ด",
            //templateType:"string",
            //subCName:[100,""],
            inputType:"text",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",0,"quantity"],lastKey:null}
          },
          name:{
            //lb:"ชื่อ",
            //templateType:"string",
            //subCName:[240,""],
            inputType:"text",
            placeholder:"", 
          },
          unit:{
            //lb:"หน่วย",
            //templateType:"string",
            //subCName:[80,""],
            inputType:"select",
            placeholder:"", 
            //selectObj:["นาย","นาง"]
            selectDataKey:"basicData",
            selectObj:'unit'
          },
          groupId:{
            //lb:"ไอดีกลุ่ม",
            //templateType:"number",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          groupName:{
            //lb:"ชื่อกลุ่ม",
            //templateType:"string",
            //subCName:[90,""],
            inputType:"text",
            placeholder:"", 
          },
          quantity:{
            //lb:"จำนวน",
            //templateType:"string",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",1,"barcode"],lastKey:"endForm"}
          },
          price:{
            //lb:"ราคา",
            //templateType:"number",
            //subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          result:{
            //lb:"รวม",
            //templateType:"number",
            //subCName:[100,""],
            inputType:"number",
            placeholder:"", 
            unchangeable:true,
            //calculation:{method:"multiply",param:["price","quantity"]},
            //disabled:"disabled"
          },
          remark:{
            //lb:"หมายเหตุ",
            //templateType:"string",
            //subCName:[200,""],
            inputType:"text",
            placeholder:"", 
          },
          isRawMat:{
            //lb:"เป็นวัตถุดิบ",
            //templateType:"boolean",
            //subCName:[40,""],
            inputType:"checkbox",
            placeholder:"", 
          }
        }
      }



}



const transactionDetailForm={
    
    icon:{
        lb:"ค้นหาสินค้า",
        templateType:"icon",
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 div-center","xc10 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    id:{
        lb:'ไอดี', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //disabled:"disabled"
    },
    barcode:{
        lb:'บาร์โค้ด', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    name:{
        lb:'ชื่อ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    groupId:{
        lb:'ไอดีกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    groupName:{
        lb:'ชื่อกลุ่ม', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //disabled:"disabled"
    },
    unit:{
        lb:'หน่วย', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'unit',
        //disabled:"disabled"
    },
    price:{
        lb:"ราคา", 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },

    isRawMat:{
        lb:'เป็นวัตถุดิบ', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"checkbox", 
        placeholder:'', 
        //disabled:"disabled"
    },
    quantity:{
        lb:"จำนวน", 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
    remark:{
        lb:'หมายเหตุ', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    }
}

const FormTemplate={testForm,
    shopSignUpForm,shopLogInForm,shopChangePasswordForm,
    addUserForm,logInForm,changePasswordForm,
    partnerForm,
    groupForm,groupEditForm,
    productForm,productEditForm,productDetailForm,
    basicDataForm,
    routeAuthForm,
    transactionForm,transactionDetailForm
}

export default FormTemplate
//disabled:"disabled",
