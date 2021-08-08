import React from 'react'
import Calendar from '../../component/calendar/Calendar'

export default function BillBox(props) {
console.log("BillBox")
const {data,template,basicData} = props

let [inputState,setInputState]=React.useState(data)
//console.log('data')
//console.log(data)

const handleInput=(myvalue,key)=>{
    const temp={...inputState,[key]:myvalue}
    setInputState(temp)
}
React.useEffect(()=>{
    //console.log('inputState')
    //console.log(inputState)
},[inputState])

React.useEffect(()=>{
    setInputState(data)
},[data])

const returnInputData=(key,type)=>{
    

    if(inputState){
        if(type=="date"){
            return data[key].substring(0,10)
        }
        else {
            return inputState[key]
        }
    }
    else{
        return ""
    }
}

const renderInput=(i,idx)=>{
    const {lb,key,type,use} = i
return(
<div className="w-100 flex-center-center" key={idx}>
    <div className="w-40">
        <p className="billp">{lb}</p>
    </div>
    <div className="w-60">
        {type=="date"
        ?<Calendar
            style={{height:"1.6rem"}}
            onMyClick={
            (e)=>{
                handleInput(e,key)
                //setInputState({...inputState,[key]:e})
            }
            }
            value={returnInputData(key,type)}
        />

        :<input type="text"
            value={returnInputData(key)}
            onChange={e=>{
                handleInput(e.target.value,key)
                console.log(e.target.value)
            }}
        />
        }
    </div>
</div>
)
}

/*
const renderSelect=(i)=>{
    console.log(i)
    console.log(basicData[i.selectObj])
}
*/

const renderSelect=(i,idx)=>{
    const {lb,key,type,use,selectDataKey,selectObj} = i
    
    const renderOption=(array)=>{
        if(array){
            return array.map((i,idx2)=>
            <option key={idx2}>{i}</option>
            )
        }
        else {
            return null
        }
    }

    return (
    <div className="w-100 flex-center-center" key={idx}>
        <div className="w-40">
            <p className="billp">{lb}</p>
        </div>
        <div className="w-60">
            <select
            >
                <option>เลือกจากรายการ</option>

            {   
                renderOption(basicData[selectObj])
            }
            </select>
        </div>
    </div>
    )

}

return (
        <div className="w-100 h-100" style={{overflowY:"auto"}}>

            {
                template.map((i,idx)=>{
                    if(i.type=="select"){
                        return renderSelect(i,idx)
                    }
                    else {
                        return renderInput(i,idx)
                    }
                })
            }
          
        </div>
    )
}


