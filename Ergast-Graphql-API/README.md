# Ergast-Graphql-API

A NodeJS, Graphql middleware for Ergast Developer API.

<http://ergast.com/mrd/>

### How to use

```
1. git clone https://github.com/vaughan189/Ergast-Graphql-API
2. npm install
3. npm start
```

### How to test

Open the graphql palyground <http://localhost:8000/graphql>

### 1. Seasons List

`To Get the list of seasons.`

`GraphQL Payload`:

```{
  seasons {
    xmlns
    series
    url
    limit
    offset
    total
    SeasonTable {
      Seasons {
        url
      }
    }
  }
}
```

`JSON Response`:

```
{
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.4",
        "series": "f1",
        "url": "http://ergast.com/api/f1/seasons.json",
        "limit": "30",
        "offset": "0",
        "total": "71",
        "SeasonTable": {
            "Seasons": [
                {
                    "season": "1950",
                    "url": "https://en.wikipedia.org/wiki/1950_Formula_One_season"
                },
                {
                    "season": "1951",
                    "url": "https://en.wikipedia.org/wiki/1951_Formula_One_season"
                },
                {
                    "season": "1952",
                    "url": "https://en.wikipedia.org/wiki/1952_Formula_One_season"
                },
                {
                    "season": "1953",
                    "url": "https://en.wikipedia.org/wiki/1953_Formula_One_season"
                },
                {
                    "season": "1954",
                    "url": "https://en.wikipedia.org/wiki/1954_Formula_One_season"
                },
                {
                    "season": "1955",
                    "url": "https://en.wikipedia.org/wiki/1955_Formula_One_season"
                }
            ]
        }
    }
}
```
