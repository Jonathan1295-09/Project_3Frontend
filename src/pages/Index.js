import {Link, Form, useLoaderData, useNavigate} from "react-router-dom"
import {useState} from "react"
import {baseUrl} from "../base_url"

function Index(props) {
   
  
    const albums = useLoaderData()    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        albumName: "",
        artist: "",
        image: "",
        yearReleased: "",
        linkToAlbum: ""
    })

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const handleSubmit = (event => {
        setFormData({
        albumName: "",
        artist: "",
        image: "",
        yearReleased: "",
        linkToAlbum: ""
        })
    })
    

    return (
        <>
        <div className="albumContainer">
            <div className="logout">
                <button onClick={async () => {
                await fetch(`${baseUrl}/logout`)
                localStorage.removeItem("loggedIn")
                navigate("/")
                }}>Logout</button>
            </div>
            <div className="createAlbum">
                {/* <h2 className="index">Create A New Album</h2> */}
                <h2>Create A New Album</h2>
                    <Form action="/create" method="post" onSubmit={handleSubmit} className="createForm">
                        <input type="text" name="albumName" value={formData.albumName} onChange={handleChange} placeholder="Album Name"/>
                        <input type="text" name="artist" value={formData.artist} onChange={handleChange} placeholder="Artist"/>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image"/>
                        <input type="number" name="yearReleased" value={formData.yearReleased} onChange={handleChange} placeholder="Year Released"/>
                        <input type="text" name="linkToAlbum" value={formData.linkToAlbum} onChange={handleChange} placeholder="Link To Album"/>
                        <br></br>
                        <input type="submit" value="Create Album"/>
                    </Form>
            </div>

        </div>
            
            <div className="trial">
            {albums.map((albums, Index) => {
                return (
                    <div className="allAlbums">
                        <div key={albums._id} className="albums">
                            <Link to={`/${albums._id}`}>
                                <h1> {albums.artist}</h1>
                                <h1>{albums.albumName}</h1>
                                <img src={albums.image}/>
                            </Link>
                            
                        </div>
                    </div>    
                );  

            })}
            </div>
        </>
    );

}

export default Index;