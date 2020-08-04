import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://swapi.dev/api/",

});


export const planetsApi = {
    getPlanets(pageUrl) {
        return instance.get(pageUrl)
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
