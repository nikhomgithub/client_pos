import React from 'react';
import BillBox from './BillBox'
import tempTemplate from './tempTemplate'
import Table from '../../component/table/Table'

const {billTemplate,customerTemplate}=tempTemplate

const renderBill=({
    filterData,basicData,
    setShowPartner,setShowProduct,setShowTransaction,
    setData0,
    switchFilterData,
    setTableTemplate,
    setFilterDataData0,
    setEditData,
    saveTableTemplateFunc,
    updateEditData,
    selectAll,unSelectAll,
    insertUp,insertDown,
    deleteLine,
    moveSelectedDown,moveSelectedUp,
})=>{

    return (
        <div className="w-100 h-100">

            <div className="h-5 w-100 flex-center-center jc-start"
                    style={{height:"2.2rem"}}
            >

                    <button className="bill-button" 
                        style={{background:
                            "radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(255, 153, 153,1) 93%)"
                            //filterData.colorHead
                        }}
                        onClick={e=>{
                            setShowTransaction()
                        }}
                    >ค้นหาบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                    >ลบบิล</button>

                    <button className="bill-button"
                        style={{background:
                            "radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(255, 153, 153,1) 93%)"
                        }}
                        onClick={e=>{
                            setData0()
                        }}
                    >ดึงทั้งบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{
                        }}
                    >ดึงเฉพาะสินค้า</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{
                            
                        }}
                    >บันทึกบิลนี้</button>
                    
                    <button className="bill-button" 
                        style={{background:
                            "radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(204, 255, 102,1) 93%)"
                        }}
                        onClick={e=>{
                            setShowPartner()
                        }}
                    >ค้นหาคู่ค้า</button>
                    
                    <button className="bill-button"
                        style={{background:
                        "radial-gradient(circle, rgba(241,239,225,1) 1%, rgba(152,152,253,1) 93%)"
                        }}
                        onClick={e=>setShowProduct()}
                    >ค้นหาสินค้า</button>
            </div>




            <div className="h-15 bd-black flex-center-center"
                    style={{height:"10rem"}}
            >

                    <div className="w-40 h-100">
                        <BillBox 
                            data={filterData.data0}
                            template={billTemplate}
                            basicData={basicData}
                        />
                    </div>

                    <div className="w-40 h-100">
                        <BillBox 
                            data={filterData.data0}
                            template={customerTemplate}
                            basicData={basicData}
                        />
                    </div>

                    <div className="w-20 h-100">
                        Image
                    </div>
            
            </div>
              
            
            <div className="h-5 w-100" 
                 style={{paddingLeft:"5px",display:"flex",height:"2.5rem"}}
            >
                
                <div className="flex-center-center jc-start"
                     style={{width:"75%"}}
                >
        
                    <button className="bill-button"
                        style={{color:filterData.editData?"black":"#888"}}
                        
                        onClick={e=>{
                            const {editData,data0}=filterData

                            if(editData){
                                data0.detail.map((i,idx)=>{
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
                            
                            const {editData,data0}=filterData

                            if(editData){
                                data0.detail.map((i,idx)=>{
                                    if(i._id==editData._id){
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
                        //onChange={e=>importData(e.target.value)}
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
                        onClick={e=>{
                            switchFilterData({colorHead:"#7da097",dataIdx:"data1"})
                        }}
                    >
                        <p className="bill-buttonpage"
                        >1</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#92A8D1"}}
                         onClick={e=>{
                            switchFilterData({colorHead:"#92A8D1",dataIdx:"data2"})
                        }}
                    >
                        <p className="bill-buttonpage"
                        >2</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#e4cf93"}}
                        onClick={e=>{
                            switchFilterData({colorHead:"#e4cf93",dataIdx:"data3"})
                        }}
                    >
                        <p className="bill-buttonpage"
                        >3</p>
                    </div>
                    <div className="bill-divpage" style={{backgroundColor:"#cfb48a"}}
                        onClick={e=>{
                            switchFilterData({colorHead:"#cfb48a",dataIdx:"data4"})
                        }}
                    >
                        <p className="bill-buttonpage"
                        >4</p>
                    </div>           
                    <div className="bill-divpage" style={{backgroundColor:"#da9372"}}
                        onClick={e=>{
                            switchFilterData({colorHead:"#da9372",dataIdx:"data5"})
                        }}
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
                        tableTemplate={filterData.detailTableTemplate}

                        setTableTemplate={()=>{}}//{setTableTemplate}

                        filterData={filterData.data0.detail}
                        setFilterData={()=>{}}//{setFilterDataData0}
                        
                        editData={filterData.editData}
                        setEditData={setEditData}//{updateEditData}
                        saveTableTemplateFunc={()=>{}}//{saveTableTemplateFunc}
                        isSubTable={true}
                        useInput={true}
                        updateFilterData={updateEditData}//{updateEditData}

                    />
                    :null
                    }
            </div>



        </div>
    )
   
}

export default renderBill


/*

 return (
        <div className="w-100 h-100">
            
            <div className="h-5 w-100 flex-center-center jc-start">
                    <button className="bill-button" 
                        style={{backgroundColor:filterData.colorHead}}
                        onClick={e=>{

                        }}
                    >ค้นหาบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                        
                    >ลบบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                    >คัดลอกทั้งบิล</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                    >ดึงเฉพาะสินค้า</button>

                    <button className="bill-button"
                        style={{backgroundColor:filterData.colorHead}}
                    >บันทึกบิลนี้</button>
            </div>
            

            {false
            ?<div className="h-15 bd-black flex-center-center">

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
            :null
            }

            {false
            ?<div className="h-5 w-100" 
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
            :null
            }

            {false
            ?<div className="h-75 bd-black">
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
            :null
            }

        </div>
    )









*/