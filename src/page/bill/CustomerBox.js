import { LeakAddTwoTone } from '@material-ui/icons'
import React from 'react'

export default function CustomerBox() {
console.log("CustomerBox")
  
let [inputState,setInputState]=React.useState(null)

const basicData={
    billStatus:["aaa"],
    billType:["bbb"]
}

const handleInput=(myvalue,key)=>{
    const temp={...inputState,[key]:myvalue}
    setInputState(temp)
}
React.useEffect(()=>{
    console.log('inputState')
    console.log(inputState)
},[inputState])

const billTemplate = [
    {lb:"ประเภทเอกสาร",key:"id",type:"select",selectDataKey:"basicData",selectObj:'billType'},
    {lb:"รหัสเอกสาร",key:"id",type:"text"},
    {lb:"วันที่",key:"วันที่",type:"date"},
    {lb:"รหัสเอกสาร",key:"id",type:"text"},
    {lb:"ชื่อเอกสาร",key:"billname",type:"text"},    
    {lb:"สาขา",key:"branch",type:"text"},
    {lb:"แอคทีฟ",key:"active",type:"text"},
    {lb:"วันที่แจ้งเตือน",key:"reminddate",type:"date"},
    {lb:"สถานะเอกสาร",key:"id",type:"select",selectDataKey:"basicData",selectObj:'billStatus'},
]


const renderInput=(i)=>{
    const {lb,key,type,use} = i
return(
<div className="w-100 flex-center-center">
    <div className="w-40">
        <p className="bill-p">{lb}</p>
    </div>
    <div className="w-40">
        <input type="text"
            onChange={e=>{
                handleInput(e.target.value,key)
                console.log(e.target.value)
            }}
        />
    </div>
</div>
)
}

const renderSelect=(i)=>{
    const {lb,key,type,use,selectDataKey,selectObj} = i

    return (
    <div className="w-100 flex-center-center">
        <div className="w-40">
            <p className="bill-p">{lb}</p>
        </div>
        <div className="w-40">
            <select>
                <option>sdfdsf</option>
            </select>
        </div>
    </div>
    )
}

return (
        <div className="w-100 h-100" style={{overflowY:"auto"}}>

            {
                billTemplate.map(i=>{
                    if(i.type=="select"){
                        return renderSelect(i)
                    }
                    else {
                        return renderInput(i)
                    }
                })
            }
          
        </div>
    )
}


