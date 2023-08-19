// backend url
import { baseUrl } from "./base_url";
// allows us to redirect
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    // grab the data from the form
    const formData = await request.formData()
    // setting up the object for our new album
    const newAlbum = {
        albumName: formData.get("albumName"),
        artist: formData.get("artist"),
        image: formData.get("image"),
        yearReleased: formData.get("yearReleased"),
        linkToAlbum: formData.get("linkToAlbum")
    }
    // send the new album to the backend
    await fetch(`${baseUrl}/albums`, {
        // telling fetch to make a post request
        method: 'post',
        headers: {
            // tells the backend the data is json
            "Content-Type" : "application/json"
        },
        // sending the json string of the newAlbum object
        body: JSON.stringify(newAlbum)
    })

    // redirect the user to the frontend index
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    // grab the ide from the params
    const id = params.id
    // grabbing the data from the form
    const formData = await request.formData();
    // building out the updated album
    const updatedAlbum = {
        albumName: formData.get("albumName"),
        artist: formData.get("artist"),
        image: formData.get("image"),
        yearReleased: formData.get("yearReleased"),
        linkToAlbum: formData.get("linkToAlbum")
    }
    // sending the updated album to the backend
    await fetch(`${baseUrl}/albums/${id}`, {
        // telling fetch to make a put request
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        // sending the json string of the updatedAlbum object
        body: JSON.stringify(updatedAlbum)
    })

    // redirect the user back to the show page on the frontend
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grabbing the id from params
    const id = params.id
    // send a delete request to the backend
    await fetch(`${baseUrl}/albums/${id}`, {
        // telling fetch to make a delete request
        method: 'delete'
    })

    // redirect the user back to the frontend index
    return redirect('/')
}