import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const album = useLoaderData();

        
    return (
        <div className="album">
            <div className="albumInfo">
                <h1>{album.albumName}</h1>
                <h2>{album.artist}</h2>
                <h3>Year released: {album.yearReleased}</h3>
                <a href={album.linkToAlbum} target="_blank" rel="noopener noreferrer"><img src={album.image} alt={album.albumName} /></a>
            </div>

            <div className="albumControls">
                <h2>Update: {album.albumName}</h2>
                <Form action={`/update/${album._id}`} method="post" className="updateForm">
                    <input type="text" name="albumName" placeholder="Album Name" defaultValue={album.albumName}/>
                    <input type="text" name="artist" placeholder="Artist" defaultValue={album.artist} />
                    <input type="text" name="image" placeholder="Image" defaultValue={album.image}  />
                    <input type="number" name="yearReleased" placeholder="Year Released" defaultValue={album.yearReleased}  />
                    <input type="text" name="linkToAlbum" placeholder="Link To Album" defaultValue={album.linkToAlbum}  />
                    <br></br>
                    <input type="submit" value="Update Album"/>
                </Form>
            </div>

            <div className="deleteAlbum">
                <h2>Delete Album</h2>
                <Form action={`/delete/${album._id}`} method="post">
                    <input type="submit" value="Delete Album"/>
                </Form>
            </div>
        </div>
    );
}

export default Show;