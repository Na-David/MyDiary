const EmotionItem = ({emotion_id, emotion_img, emotion_descript}) => {
    return (
    <div>
        <img src={emotion_img} />
        <span>{emotion_descript}</span>
    </div>
)}

export default EmotionItem;