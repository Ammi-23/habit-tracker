import DayView from "./DayView"; // importing DayView component

const WeekCard=(props)=>{
    const { habit }= props; // getting habit from the props

    return (
        <div className="week-card">
            <div className="week-detail">
                <div className="habit-title">{habit.name}</div>
                <div className='day-container'>
                    {/* map over the DayView component for each day of a week*/}
                    {habit.weekLog.map((day) =>(
                        <DayView key={day.id} day={day} habitId={habit.id} weekLog={habit.weekLog}/>))}
                </div>

            </div>
        </div>
    );
}

export default WeekCard;