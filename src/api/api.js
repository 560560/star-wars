import * as axios from "axios";

let instance = axios.create({
    baseURL: "http://swapi.dev/api/",

});


export const planetsApi = {
    getPlanets(pageNumber) {
        return instance.get(`planets/?page=${pageNumber}`)
    },
    getPlanetDescription(planetId) {
        return instance.get(`planets/${planetId}`)
    },
    getFilmData(filmUrl) {
        return instance.get(filmUrl)
    },
    getResidentData(residentUrl) {
        return instance.get(residentUrl)
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

export const peopleApi = {
    getPeople(pageNumber) {
        return instance.get(`people/?page=${pageNumber}`)
    },
    getPeopleDescription(personId) {
        return instance.get(`people/${personId}`)
    },
    getFilmData(filmUrl) {
        return instance.get(filmUrl)
    },

    getHomePlanet(homePlanetUrl) {
        return instance.get(homePlanetUrl)
    },

    getStarshipData(starshipUrl) {
        return instance.get(starshipUrl)
    },
    getVehiclesData(vehicleUrl) {
        return instance.get(vehicleUrl)
    },
    getSpecieData(specieUrl) {
        return instance.get(specieUrl)
    }
}