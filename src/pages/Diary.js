import { useContext, useEffect, useState} from 'react';
import { DiaryStateContext} from "../App"
import { useNavigate, useParams } from "react-router-dom";
import { getStringDate } from '../util/date';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { emotionList } from '../util/emotion';


const Diary = () => {

    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect ( () => {
        if ( diaryList.length >= 1 ) {
            const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id));

            if (targetDiary) {
                setData(targetDiary);
            } else {
                alert("Not existing diary.");
                navigate('/', {replace : true});
            }
        }
    },[id, diaryList])

    if (!data) {
        return <div className='DiaryPage'>Loading...</div>;
    } else {

        const curEmotionDate = emotionList.find((it) => parseInt(it.emotion_id) === parseInt(data.emotion));
        console.log(curEmotionDate);

        return (
        <div className='DiaryPage'>
            <MyHeader 
                headText={`${getStringDate(new Date(data.date))}`} 
                leftChild = {<MyButton text={`< Back`} onClick = {() => navigate(-1)} />}
                rightChild = {<MyButton text = {"Edit"} onClick = {() => navigate(`/edit/${data.id}`)} />}
            />
        </div>

    )}

}

export default Diary;