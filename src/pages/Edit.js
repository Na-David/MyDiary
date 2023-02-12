import { useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] =  useSearchParams();

    // How to get the values from Query string
    const id = searchParams.get('id');
    console.log("id = ", id);

    const mode = searchParams.get('mode');
    console.log("mode : ", mode);


    return <div>
        <h1>Edit</h1>
        <p>Here is edit page</p>
        <button onClick={() => setSearchParams({who: 'David'})}>Change QS</button>
    </div>
}

export default Edit;