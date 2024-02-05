import React from "react";
import { useSelector } from "react-redux"; // importing redux hook
import WeekCard from "./WeekCard"; // importing WeekCard component


const WeekView=()=>{
    // to get the list from the store in redux
    const habitList= useSelector((state) => state.habitReducer);

    return (
        <div className="detail-container">
            {/* map over the WeekCard component for each habit in list */}
            {habitList.map((habit)=>(
                <WeekCard habit={habit} key={habit.id}/>
            ))}
        </div>
    );
}


export default WeekView;