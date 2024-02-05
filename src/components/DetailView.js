import React, { useState } from "react"; // importing React hook
import HabitCard from "./HabitCard"; //importing HabitCard component
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux"; // importing redux hook
import { addHabit, deleteHabit } from "../reducers"; // actions from reducers
import { v4 as uuidv4} from "uuid";

const DetailView=()=>{
    const dispatch= useDispatch(); // for redux actions
    const habitList= useSelector((state) => state.habitReducer); // to get the list from the store in redux
    const [habitName,setHabitName]= useState({name:''}); // using useState hook to set the name of habit
    const today= new Date(); // to get the current date
    //current date, month and year
    const date= today.getDate()- today.getDay();
    const month= today.getMonth()+1;
    const fullYear= today.getFullYear();
    
    // to add new habit to the list
    const handleAddHabit =() =>{
        dispatch(addHabit({
            id: uuidv4(),
            name:habitName.name,
            weekLog:[
                {
                    id:0,
                    day:'Sunday',
                    dd: date,
                    mm: month,
                    year: fullYear,
                    isDone: "",                    
                },
                {
                    id:1,
                    day:'Monday',
                    dd: date +1,
                    mm: month,
                    year: fullYear,
                    isDone: "",                    
                },
                {
                    id:2,
                    day:'Tuesday',
                    dd: date +2,
                    mm: month,
                    year: fullYear,
                    isDone: "",                    
                },
                {
                    id:3,
                    day:'Wednesday',
                    dd: date+3,
                    mm: month,
                    year: fullYear,
                    isDone: "",                    
                },
                {
                    id:4,
                    day:'Thursday',
                    dd: date+4,
                    mm: month,
                    year: fullYear,
                    isDone:"",                    
                },
                {
                    id:5,
                    day:'Friday',
                    dd: date +5,
                    mm: month,
                    year: fullYear,
                    isDone:"",                    
                },
                {
                    id:6,
                    day:'Saturday',
                    dd: date +6,
                    mm: month,
                    year: fullYear,
                    isDone:"",                    
                }
            ]
        }))
        setHabitName({name:''});
        toast.success("New Habit Added Successfully");
    }

    // to delete the habit from the list by id
    const handleDeleteHabit =(id) =>{
        dispatch(deleteHabit(id));
        toast.success("Habit Deleted Successfully");
    }


    return (
        <div className="detail-container">
            {/* button to add habit  */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addhabit">
            Add Habit </button>
            <div className="modal fade" id="addhabit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create a Habit</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label>Enter a Habit: </label>
                            <input type="text" 
                            value={habitName.name} 
                            id="habitName" 
                            placeholder="Habit Name" 
                            onChange={(e) => setHabitName({...habitName, name: e.target.value})}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddHabit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* map over the HabitCard component for each habit in list */}
            {habitList.map((habit)=>(
                <HabitCard habit={habit} key={habit.id} handleDeleteHabit={()=> handleDeleteHabit(habit.id)}/>
            ))}
        </div>
    );
}

export default DetailView;

