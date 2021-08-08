import React from 'react';
import './Calendar.css';

import {FaRegCalendarAlt} from 'react-icons/fa';

//==================
function Calendar(props) {

const {onMyClick,value,style,styleIcon}=props

const months=[
    "มค","กพ","มีค","เมย","พค","มิย",
    "กค","สค","กย","ตค","พย","ธค"
]

const days=[
    "อา","จ","อ","พ","พฤ","ศ","ส"
]


const datePattern=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/gi

const valDate= (pttn,str)=>{
    return new RegExp(pttn).test(str)
}



const convertNewDateToString=(newDate)=>{
        const temp =newDate.toString()

        let tempMonth=temp.substring(4,7)
        if(tempMonth=="Jan"){tempMonth="01"}
        else if(tempMonth=="Feb"){tempMonth="02"}
        else if(tempMonth=="Mar"){tempMonth="03"}
        else if(tempMonth=="Apr"){tempMonth="04"}
        else if(tempMonth=="May"){tempMonth="05"}
        else if(tempMonth=="Jun"){tempMonth="06"}
        else if(tempMonth=="Jul"){tempMonth="07"}
        else if(tempMonth=="Aug"){tempMonth="08"}
        else if(tempMonth=="Sep"){tempMonth="09"}
        else if(tempMonth=="Oct"){tempMonth="10"}
        else if(tempMonth=="Nov"){tempMonth="11"}
        else if(tempMonth=="Dec"){tempMonth="12"}

        const tempDate=temp.substring(8,10)
        const tempYear=temp.substring(11,15)

        const tempNewDate=`${tempYear}-${tempMonth}-${tempDate}`

        return tempNewDate
}


const genDate=(value)=>{
    const tempValue=value
    //const tempValue = value.toString()
    if(valDate(datePattern,tempValue)){
        return tempValue
    }
    else {
        return convertNewDateToString(new Date())
    }

}

let [date,setDate]=React.useState(new Date(genDate(value)))

const [showCalendar,setShowCalendar]=React.useState(false)

const getSelectedDateThisMonth=(i,date)=>{
    let temp=date.setDate(i)
    temp=new Date(temp)
    setDate(temp)
    temp=convertNewDateToString(temp)
    onMyClick(temp)
}

const genThaiFullDate=(date)=>{
    if(valDate(datePattern,date)){

        const thaiMonths=[
            "มค","กพ","มีค","เมย","พค","มิย",
            "กค","สค","กย","ตค","พย","ธค",
        ]

        const tempYear=parseInt(date.substring(0,4))+543

        let tempMonth=parseInt(date.substring(5,7))
        tempMonth=thaiMonths[tempMonth-1]
        let tempDate=date.substring(8,10)

        const temp=`${tempDate} ${tempMonth} ${tempYear}`
        return temp
    }
    else {
        return "ไม่ระบุ"
    }
    /*
        const thaiDays=[
            "อา","จ","อ","พ","พฤ","ศ","ส"
        ]
       
        const thaiMonth=thaiMonths[date.getMonth()]
        const thaiDay=thaiDays[date.getDay()]
        const thaiYear=date.getFullYear()+543
        const thaiDate=date.getDate()
        const temp=`${thaiDay} ${thaiDate} ${thaiMonth} ${thaiYear}`
        return temp
        */
}

const genThaiMonth=(date)=>{
    const thaiMonths=[
        "มค","กพ","มีค","เมย","พค","มิย",
        "กค","สค","กย","ตค","พย","ธค",
    ]
    const thaiMonth=thaiMonths[date.getMonth()]
    const thaiYear=date.getFullYear()+543

    const temp=`${thaiMonth} ${thaiYear}`
    return temp
}

const genPrevMonthDay=(date)=>{
    const lastFullDayPrevMonth=new Date(date.getFullYear(),date.getMonth(),0)
    const lastDayPrevMonth=lastFullDayPrevMonth.getDay()
    const lastDatePrevMonth=lastFullDayPrevMonth.getDate()

    let prevMonthDay =[]
    for (let i=lastDatePrevMonth-lastDayPrevMonth;i<=lastDatePrevMonth;i++){
        prevMonthDay=[...prevMonthDay,i]
    }
    return prevMonthDay
}

const genThisMonthDay=(date)=>{
    const lastDate=new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
    let thisMonthDay=[]
    for (let j=1;j<=lastDate;j++){
        thisMonthDay=[...thisMonthDay,j]
    }
    return thisMonthDay
}

const genNextMonthDay=(date)=>{
    const lastFullDayThisMonth=new Date(date.getFullYear(),date.getMonth()+1,0)
    const lastDayThisMonth=lastFullDayThisMonth.getDay()

    let nextMonthDay=[]
    for (let k=1;k<=6-lastDayThisMonth;k++){
        nextMonthDay=[...nextMonthDay,k]
    }
    return nextMonthDay
}

//==================================
return (
    !showCalendar
    ?<div style={{width:"100%",height:"100%",backgroundColor:"white",
                  display:"flex",justifyContent:"flex-start",alignItems:"center",
                  borderRadius:"5px 5px",
                  ...style
    }}>
        <FaRegCalendarAlt style={styleIcon}
            onClick={e=>setShowCalendar(true)}
        />
        {genThaiFullDate(value)}

    </div>
    :<div className="container" style={{width:"100vw",height:"100vh"}}>
        <div className="calendar">
            <div className="month">
  
                <div className="arrow"
                      onClick={e=>{
                        let temp=date.setFullYear(date.getFullYear()-1)
                        temp=new Date(temp)
                        setDate(temp)
                      }}
                 >
                    <i>&lt;&lt;</i>
                </div>



                <div className="arrow"
                      onClick={e=>{
                        let temp=date.setMonth(date.getMonth()-1)
                        temp=new Date(temp)
                        setDate(temp)
                      }}
                 >
                    <i>&lt;</i>
                </div>


                <div className="date">
                    <p>{genThaiMonth(date)}</p>
                </div>
               
                <div className="arrow"
                      onClick={e=>{
                        let temp=date.setMonth(date.getMonth()+1)
                        temp=new Date(temp)
                        setDate(temp)
                      }}
                >
                    <i>&gt;</i>
                </div>

                <div className="arrow"
                      onClick={e=>{
                        let temp=date.setFullYear(date.getFullYear()+1)
                        temp=new Date(temp)
                        setDate(temp)
                      }}
                >
                    <i>&gt;&gt;</i>
                </div>

            </div>
            <div className="weekdays">
                {
                    days.map((i,index)=>{
                        return(
                            <div key={index}>{i}</div>
                        )        
                    })
                }
            </div>
            <div className="days">
                
                {
                genPrevMonthDay(date).map((i,index)=>(
                    <div key={index} className="prev-date">
                        {i}
                    </div>
                ))
                }

                {
                genThisMonthDay(date).map((i,index)=>(
                    <div key={index} 
                         className={i==date.getDate()?"today":null}
                         onClick={e=>{
                            getSelectedDateThisMonth(i,date)
                            setShowCalendar(false)
                        }}
                    >
                        {i}
                    </div>
                ))
                }
                
                {
                genNextMonthDay(date).map((i,index)=>(
                    <div key={index} className="next-date">
                        {i}
                    </div>
                ))
                }
            </div>   
        </div>
    </div>
  );
}


Calendar.defaultProps={
    onMyClick:()=>{}
}

export default Calendar;
