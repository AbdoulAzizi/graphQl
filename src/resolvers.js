let users = [
  { id: 1, name: 'John', email: 'john@gmail.com', age: 30 },
  { id: 2, name: 'Jane', email: 'jane@gmail.com', age: 25 },
  { id: 3, name: 'Bob', email: 'Bob@yahoo.com', age: 20 },
];

const messageHello = 'Hello';

const resolvers = {
  Query: {
    hello: (parent, args, context, info) => messageHello,
    users: (parent, args, context, info) => users,
    // user: (parent, args) => users.find((user) => user.id == args.id),
    user: (parent, { id }) => users.find((user) => user.id == id),
  },
};

export default resolvers;
