export interface Country {
    name: {
        official: string
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
    isFav: boolean
}
