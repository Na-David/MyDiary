import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  // Define state variables
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  // Get diary list from context
  const diaryList = useContext(DiaryStateContext);

  // Set page title
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `My Diary(Edit) - ${parseInt(id) + 1}`;
  }, []);

  // Find the target diary to edit
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      // If the target diary exists, set the origin data
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        // If the target diary does not exist, show an alert and navigate to the home page
        alert("Not existing diary.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
