import DiaryEditor from "../components/DiaryEditor";
import { useEffect } from "react";

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
}

const New = () => {

    useEffect (() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `My Diary (New) `
    },[])

    return (
    <div>
        <DiaryEditor />
    </div>
    )
}

export default New;