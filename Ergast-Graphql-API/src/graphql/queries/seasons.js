const Seasons = {
    SeasonTable: {
        Seasons: (parent, args, context) => context.ergastAPI.getAllSeasons()}
}

const seasons = {
    resolve: (parent, args, context, info) => context.ergastAPI.getAllSeasons()}

module.exports = {
    Seasons,
    seasons
}