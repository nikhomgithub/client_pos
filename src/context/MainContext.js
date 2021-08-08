import React from 'react'
import axios from 'axios';

export const MainContext=React.createContext();

const MainContextProvider=(props)=>{
    console.log('MainContext....')
  
    const [tokenSt,setTokenSt] = React.useState({
        reloadCheckToken:true,
        haveShopToken:false,
        haveUserToken:false,
        userName:null
    })

    const [basicDataSt,setBasicDataSt]=React.useState({
        reloadBasicData:true,
        basicData:null
    })

    const myheader={headers: {'Content-Type': 'application/json',
    'Shopauthorization':localStorage.getItem('shopauthorization'),
    'Userauthorization':localStorage.getItem('userauthorization')
    }}
    

    const setReloadCheckToken=(value)=>{
        const tempSt={...tokenSt,reloadCheckToken:true}
        setTokenSt(tempSt)
    }

    React.useEffect(()=>{
        const {
            reloadCheckToken,
            haveShopToken,
            haveUserToken,
            userName
        }=tokenSt
        
        let tempSt={...tokenSt}

        if(reloadCheckToken){

            if(localStorage.getItem('shopauthorization')){
                tempSt={...tempSt,haveShopToken:true}
            }
            else{
                tempSt={...tempSt,haveShopToken:false}
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')
            }

            if(localStorage.getItem('userauthorization')&&
            localStorage.getItem('username')){
                
                tempSt={...tempSt,
                        haveUserToken:true,
                        userName:localStorage.getItem('username')
                    }
                }
            else{
                
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')

                tempSt={...tempSt,
                    haveUserToken:false,
                    userName:null
                }
            }
            tempSt={...tempSt,
                reloadCheckToken:false
            }
            setTokenSt(tempSt)
        }
    },[tokenSt])

    const setReloadBasicData=(value)=>{
        const tempSt={ ...basicDataSt,reloadBasicData:true}
        setBasicDataSt(tempSt)
    }

    React.useEffect(()=>{  
        const {reloadBasicData,basicData}=basicDataSt
        let tempSt
        if(reloadBasicData){

            if(localStorage.getItem('shopauthorization')&&
               localStorage.getItem('userauthorization')


            //to ensure user&shop token in place before request to server
            ){


                axios.post('/p27basicdata/getcustom',
                {},myheader
                )
                .then(result=>{
                    
                    tempSt={...basicDataSt,
                        reloadBasicData:false,
                        basicData:result.data.data[0]
                    }
                    setBasicDataSt(tempSt)
                    //console.log(result.data.data[0])
                })
                .catch(err=>{
                    //console.log(err)
                    tempSt={...basicDataSt,
                        reloadBasicData:false
                    }
                    setBasicDataSt(tempSt)
                })
            }
        }
    },[basicDataSt])



//=========================================
//==================================
return(
        <MainContext.Provider value={
            {
               //allTableTemplate,
               myheader,
               tokenSt,setTokenSt,
               setReloadCheckToken,
               basicDataSt,
               setReloadBasicData
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
