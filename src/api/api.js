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

        return instance.get(`${filmUrl.replace("http:/", "https:/")}`)
    },
    getResidentData(residentUrl) {
        return instance.get(`${residentUrl.replace("http:/", "https:/")}`)
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
        return instance(url.replace("http:/", "https:/"))
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
        return instance.get(`${filmUrl.replace("http:/", "https:/")}`)
    },

    getHomePlanet(homePlanetUrl) {
        return instance.get(`${homePlanetUrl.replace("http:/", "https:/")}`)
    },

    getStarshipData(starshipUrl) {
        return instance.get(`${starshipUrl.replace("http:/", "https:/")}`)
    },
    getVehiclesData(vehicleUrl) {
        return instance.get(`${vehicleUrl.replace("http:/", "https:/")}`)
    },
    getSpecieData(specieUrl) {
        return instance.get(`${specieUrl.replace("http:/", "https:/")}`)
    }
}