import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://swapi.dev/api/",

});


export const planetsApi = {
    getPlanets(pageNumber) {
        return instance.get(`planets/?page=${pageNumber}`)
    },
    getPlanetDescription(planetId) {
        return instance.get(`planets/${planetId}`)
    },
    getFilmData(filmUrl) {
        return instance.get(`${filmUrl}`)
    },
    getResidentData(residentUrl) {
        return instance.get(`${residentUrl}`)
    }
}

export const statisticsApi = {
    getSections () {
        return instance.get("")
    }
}
export const filmsApi = {
    getFilms () {
        return instance.get("films/")
    },
    getDescriptionData (url) {
        return instance(url)
    }
}