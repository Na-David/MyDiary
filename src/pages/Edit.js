import { useSearchParams , useNavigate} from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] =  useSearchParams();
    const navigate = useNavigate();

    // How to get the values from Query string
    const id = searchParams.get('id');
    console.log("id = ", id);

    const mode = searchParams.get('mode');
    console.log("mode : ", mode);


    return <div>
        <h1>Edit</h1>
        <p>Here is edit page</p>
        <button onClick={() => setSearchParams({who: 'David'})}>Change QS</button>
        <button onClick={() => navigate('/home')}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
}

export default Edit;