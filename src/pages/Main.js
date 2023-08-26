import { Outlet, Link } from "react-router-dom";

function Main(props) {
    return <div className="main">
        {/* <div className="welcome"> <h1>Welcome To Personal JukeBox</h1></div> */}
    <div className="box"><h3>Signup Here</h3>
        <Link to="/signup"><button>Signup</button></Link>
        <h3>Login here</h3>
        <Link to='/login'><button>Login</button></Link>
    </div>
    <div className="form">
        <Outlet />
    </div>
    </div>
}

export default Main;