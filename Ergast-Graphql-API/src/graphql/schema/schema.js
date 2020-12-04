module.exports = `
type Seasons {
    xmlns: String!
    series: String!
    url: String!
    limit: String!
    offset: String!
    total: String!
    SeasonTable: SeasonTableCollection
  }
  
  type SeasonTableCollection {
      Seasons: [Season!]!
  }
  
  type Season {
    season: String!
    url: String
  }
  
  type Query {
      seasons: Seasons!
  }
`;