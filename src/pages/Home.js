import { useState, useContext, useEffect } from "react";

import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import DiaryList from './../components/DiaryList';
import { DiaryStateContext } from "../App";

const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);
    const [curdate, setCurDate] = useState(new Date());
    const headText = `${ curdate.getMonth() + 1 } ${curdate.getFullYear()}`;

    useEffect(() => {
        if (diaryList.length >= 1) {
        
        const firstDay = new Date(curdate.getFullYear(), curdate.getMonth(), 1).getTime(); // first day of current Month
        const lastDay = new Date(curdate.getFullYear(), curdate.getMonth() + 1, 0).getTime(); // last day of current Month

        setData(diaryList.filter((it) => firstDay <= it.date && lastDay >= it.date));
        }},[diaryList,curdate]);

    const increaseMonth = () => {
        setCurDate(new Date(curdate.getFullYear(), curdate.getMonth() + 1, curdate.getDate()));
    };
    const decreaseMonth = () => {
        setCurDate(new Date(curdate.getFullYear(), curdate.getMonth() - 1, curdate.getDate()));
    }
    

    return (
    <div>
        <MyHeader headText = {`${headText}`}
        leftChild = {<MyButton text={' < '} onClick = {decreaseMonth} />}
        rightChild = {<MyButton text={' > '} onClick = {increaseMonth} />}
            />
        <h1>Home</h1>
        <p>Here is home page</p>
        <DiaryList diaryList = {data}/>
    </div>
    );
}

export default Home;