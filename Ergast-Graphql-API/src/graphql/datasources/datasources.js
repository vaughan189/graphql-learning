const { HTTPCache, RESTDataSource } = require('apollo-datasource-rest');

class ErgastAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://ergast.com/api/f1/';
        this.httpCache = new HTTPCache()
    }

    async getAllSeasons() {
        const seasons = await this.get('seasons.json');
        return seasons.MRData;
    }
};

module.exports = ErgastAPI;