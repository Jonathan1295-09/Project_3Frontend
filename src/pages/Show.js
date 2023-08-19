import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const album = useLoaderData();

    return (
        <div className="album">
            <h1>{album.albumName}</h1>
            <h2>{album.artist}</h2>
            <img src={album.image} alt={album.albumName} />

            <h2>Update {album.name}</h2>
            <Form action={`/update/${album._id}`} method="post" className="updateform">
                <input type="text" name="AlbumName" placeholder="Album Name" defaultValue={album.albumName}/>
                <input type="text" name="artist" placeholder="Artist" defaultValue={album.artist} />
                <input type="text" name="image" placeholder="Image" defaultValue={album.image}  />
                <input type="text" name="yearReleased" placeholder="Year Releaed" defaultValue={album.yearReleased}  />
                <input type="text" name="linkToAlbum" placeholder="Link To Album" defaultValue={album.linkToAlbum}  />
                <input type="submit" defaultValue="Create Album"/>
            </Form>

            <h2>Delete Album</h2>
            <Form action={`/delete/${album._id}`} method="post">
                <input type="submit" value="Delete Album"/>
            </Form>
        </div>
    );
}

export default Show;