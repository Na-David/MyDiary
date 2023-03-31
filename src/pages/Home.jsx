import { useState, useContext, useEffect } from "react";

import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from "../App";

const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);
    const [curdate, setCurDate] = useState(new Date());
    const headText = `${ curdate.getMonth() + 1 } ${curdate.getFullYear()}`;

    useEffect (() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `My Diary`
    },[])

    useEffect(() => {
        if (diaryList.length >= 1) {
        
        const firstDay = new Date(curdate.getFullYear(), curdate.getMonth(), 1).getTime(); // first day of current Month
        const lastDay = new Date(curdate.getFullYear(), curdate.getMonth() + 1, 0, 23,59,59).getTime(); // last day of current Month

        setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
        }},[diaryList,curdate]);

    const increaseMonth = () => {
        setCurDate(new Date(curdate.getFullYear(), curdate.getMonth() + 1, curdate.getDate()));
    };
    const decreaseMonth = () => {
        setCurDate(new Date(curdate.getFullYear(), curdate.getMonth() - 1, curdate.getDate()));
    }

    useEffect(() => {
        console.log(data);
    },[data])

    return (
    <div>
        <MyHeader headText = {headText}
        leftChild = {<MyButton text={' < '} onClick = {decreaseMonth} />}
        rightChild = {<MyButton text={' > '} onClick = {increaseMonth} />}
            />
        <DiaryList diaryList = {data}/>
    </div>
    );
}

export default Home;