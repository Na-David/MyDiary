import { useNavigate, useParams} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {

    const [originData, setOriginData] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if ( diaryList.length >= 1 ){
            const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id) ); // selected id's diary information

            if (targetDiary) {
                setOriginData(targetDiary);
            } else {
                navigate('/', {replace : true});
            }
        }

    },[diaryList, id])

    return (
    <div>
        {originData && <DiaryEditor isEdit = {true} originData = {originData} />}
    </div>
)}

export default Edit;