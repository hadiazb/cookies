export interface Country {
    name: string
    code: string
}

export const setDefaultCountry = (countriesArr: Country[], countryName?: string): string => {
    if (!countryName) {
        return ''
    }
    return countriesArr.find((country) => country.code === countryName)?.code ?? ''
}

export const findCountryByCode = (countriesArr: Country[], countryCode?: string): string => {
    if (!countryCode) {
        return ''
    }
    return countriesArr.find((country) => country.code === countryCode)?.name ?? ''
}

export const countries: Country[] = [
    {
        name: 'Costa Rica',
        code: 'CRI',
    },
    {
        name: 'Argentina',
        code: 'ARG',
    },
    {
        name: 'Venezuela',
        code: 'VEN',
    },
    {
        name: 'Guatemala',
        code: 'GTM',
    },
    {
        name: 'Mexico',
        code: 'MEX',
    },
    {
        name: 'Belice',
        code: 'BLZ',
    },
    {
        name: 'Puerto Rico',
        code: 'PRI',
    },
    {
        name: 'Ecuador',
        code: 'ECU',
    },
    {
        name: 'Panamá',
        code: 'PAN',
    },
    {
        name: 'Honduras',
        code: 'HND',
    },
    {
        name: 'Bolivia',
        code: 'BOL',
    },
    {
        name: 'El Salvador',
        code: 'SLV',
    },
    {
        name: 'Peru',
        code: 'PER',
    },
    {
        name: 'Uruguay',
        code: 'URY',
    },
    {
        name: 'Colombia',
        code: 'COL',
    },
    {
        name: 'Republica Dominicana',
        code: 'DOM',
    },
    {
        name: 'España',
        code: 'ESP',
    },
    {
        name: 'Paraguay',
        code: 'PRY',
    },
    {
        name: 'Chile',
        code: 'CHL',
    },
    {
        name: 'Cuba',
        code: 'CUB',
    },
    {
        name: 'Nicaragua',
        code: 'NIC',
    },
]
