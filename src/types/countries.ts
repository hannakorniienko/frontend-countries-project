export interface Country {
    name: {
        official: string
    },
    currencies: {
        name: string
    },
    capital: string[],
    region: string[],
    languages: {
        eng: string
    },
    flags: {
        png: string,
        svg: string
    },
}