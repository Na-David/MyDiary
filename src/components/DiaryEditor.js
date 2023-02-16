import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
}


const DiaryEditor = () => {

    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();
    
    return (
    <div>
        <MyHeader 
        headText = {"New Diary"}
        leftChild = {<MyButton text={"< Back"} onClick = {() => navigate(-1)} />}  
        />
        <div>
            <section>
                <h4>What day is it today? </h4>
                <div className="input_box">
                    <input 
                    className="input_date" 
                    value={date} 
                    onChange ={(e) => setDate(e.target.value)} 
                    type={"date"} />
                </div>
            </section>
        </div>
    </div>
    )
}

export default DiaryEditor;