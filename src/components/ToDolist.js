import React, { useState } from 'react';
import './ToDoList.css';


function ToDolist() {
        const[data,setdata]=useState('');
        const[item,setitem]=useState([]);


         function additem(){
             if (!data){

             }
            else
            setitem([...item,data])
                setdata('')
         } 
         

    return <div className='body'>
        
        <div className='additem'>
        <input type="text" className='input__task' placeholder=' ✍️ Add item' value={data} onChange={
            (e)=>{
                setdata(e.target.value)
            }
        }/>
        <button className='b1' onClick={additem}>➕Add task</button>
        </div>

    <div className="show">
        
        {
            item.map((e,i)=>{
                return(
                    <div className='individual' key={i}>
                        
                            <div className='h3'><><h1>{i}</h1><h3>{e}</h3></></div>
                    </div>
                )
            })
        }
        
    </div>
    </div>
}


export default ToDolist;
