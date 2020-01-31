function trigger() {
var { graphql, buildSchema } = require('graphql');
var root = "https://codecheap-sql.herokuapp.com/v1/graphql";

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  alert(response);
});
} 
