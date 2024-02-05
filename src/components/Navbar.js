import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{ 
    const [isActive, setIsActive] = useState();

    return (
        <div className="nav">
            <h1>Habit Tracker</h1>
            <div className="nav-button">
                {/* button for detail view page */}
                <button style={{ backgroundColor: isActive ==="1" ? "salmon" : "",
                    borderRadius: 12
                    }} onClick={(e)=>{ setIsActive(e.target.id)}} >
                    <Link id={"1"} style={{textDecoration:'none', color:'darkgreen', 
                    fontSize: 'large', fontWeight: 600 }} to ="/">Detail view</Link>
                </button>
                {/* button for week view page */}
                <button style={{ backgroundColor: isActive ==="2" ? "salmon" : "",
                    borderRadius: 12
                    }} onClick={(e)=>{ setIsActive(e.target.id)}} >
                    <Link id={"2"} style={{textDecoration:'none' , color:'darkgreen', 
                    fontSize: 'large', fontWeight: 600}} to ="/week-view">Week view</Link>
                </button>
            </div>
        </div>
    );
}

export default Navbar;