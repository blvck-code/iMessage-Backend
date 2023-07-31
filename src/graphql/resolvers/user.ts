import { CreateUsernameResponse, GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async function createUsername(
      _: any,
      { username }: { username: string },
      { session, prisma }: GraphQLContext
    ): Promise<CreateUsernameResponse> {
      console.log("Here is the session ==>>", session);
      // Check if session exist
      if (!session?.user) {
        console.log("Failed, no username");
        return {
          error: "Not authorized",
        };
      }

      const { id: userId } = session.user;
      try {
        /**
         * Check that username is not taken
         */
        const existingUser = await prisma.user.findUnique({
          where: {
            username,
          },
        });

        if (existingUser) {
          console.log("Failed, user exists");
          return {
            error: "Username already taken. Try another",
          };
        }

        /**
         * Update username after validations passes
         */
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            username,
          },
        });
        return {
          success: true,
        };
      } catch (error: any) {
        console.log("createUsername", error);
        return {
          error: error.message,
        };
      }
    },
  },
  //   Subscription: {},
};

export default resolvers;
