const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    events(query: SportMarketQueryInputType!): [EventType]
  }

  type Subscription {
    event(id: Int = null): EventType
    events(query: SportMarketSubscriptionInputType!): EventsSubscriptionType
  }

  type EventType {
    eventId: Int!
    eventCode: String!
    awayJersey: String!

  }

  type EventsSubscriptionType {
    deletedEvents: [Int]
    events: [EventType]
  }

  input SportMarketQueryInputType {
    sportType: TiEnumSportType!
  }

  input SportMarketSubscriptionInputType {
    sportType: TiEnumSportType = null
    marketPageType: EnumMarketPageType = null
  }

  enum EnumMarketPageType {
    Unknown
    Today
    EarlyMarket
    Live
    OETG
    CorrectScore
    HTFT# DC_1X2
    _1X2DC
    FGLG
    Mixparlay
    Outright
    PopularEvents
  }

  enum EnumMarketType {
    Unknown
    Handicap
    OddEven
    OverUnder
    CorrectScore# 1 X2
    M1X2
    TotalGoal
    FH_Handicap
    FH_1X2
    FH_OverUnder
    HTFT
    MoneyLine
    FH_OddEven
    FGLG
    FH_CorrectScore
    DoubleChance
    LiveScore
    FH_LiveScore
    Game
    OutRight
    MixParlay
  }

  enum TiEnumSportType {
    UNKNOWN
    SOCCER
    BASKETBALL
    FOOTBALL
    HOCKEY
    BADMINTON
    POOL
    MOTOR_SPORT
    TENNIS
    BASEBALL
    VOLLEYBALL
    OTHERS
    GOLF
    BOXING
    CRICKET
    TABLE_TENNIS
    RUGBY
    HANDBALL
    CYCLING
    ATHLETICS
    BEACH_SOCCER
    FUTSAL
    ENTERTAINMENT
    FINANCIAL
    DARTS
    OLYMPIC
    LACROSSE
    WATER_POLO
    WINTER_SPORTS
    SQUASH
    FIELD_HOCKEY
    MIXED_MARTIAL_ARTS
    E_SPORTS
    GAELIC_FOOTBALL
    HURLING
    MUAY_THAI
    AUSSIE_RULES_FOOTBALL
    BANDY
    WINTER_OLYMPIC
  }
`;

module.exports = typeDefs;
