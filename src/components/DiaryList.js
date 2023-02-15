import {useState} from 'react';
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';

const sortOptionList = [
    {value : "latest", name : "Latest Order"},
    {value : "oldest", name : "Oldest Order"}
];

const filterOptionList = [
    {value : "all", name : "All"},
    {value : "positive", name : "Positive"},
    {value : "negative", name : "Negative"}
];  

const ControlMenu = ({value, onChange, optionList}) => {
    return (
    <select value={value} onChange = {(e) => onChange(e.target.value)} >
        {optionList.map((it,idx) => (
        <option key={idx} value={it.value}>
            {it.name}
        </option>
        ))}
    </select>
    );
};

const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("All");

    const getProcessedDiaryList = () => {

        const filterCallBack = (item) => {
            if ( filter === 'positive'){
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        };

        const compare = (a,b) => {
            if (sortType === 'latest'){
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryList));

        const filteredList = filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
        
        const sortedList = filteredList.sort(compare);
        return sortedList;
    };

    return (
        <div>
            <ControlMenu 
                value={sortType} 
                onChange = {setSortType} 
                optionList = {sortOptionList}
            />
            <ControlMenu
                value={filter}
                onChange = {setFilter}
                optionList = {filterOptionList} 
            />
            <MyButton 
                type={'positive'} 
                text = {"New Diary"} 
                onClick = {() => navigate('/new')} 
            />
            {getProcessedDiaryList().map((it) => (
            <div key={it.id}>{it.content} {it.emotion}</div>
            ))}
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList : []
};

export default DiaryList;