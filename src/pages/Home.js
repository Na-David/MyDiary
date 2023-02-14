import { useState } from "react";

import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';

const Home = () => {

    const [curdate, setCurDate] = useState(new Date());
    console.log(curdate);

    const month = (curdate.getMonth().toLocaleString("en-US", {month : "long"}));
    const headText = `${ curdate.getMonth() + 1 } ${curdate.getFullYear()}`;
    console.log(headText);
    console.log(month);

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
    </div>
    );
}

export default Home;