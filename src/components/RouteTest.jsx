import {Link} from 'react-router-dom';

const RouteTest = () => {
    return <div>
        {/* SPA method */}
        {/* CSR - Client Side Rendering */}
    <Link to = {'/'}>Home</Link>
    <br/>
    <Link to = {'/diary'}>Diary</Link>
    <br />
    <Link to = {'/edit'}>Edit</Link>
    <br/>
    <Link to = {'/new'}>New</Link>
    <br/>
    </div>
}

export default RouteTest;