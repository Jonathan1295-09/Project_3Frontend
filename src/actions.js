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
        credentials: 'include',
        headers: {
            // tells the backend the data is json
            "Content-Type" : "application/json"
        },
        // sending the json string of the newAlbum object
        body: JSON.stringify(newAlbum)
    })

    // redirect the user to the frontend index
    return redirect('/dashboard')
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
        credentials: 'include',
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
        method: 'delete',
        credentials: 'include'
    })

    // redirect the user back to the frontend index
    return redirect('/dashboard')
}

export const signupAction = async ({ request }) => {
    // grabbing form data
	const formData = await request.formData();
    // building out new user
	const newUser = {
		username: formData.get('username'),
		password: formData.get('password'),
	};
    // send new user to the backend
	const response = await fetch(`${baseUrl}/signup`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
        // send the json string of the new user
		body: JSON.stringify(newUser),
	});
    // check if status if 400 or more
	if (response.status >= 400) {
        // alert the details of the error
		alert(response.statusText);
        // redirect back to the frontend signup
		return redirect('/signup');
	}
	return redirect('/login');
};

export const loginAction = async ({ request }) => {
    // grab the form data
	const formData = await request.formData();
    // build out the user
	const user = {
		username: formData.get('username'),
		password: formData.get('password'),
	};
    // send the user to our backend
	const response = await fetch(`${baseUrl}/login`, {
		method: 'post',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});
    // check if status is 400 or more
	if (response.status >= 400) {
		alert(response.statusText);
		return redirect('/login');
	}
    // store whether loggedIn in localStorage
	localStorage.setItem('loggedIn', JSON.stringify({ status: true }));

    // redirect back to the frontend index
	return redirect('/dashboard');
};