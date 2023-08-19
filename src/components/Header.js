import { Link } from "react-router-dom"

function Header(props) {
    return <nav>
        <Link to="/">
            <div><h1>Personal JukeBox</h1></div>
        </Link>
    </nav>
}

export default Header