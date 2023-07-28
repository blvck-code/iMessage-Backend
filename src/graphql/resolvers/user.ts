const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      const { username } = args;
      console.log("Request in backend", args, context);
    },
  },
  //   Subscription: {},
};

export default resolvers;
