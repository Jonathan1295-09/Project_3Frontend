import {Link, Form, useLoaderData} from "react-router-dom"
import {useState} from "react"

function Index(props) {
    const albums = useLoaderData()
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
        <div className="albumContainer">
            <h2 className="index">Create A New Album</h2>
            <Form action="/create" method="post" onSubmit={handleSubmit} className="createform">
                <input type="text" name="AlbumName" value={formData.albumName} onChange={handleChange} placeholder="AlbumName"/>
                <input type="text" name="artist" value={formData.artist} onChange={handleChange} placeholder="Artist"/>
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image"/>
                <input type="text" name="yearReleased" value={formData.yearReleased} onChange={handleChange} placeholder="YearReleaed"/>
                <input type="text" name="linkToAlbum" value={formData.linkToAlbum} onChange={handleChange} placeholder="LinkToAlbum"/>
                <input type="submit" value="Create Album"/>
            </Form>

            {albums.map((albums, Index) => {
                return (
                    <div key={albums._id} className="albums">
                        <Link to={`/${albums._id}`}>
                            <h1>{albums.albumName}</h1>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Index;