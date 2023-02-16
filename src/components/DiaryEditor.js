import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const emotionList = [
    {
        emotion_id : 1,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript : "Satisfied"
    },
    {
        emotion_id : 2,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript : "Good"
    },
    {
        emotion_id : 3,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript : "Neutral"
    },
    {
        emotion_id : 4,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript : "Bad"
    },
    {
        emotion_id : 5,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript : "Not Satisfied"
    }
]

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
}


const DiaryEditor = () => {

    const [emotion, setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();

    const handleClickEmotion = (emotion) => {
        setEmotion(emotion);
    }
    
    return (
    <div className="DiaryEditor">
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
            <section>
                <h4>Today's emotion</h4>
                <div className="input_box emotion_list_wrapper">
                    {emotionList.map((it) => 
                    <EmotionItem 
                    onClick = {handleClickEmotion} 
                    key={it.emotion_id} 
                    {...it}
                    isSelected = {it.emotion_id === emotion} />)}
                </div>
            </section>
        </div>
    </div>
    )
}

export default DiaryEditor;