let basicPath = "https://starwars.reactlearning.ru/img/"

let initialState = {
    planets: [
        {name: "Tatooine", imgSrc: `${basicPath}planets/tatooine.png`},
        {name: "Alderaan", imgSrc: `${basicPath}planets/alderaan.png`},
        {name: "Aleen Minor", imgSrc: `${basicPath}planets/aleenMinor.png`},
        {name: "Bespin", imgSrc: `${basicPath}planets/bespin.png`},
        {name: "Bestine IV", imgSrc: `${basicPath}planets/bestine4.png`},
        {name: "Cato Neimoidia", imgSrc: `${basicPath}planets/catoNeimoidia.png`},
        {name: "Cerea", imgSrc: `${basicPath}planets/cerea.png`},
        {name: "Champala", imgSrc: `${basicPath}planets/champala.png`},
        {name: "Chandrila", imgSrc: `${basicPath}planets/chandrila.png`},
        {name: "Concord Dawn", imgSrc: `${basicPath}planets/concordDawn.png`},
        {name: "Corellia", imgSrc: `${basicPath}planets/corellia.png`},
        {name: "Coruscant", imgSrc: `${basicPath}planets/coruscant.png`},
        {name: "Dagobah", imgSrc: `${basicPath}planets/dagobah.png`},
        {name: "Dantooine", imgSrc: `${basicPath}planets/dantooine.png`},
        {name: "Dathomir", imgSrc: `${basicPath}planets/dathomir.png`},
        {name: "Dorin", imgSrc: `${basicPath}planets/dorin.png`},
        {name: "Endor", imgSrc: `${basicPath}planets/endor.png`},
        {name: "Eriadu", imgSrc: `${basicPath}planets/eriadu.png`},
        {name: "Felucia", imgSrc: `${basicPath}planets/felucia.png`},
        {name: "Geonosis", imgSrc: `${basicPath}planets/geonosis.png`},
        {name: "Glee Anselm", imgSrc: `${basicPath}planets/gleeAnselm.png`},
        {name: "Haruun Kal", imgSrc: `${basicPath}planets/haruunKal.png`},
        {name: "Hoth", imgSrc: `${basicPath}planets/hoth.png`},
        {name: "Iktotch", imgSrc: `${basicPath}planets/iktotch.png`},
        {name: "Iridonia", imgSrc: `${basicPath}planets/iridonia.png`},
        {name: "Kalee", imgSrc: `${basicPath}planets/kalee.png`},
        {name: "Kamino", imgSrc: `${basicPath}planets/kamino.png`},
        {name: "Kashyyyk", imgSrc: `${basicPath}planets/kashyyyk.png`},
        {name: "Malastare", imgSrc: `${basicPath}planets/malastare.png`},
        {name: "Mirial", imgSrc: `${basicPath}planets/mirial.png`},
        {name: "Mon Cala", imgSrc: `${basicPath}planets/monCala.png`},
        {name: "Mustafar", imgSrc: `${basicPath}planets/mustafar.png`},
        {name: "Muunilinst", imgSrc: `${basicPath}planets/muunilinst.png`},
        {name: "Mygeeto", imgSrc: `${basicPath}planets/mygeeto.png`},
        {name: "Naboo", imgSrc: `${basicPath}planets/naboo.png`},
        {name: "Nal Hutta", imgSrc: `${basicPath}planets/nalHutta.png`},
        {name: "Ojom", imgSrc: `${basicPath}planets/ojom.png`},
        {name: "Ord Mantell", imgSrc: `${basicPath}planets/ordMantell.png`},
        {name: "Polis Massa", imgSrc: `${basicPath}planets/polisMassa.png`},
        {name: "Quermia", imgSrc: `${basicPath}planets/quermia.png`},
        {name: "Rodia", imgSrc: `${basicPath}planets/rodia.png`},
        {name: "Ryloth", imgSrc: `${basicPath}planets/ryloth.png`},
        {name: "Saleucami", imgSrc: `${basicPath}planets/saleucami.png`},
        {name: "Serenno", imgSrc: `${basicPath}planets/serenno.png`},
        {name: "Shili", imgSrc: `${basicPath}planets/shili.png`},
        {name: "Skako", imgSrc: `${basicPath}planets/skako.png`},
        {name: "Socorro", imgSrc: `${basicPath}planets/socorro.png`},
        {name: "Stewjon", imgSrc: `${basicPath}planets/stewjon.png`},
        {name: "Sullust", imgSrc: `${basicPath}planets/sullust.png`},
        {name: "Tholoth", imgSrc: `${basicPath}planets/tholoth.png`},
        {name: "Toydaria", imgSrc: `${basicPath}planets/toydaria.png`},
        {name: "Trandosha", imgSrc: `${basicPath}planets/trandosha.png`},
        {name: "Troiken", imgSrc: `${basicPath}planets/troiken.png`},
        {name: "Tund", imgSrc: `${basicPath}planets/tund.png`},
        {name: "Umbara", imgSrc: `${basicPath}planets/umbara.png`},
        {name: "unknown", imgSrc: `${basicPath}planets/unknown.png`},
        {name: "Utapau", imgSrc: `${basicPath}planets/utapau.png`},
        {name: "Vulpter", imgSrc: `${basicPath}planets/vulpter.png`},
        {name: "Yavin IV", imgSrc: `${basicPath}planets/yavin4.png`},
        {name: "Zolan", imgSrc: `${basicPath}planets/zolan.png`},
    ],
    sections: [
        {name: "people", imgSrc: `${basicPath}sections/people.png`},
        {name: "planets", imgSrc: `${basicPath}sections/planets.png`},
        {name: "films", imgSrc: `${basicPath}sections/films.png`},
        {name: "species", imgSrc: `${basicPath}sections/species.png`},
        {name: "vehicles", imgSrc: `${basicPath}sections/vehicles.png`},
        {name: "starships", imgSrc: `${basicPath}sections/starships.png`},
    ]

}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
}

export default imagesReducer