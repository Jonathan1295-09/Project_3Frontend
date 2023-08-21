import { baseUrl } from "./base_url";
import { redirect } from "react-router-dom";

const authCheck = () => {
	const loggedIn = localStorage.getItem('loggedIn');
	if (!loggedIn) {
		return false;
	}
	return true;
};

export const albumsLoader = async () => {

    if (!authCheck()) {
        return redirect('/login')
    }

    // make a call to backend index
    const response = await fetch(`${baseUrl}/albums`, {
        credentials:"include"
    })
    // convert the response into a js object
    const albums = await response.json()
    // return the albums
    return albums
}

export const albumLoader = async ({params}) => {

    if (!authCheck()) {
        return redirect('/login')
    }
    
    const id = params.id
    const response = await fetch(`${baseUrl}/albums/${id}`, {
        credentials: "include"
    })
    const album = await response.json()
    return album
}

export const mainLoader = async () => {
    if(authCheck()) {
        return redirect("/dashboard")
    }
    return {}
}