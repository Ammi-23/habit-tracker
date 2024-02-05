import React from "react";
import { useDispatch } from "react-redux"; // importing redux hook
import { habitDone, habitNone, habitUndone } from "../reducers"; //actions from reducers

const  DayView= (props) =>{
    const dispatch= useDispatch(); // for redux actions
    const { day, habitId }= props;
    const today= new Date();
    const todayday= today.getDay();

   // handle dropdown submit by passing the habitId and dayId, on selecting done,notdone and none
    const handleSubmit=(value) =>{

        if(value === 'Done'){
            dispatch(habitDone({
                habitId:habitId,
                id:day.id}
            ));
        }
        else if(value==='NotDone'){
            dispatch(habitUndone({
                habitId:habitId,
                id:day.id}
            ));
        }
        if(value==='None'){
            dispatch(habitNone({
                habitId:habitId,
                id:day.id}
            ));
        }
    }
        
    

    return(
        <div className='day-set'>
            <p className='week-day'>{day.day}</p> 
            <p className='week-date'>{day.dd+'/'+ day.mm+'/'+day.year}</p>
            {/* to show the status based on the selection */}
            <div className='week-status'>Status: 
                {day.isDone=== true?'Done':day.isDone === false?'Not Done':"None"}</div>
            <div className="dropdown">
                <select className='week-select' onChange={(e)=> handleSubmit(e.target.value)}>
                    <option>select status</option>
                    <option value= 'None' >None</option>
                    {/* to check for the current day and disable the selection for the following days */}
                    {todayday >= day.id?
                        <option value='Done'>Done</option>:
                        <option value='Done' disabled>Done</option>
                    }           
                    {/* to check for the current day and disable the selection for the following days */} 
                    {todayday >= day.id?
                        <option value= 'NotDone'>Not Done</option>:               
                            <option value= 'NotDone' disabled>Not Done</option>}
                </select>
            </div>
        </div>
    )
    
}

export default DayView;