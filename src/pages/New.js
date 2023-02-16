import DiaryEditor from "../components/DiaryEditor";

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
}

const New = () => {
    return (
    <div>
        <DiaryEditor />
    </div>
    )
}

export default New;