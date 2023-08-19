import { baseUrl } from "./base_url";

export const albumsLoader = async () => {
    const response = await fetch(`${baseUrl}/albums`)
    const albums = await response.json()
    return albums
}

export const albumLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/albums/${id}`)
    const album = await response.json()
    return album
}