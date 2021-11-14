import graphql, { GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        user_id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString},
        email: { type: GraphQLString},
        created_on: { type: GraphQLString},
        last_login: { type: GraphQLString}
    }
})