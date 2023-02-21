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

    useEffect (() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `My Diary - ${parseInt(id)+1}`
    },[])

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

        return (
        <div className='DiaryPage'>
            <MyHeader 
                headText={`${getStringDate(new Date(data.date))}`} 
                leftChild = {<MyButton text={`< Back`} onClick = {() => navigate(-1)} />}
                rightChild = {<MyButton text = {"Edit"} onClick = {() => navigate(`/edit/${data.id}`)} />}
            />
            <article>
                <section>
                    <h4> Today's Emotion</h4>
                    <div className={['diary_img_wrapper', `diary_img_wrapper_${data.emotion}`].join(" ")}>
                        <img src={curEmotionDate.emotion_img} />
                        <div className='emotion_descript'>
                            {curEmotionDate.emotion_descript}
                        </div>
                    </div>
                </section>
                <section>
                    <h4>Today's Diary</h4>
                    <div className='diary_content_wrapper'>
                        <p>{data.content}</p>
                    </div>
                </section>
            </article>
        </div>
    )}

}

export default Diary;