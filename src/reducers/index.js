// Importing createSlice() from Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// getting the elements from local storage
const items= localStorage.getItem('habitList') !== null? JSON.parse(localStorage.getItem('habitList')):[];
// Initial state for Redux store
const initialState= items;

// Redux state slice
const addHabitReducer= createSlice({
    name:"habits",
    initialState,
    // list of reducers
    reducers:{
        // Reducer for adding new habit to list and storing in local storage
        addHabit: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('habitList', JSON.stringify(state));
        },
        // Reducer for removing habit from list by id and updating the local storage
        deleteHabit:(state, action)=>{
            const id = action.payload;
            const newHabit= state.filter((habit)=> habit.id!== id);
            localStorage.setItem("habitList", JSON.stringify(newHabit));
            return newHabit
        },
        // Reducer for setting the habit for a day to "Done" status and updating the local storage
        habitDone:(state,action)=>{
            let  newItems=[...state];
            const habitCard= state.find((e)=> e.id=== action.payload.habitId);
            const index= state.findIndex( (e)=> e.id=== action.payload.habitId);
            let tempArray=[...habitCard.weekLog];
            for(let i=0;i<habitCard.weekLog.length;i++){
                if(habitCard.weekLog[i].id === action.payload.id){
                    tempArray[action.payload.id]= {...habitCard.weekLog[i], isDone: true};
                }
            }
            let newArray={...habitCard, weekLog: tempArray};
            newItems[index]= newArray;
            localStorage.setItem("habitList", JSON.stringify(newItems));
            return newItems;
        },
        // Reducer for setting the habit for a day to "Not Done" status and updating the local storage
        habitUndone:(state,action)=>{
            let  newItems=[...state];
            const habitCard= state.find((e)=> e.id=== action.payload.habitId);
            const index= state.findIndex( (e)=> e.id=== action.payload.habitId);
            let tempArray=[...habitCard.weekLog];
            for(let i=0;i<habitCard.weekLog.length;i++){
                if(habitCard.weekLog[i].id === action.payload.id){
                    tempArray[action.payload.id]= {...habitCard.weekLog[i], isDone: false};
                }
            }
            let newArray={...habitCard, weekLog: tempArray};
            newItems[index]= newArray;
            localStorage.setItem("habitList", JSON.stringify(newItems));
            return newItems;
        },
        // Reducer for setting the habit for a day to "None" status and updating the local storage
        habitNone:(state,action)=>{
            let  newItems=[...state];
            const habitCard= state.find((e)=> e.id=== action.payload.habitId);
            const index= state.findIndex( (e)=> e.id=== action.payload.habitId);
            let tempArray=[...habitCard.weekLog];
            for(let i=0;i<habitCard.weekLog.length;i++){
                if(habitCard.weekLog[i].id === action.payload.id){
                    tempArray[action.payload.id]= {...habitCard.weekLog[i], isDone: ""};
                }
            }
            let newArray={...habitCard, weekLog: tempArray};
            newItems[index]= newArray;
            localStorage.setItem("habitList", JSON.stringify(newItems));
            return newItems;
        }
        
    },
});

// exporting all the actions 
export const { addHabit , deleteHabit, habitDone, habitUndone, habitNone} = addHabitReducer.actions;
const habitReducer = addHabitReducer.reducer;
//exporting reducer to create the store and accessing the state
export default habitReducer;