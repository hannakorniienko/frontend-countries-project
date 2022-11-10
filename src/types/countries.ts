export interface Country {
    name: {
        common: string
    },
    currencies: {
        [key: string]: {
            name: string
        }
    },
    capital?: string[],
    region: string,
    languages: {
        [key: string]: string
    },
    flags: {
        png: string,
        svg: string
    },
    population: number,
    continents?: string[],
    area: number,
    isFav: boolean
}

export type Props = {
    countries: Country[]
  }
