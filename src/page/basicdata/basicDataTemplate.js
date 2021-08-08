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
    /*
    transactionStatus:{
        lb:'สถานะเอกสาร', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    */
    effectStock:{
        lb:'กระทบสต็อก', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    effectOrder:{
        lb:'กระทบจอง', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    effectPlan:{
        lb:'กระทบแผน', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    routeAuth:{
        lb:'สิทธิ์ผู้ใช้',    
        templateType:"arrayObject", 
        //cName:["xc12 p-1 bd-lightGray","form-row flex-justify-start flex-align-stretch"], 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc12 div-center","xc12 p-2 div-start"], 

        placeholder:'',
        subFormTemplate:{

            id:{
                    lb:'รหัส', 
                    templateType:"string" , 
                    cName:"xc6 sc12 p-1",  
                    subCName:["xc4 div-center","xc8 div-start"], 
                    inputType:"number", 
                    placeholder:'', 
                    autoFocus:"autoFocus"
                },
                routeAddress:{
                    lb:'url', 
                    templateType:"string" , 
                    cName:"xc6 sc12 p-1",  
                    subCName:["xc4 div-center","xc8 div-start"], 
                    inputType:"text", 
                    placeholder:'', 
                },
                routeName:{
                    lb:'ชื่อสิทธิ์', 
                    templateType:"string" , 
                    cName:"xc6 sc12 p-1",  
                    subCName:["xc4 div-center","xc8 div-start"], 
                    inputType:"text", 
                    placeholder:'', 
                },
                userLevel:{
                    lb:'ระดับผู้ใช้', 
                    templateType:"array" , 
                    cName:"xc6 sc12 p-1",  
                    subCName:["xc4 div-center","xc8 div-start"], 
                    //inputType:"text",
                    inputType:"select", 
                    placeholder:'', 
                    selectDataKey:"basicData",
                    selectObj:'userLevel'
                }



        }
    }





}

const BasicDataTemplate={basicDataForm}

export default BasicDataTemplate
