import { IResolvers } from '@graphql-tools/utils';
const resolverMap: IResolvers = {
  Query: {
    users: (parent, args, context, info) => {
      console.log('🔥', parent, args, context, info);
      return ``;
    },
    todos: (parent, args, context, info) => {
      return;
    }
  },
  Mutation: {
    deleteuser: (parent, args, context, info) => {
      const deleted = ``;
      return deleted;
    }
  }
};
export default resolverMap;
