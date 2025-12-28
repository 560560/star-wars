// Общие типы для пагинации
export type PaginatedResponse<T> = T[]

// Персонажи (People)
export interface IPerson {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string // URL планеты
  films: string[] // URLs фильмов
  species: string[] // URLs рас
  vehicles: string[] // URLs транспорта
  starships: string[] // URLs звездолетов
  created: string
  edited: string
  url: string
}

// Фильмы (Films)
export interface IFilm {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[] // URLs персонажей
  planets: string[] // URLs планет
  starships: string[] // URLs звездолетов
  vehicles: string[] // URLs транспорта
  species: string[] // URLs рас
  created: string
  edited: string
  url: string
}

// Планеты (Planets)
export interface IPlanet {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[] // URLs персонажей
  films: string[] // URLs фильмов
  created: string
  edited: string
  url: string
}

// Расы (Species)
export interface ISpecies {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: string | null // URL планеты или null
  language: string
  people: string[] // URLs персонажей
  films: string[] // URLs фильмов
  created: string
  edited: string
  url: string
}

// Звездолеты (Starships)
export interface IStarship {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[] // URLs персонажей
  films: string[] // URLs фильмов
  created: string
  edited: string
  url: string
}

// Транспорт (Vehicles)
export interface IVehicle {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: string[] // URLs персонажей
  films: string[] // URLs фильмов
  created: string
  edited: string
  url: string
}

// Параметры запроса для списков
export interface IListRequestParams {
  search?: string
}

// Union type для всех возможных ресурсов SWAPI
export type SwapiResource =
  | IPerson
  | IFilm
  | IPlanet
  | ISpecies
  | IStarship
  | IVehicle
