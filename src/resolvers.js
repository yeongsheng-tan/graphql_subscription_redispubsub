const pubsub = require("./pubsub");
const { withFilter } = require('graphql-subscriptions');
module.exports = {
  Subscription: {
    event: {
      subscribe: (_, args) => pubsub.asyncIterator(`event.${args.id}`)
    },
  },
}
