const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      const { username } = args;
      console.log("Request in backend", args);
      console.log("Context resp ==>>", context);
    },
  },
  //   Subscription: {},
};

export default resolvers;
