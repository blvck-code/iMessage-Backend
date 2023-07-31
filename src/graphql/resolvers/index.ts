import userResolvers from "./user";
// @ts-ignore
import merge from "lodash.merge";

const resolvers = merge({}, userResolvers);

export default resolvers;
