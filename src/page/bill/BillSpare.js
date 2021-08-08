import React from 'react'
import BillBox from './BillBox'
import './Bill.css'
import Table from '../../component/table/Table'
import StateUtil from '../../model/StateUtil'
import StateTemplate from '../../model/StateTemplate'
import uuid from 'react-uuid'

const {genBlankState}=StateUtil
const {billDetailState}=StateTemplate

export default function Bill() {
    console.log('Bill')

    const blankData={
        id:null,
        name:"",
        quantity:null,
        quantity2:null,
        quantity3:null,
        quantity4:null,
        quantity5:null,
        selectedLine:false
    }

    const basicData={
        title:["นาย","นาง"],
        billStatus:["เสร็จ","ไม่เสร็จ"],
        billType:["ใบจอง","ใบส่งของ"],
        customerType:["ปกติ","ร้านค้า"],
        active:["active","inactive"]
    }

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
        {lb:"แอคทีฟ",key:"id",type:"select",selectDataKey:"basicData",selectObj:'active'},
    ]

    const customerTemplate = [
        {lb:"รหัสลูกค้า",key:"customerId",type:"text"},
        {lb:"คำนำหน้า",key:"title",type:"select",selectDataKey:"basicData",selectObj:'title'},
        {lb:"ชื่อ",key:"name",type:"text"},
        {lb:"นามสกุล",key:"surname",type:"text"},
        {lb:"เบอร์โทร",key:"phone",type:"text"},
        {lb:"ประเภทลูกค้า",key:"customerType",type:"select",
         selectDataKey:"basicData",selectObj:'customerType'},
    ]

    const [tableTemplate,setTableTemplate]=React.useState({
        selectedLine           :
        { lb:'_',     type:"radio",
          width:40,   showCol:true,  showColHead:true,    
        },
        tempIndex            :
          { lb:'no',     type:"number",
            width:70,   showCol:false,  showColHead:true,    
          },
        id            :
          { lb:'ID',     type:"number",
            width:70,   showCol:true,  showColHead:true,    
          },
        name: 
          { lb: "ชื่อ",type: "text", 
           width: 150, showCol: true, showColHead: true
          },
        quantity: 
           { lb: "จำนวน",type: "number", 
            width: 150, showCol: true, showColHead: true
           },
        quantity2: 
           { lb: "จำนวน2",type: "number", 
            width: 150, showCol: true, showColHead: true
           },
        quantity3: 
           { lb: "จำนวน3",type: "number", 
            width: 150, showCol: true, showColHead: true
           },
        quantity4: 
           { lb: "จำนวน4",type: "number", 
            width: 200, showCol: true, showColHead: true
           },
        quantity5: 
           { lb: "จำนวน5",type: "number", 
            width: 150, showCol: true, showColHead: true
           } 
    })

    const setFilterDataData0=(data)=>{
        setFilterData({...filterData,data0:data})
    }

    const updateFilterData=(idx,inputState)=>{
        
        let temp = [...filterData.data0]
        temp[idx]=inputState
        //console.log(temp)
        
        setFilterData({...filterData,data0:temp})
    }

    const genData=(length)=>{
        let tempArray=[]

        for (let i=1;i<=length;i++){
            const temp =  {id:i,
                         name:`name ${i}`,
                         quantity:i+100,
                         quantity2:100+i,
                         quantity3:20+i,
                         quantity4:1,
                         quantity5:15+i,
                         _id:uuid()
                        }
            tempArray=[...tempArray,temp]
        }
        return tempArray
    }

    const genFilterDataWithIndex=(filterData)=>{
        let tempArray=[]

        filterData.map((i,idx)=>{
            if(idx==0){
                const temp={...i,selectedLine:false}
                //const temp={...i,tempIndex:idx,selectedLine:false}
                tempArray=[...tempArray,temp]
            }
            else {
                const temp={...i,selectedLine:false}
                //const temp={...i,tempIndex:idx,selectedLine:false}
                tempArray=[...tempArray,temp]
            } 
        })

        return tempArray
    }

    const switchFilterData=({dataIdx,colorHead})=>{
        let prevDataIdx=filterData.dataIdx
        let prevData=filterData.data0
        setFilterData(
            {...filterData,
                [prevDataIdx]:prevData,
                colorHead,
                dataIdx,
                data0:filterData[dataIdx],
                editData:null
            }
        )
    }

    const [filterData,setFilterData]=React.useState({
             colorHead:"#ccc",
             dataIdx:"data0",
             data0:null,
             data1:genFilterDataWithIndex(genData(3)),
             data2:genFilterDataWithIndex(genData(10)),
             data3:genFilterDataWithIndex(genData(14)),
             data4:genFilterDataWithIndex(genData(100)),
             data5:genFilterDataWithIndex(genData(150)),
             editData:null
    })

    const updateEditData=(data)=>{
        const temp=data
         setFilterData({...filterData,editData:temp})
    }

    React.useEffect(()=>{
        //console.log('fitlerData.editData')
        //console.log(filterData.editData)
    },filterData)

    const saveTableTemplateFunc=()=>{
        console.log('saveTableTemplate')
    }

    /*
    const insertUp=()=>{
        
        const {editData,data0}=filterData

        if(data0){
                if(editData){
                    let tempFilterDataData0=[]
                    //let tIdx=0
                    let tempEditData=null
                    filterData.data0.map((i,idx)=>{
                        //console.log("xxx")
                        if(editData._id==i._id){
                        //if(editData.tempIndex==idx){
                            
                            //const temp={...blankData,tempIndex:tIdx,_id:uuid()} //empty line
                            //tempFilterDataData0=[...tempFilterDataData0,temp,{...i,tempIndex:tIdx+1}]
                            //tempEditData={...i,tempIndex:tIdx+1}
                            //tIdx=tIdx+2
                            
                            const temp={...blankData,_id:uuid()} //empty line
                            tempFilterDataData0=[...tempFilterDataData0,temp,i]
                            tempEditData=i
                            //tempEditData={...i}
                            //tIdx=tIdx+2

                        }
                        else{
                            tempFilterDataData0=[...tempFilterDataData0,i]
                            //tIdx=tIdx+1
                        }
                    })
                    setFilterData({...filterData,data0:tempFilterDataData0,editData:tempEditData})
                }
        }
    }

    const insertDown=()=>{

        const {editData,data0}=filterData
 
        if(data0){
                if(editData){
                    let tempFilterDataData0=[]
                    //let tIdx=0  
                    let tempEditData=null
                    filterData.data0.map((i,idx)=>{
                        if(editData._id==i._id){
                        //if(editData.tempIndex==idx){
                            
                            //const temp={...blankData,tempIndex:tIdx+1,_id:uuid()}
                            //tempFilterDataData0=[...tempFilterDataData0,{...i,tempIndex:tIdx},temp]
                            //tempEditData={...i,tempIndex:tIdx}
                            //tIdx=tIdx+2
                            
                            const temp={...blankData,_id:uuid()} //empty line
                            tempFilterDataData0=[...tempFilterDataData0,i,temp]
                            tempEditData=i
                            //tIdx=tIdx+2
                        }
                        else{
                            tempFilterDataData0=[...tempFilterDataData0,i]
                            //tempFilterDataData0=[...tempFilterDataData0,{...i,tempIndex:tIdx}]
                            //tIdx=tIdx+1
                        }
                    })
                    setFilterData({...filterData,data0:tempFilterDataData0,editData:tempEditData})
                }
        }
    }

    const deleteLine=()=>{

        const {editData,data0}=filterData
        //console.log(data0)        
        if(data0){
                let tempArray=[]
                //let idx=0
                filterData.data0.map(i=>{
                    if(!i.selectedLine){
                        tempArray=[...tempArray,{...i,selectedLine:false}]
                        //tempArray=[...tempArray,{...i,tempIndex:idx,selectedLine:false}]
                        //idx=idx+1
                    }
                })
                
                setFilterData({...filterData,data0:tempArray,editData:null})
        }
        
    }

    const selectAll=()=>{
        const {data0} = filterData
    
        if(data0){
                let tempArray=[]
                data0.map(i=>{
                    tempArray=[...tempArray,{...i,selectedLine:true}]
                })
                setFilterData({...filterData,data0:tempArray})
        }
    }

    const unSelectAll=()=>{
        const {data0} = filterData
    
        if(data0){
                let tempArray=[]
                data0.map(i=>{
                    tempArray=[...tempArray,{...i,selectedLine:false}]
                })
                setFilterData({...filterData,data0:tempArray})
        }
    }

    const moveSelectedUp=()=>{
        const {editData,data0}=filterData
        let beforeEditData=true
        let beforeArray = []
        let afterArray = []
        let selectedArray = []

        data0.map(i=>{
            //1,2 beforeArray
            //5 editData
            //3,4,7,8 selectedArray
            //6,9,10 afterArray

            if(editData._id==i._id){
                beforeEditData=false
            }
            else if( (i.selectedLine==false)&&(beforeEditData==true) ){
                beforeArray=[...beforeArray,i]
            }
            else if( (i.selectedLine==false)&&(beforeEditData==false) ){
                afterArray=[...afterArray,i]
            } 
            else {
                selectedArray=[...selectedArray,i]
            }
        })
        const tempArray=[...beforeArray,...selectedArray,editData,...afterArray]
        
        setFilterData({...filterData,data0:tempArray})
    }

    const moveSelectedDown=()=>{
        const {editData,data0}=filterData
        let beforeEditData=true
        let beforeArray = []
        let afterArray = []
        let selectedArray = []

        data0.map(i=>{
            //1,2 beforeArray
            //5 editData
            //3,4,7,8 selectedArray
            //6,9,10 afterArray

            if(editData._id==i._id){
                beforeEditData=false
            }
            else if( (i.selectedLine==false)&&(beforeEditData==true) ){
                beforeArray=[...beforeArray,i]
            }
            else if( (i.selectedLine==false)&&(beforeEditData==false) ){
                afterArray=[...afterArray,i]
            } 
            else {
                selectedArray=[...selectedArray,i]
            }
        })
        const tempArray=[...beforeArray,editData,...selectedArray,...afterArray]
        
        setFilterData({...filterData,data0:tempArray})
    }

    const importData=(value)=>{
        const {data0}=filterData

        let tempDataIdx=null
        if(value=="บิล1"){tempDataIdx="data1"}
        if(value=="บิล2"){tempDataIdx="data2"}
        if(value=="บิล3"){tempDataIdx="data3"}
        if(value=="บิล4"){tempDataIdx="data4"}
        if(value=="บิล5"){tempDataIdx="data5"}

        let tempArray=[]

        filterData[tempDataIdx].map(i=>{
            if(i.selectedLine){
                tempArray=[...tempArray,i]
            }
        })
        
        setFilterData({...filterData,data0:[...data0,...tempArray]})

    }

    */
    return (
        <div className="w-100 h-100">
            
            <div className="h-5 w-100 flex-center-center jc-start">
                    <button className="bill-button" 
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{switchFilterData({colorHead:"#7da097",dataIdx:"data1"})}}
                    >ค้นหาบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{switchFilterData({colorHead:"#92A8D1",dataIdx:"data2"})}}
                    >ลบบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{switchFilterData({colorHead:"#F0EAD6",dataIdx:"data3"})}}
                    >คัดลอกทั้งบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{switchFilterData({colorHead:"#cfb48a",dataIdx:"data4"})}}
                    >ดึงเฉพาะสินค้า</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{switchFilterData({colorHead:"#9BB7D4",dataIdx:"data5"})}}
                    >บันทึกบิลนี้</button>
            </div>
            
            <div className="h-15 bd-black flex-center-center">

                <div className="w-40 h-100">
                    <BillBox 
                        template={billTemplate}
                        basicData={basicData}
                    />
                </div>
                <div className="w-40 h-100">
                    <BillBox 
                        template={customerTemplate}
                        basicData={basicData}
                    />
                </div>
                <div className="w-20 h-100">
                </div>
                
            </div>

            <div className="h-5 w-100" 
                 style={{paddingLeft:"5px",display:"flex"}}
            >
                
                <div className="flex-center-center jc-start"
                     style={{width:"75%"}}
                >
        
                    <button className="bill-button"

                    >ค้นหาสินค้า</button>

                    <button className="bill-button"
                        style={{color:filterData.editData?"black":"#888"}}
                        onClick={e=>{
                            const {editData}=filterData

                            if(editData){
                                filterData.data0.map((i,idx)=>{
                                    if(i._id==editData._id){
                                    //if(idx==editData.tempIndex){
                                        insertUp()
                                    }
                                })
                            }
                            
                        }}
                    >แทรกบน</button>

                    <button className="bill-button"
                        style={{color:filterData.editData?"black":"#888"}}
                        onClick={e=>{
                            const {editData}=filterData
                            if(editData){
                                filterData.data0.map((i,idx)=>{
                                    if(editData._id==i._id){
                                    //if(idx==editData.tempIndex){
                                        insertDown()
                                    }
                                })
                            }
                            
                        }}
                    >แทรกล่าง</button>
                    <button className="bill-button"
                        onClick={e=>{
                            deleteLine()
                        }}
                    >ลบบรรทัด</button>
                    
                    <button className="bill-button"
                        onClick={e=>{
                            selectAll()
                        }}
                    >เลือกทั้งหมด</button>

                    <button className="bill-button"
                        onClick={e=>{
                            unSelectAll()
                        }}
                    >ยกเลิกเลือก</button>
                    
                    <button className="bill-button"
                        style={{color:filterData.editData?"black":"#888"}}
                        onClick={e=>{
                            //console.log(filterData.editData)
                            moveSelectedUp()
                        }}
                    >เลื่อนขึ้นบน</button>
                    
                    <button className="bill-button"
                        style={{color:filterData.editData?"black":"#888"}}
                        onClick={e=>{
                            moveSelectedDown()
                        }}
                    >เลื่อนลงล่าง</button>
                    
                    <select style={{width:"15%",height:"2rem"}}
                        onChange={e=>importData(e.target.value)}
                    >
                        <option >ดึงข้อมูลบิลอื่น</option>
                        <option value={"บิล1"}>บิล1</option>
                        <option value={"บิล2"}>บิล2</option>
                        <option value={"บิล3"}>บิล3</option>
                        <option value={"บิล4"}>บิล4</option>
                        <option value={"บิล5"}>บิล5</option>
                    </select>

                </div>

                <div className="flex-center-center jc-end"
                     style={{width:"25%"}}
                >

                    <div className="bill-divpage" style={{backgroundColor:"#7da097"}}
                         onClick={e=>{switchFilterData({colorHead:"#7da097",dataIdx:"data1"})}}
                    >
                        <p className="bill-buttonpage"
                        >1</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#92A8D1"}}
                         onClick={e=>{switchFilterData({colorHead:"#92A8D1",dataIdx:"data2"})}}
                    >
                        <p className="bill-buttonpage"
                        >2</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#e4cf93"}}
                         onClick={e=>{switchFilterData({colorHead:"#e4cf93",dataIdx:"data3"})}}
                    >
                        <p className="bill-buttonpage"
                        >3</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#cfb48a"}}
                         onClick={e=>{switchFilterData({colorHead:"#cfb48a",dataIdx:"data4"})}}
                    >
                        <p className="bill-buttonpage"
                        >4</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#9BB7D4"}}
                         onClick={e=>{switchFilterData({colorHead:"#9BB7D4",dataIdx:"data5"})}}
                    >
                        <p className="bill-buttonpage"
                        >5</p>
                    </div>
                    
                </div>
            </div>

            <div className="h-75 bd-black">
                    {filterData.data0
                    ?<Table
                        colorHead={filterData.colorHead}
                        tableTemplate={tableTemplate}
                        setTableTemplate={setTableTemplate}

                        filterData={filterData.data0}
                        setFilterData={setFilterDataData0}
                        
                        editData={filterData.editData}
                        setEditData={updateEditData}
                        saveTableTemplateFunc={saveTableTemplateFunc}
                        isSubTable={true}
                        updateFilterData={updateFilterData}
                    />
                    :null
                    }
            </div>
        </div>
    )
}
