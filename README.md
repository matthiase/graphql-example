## Development Setup

To get started:

Check the following commands work:
```
$ git -v
$ docker -v
$ docker-compose
```

And run:
```
$ git clone git@github.com:matthiase/graphql-example.git
$ cd graphql-example
$ docker-compose up --build
```

Now point your browser to http://localhost:8000/graphql to start exploring the GraphQL

### Examples
```
mutation {
  createMessage(text: "A new message") {
    id
  }
}
```

```
query {
  users {
    id
    username
    messages {
      id
      text
    }
  }
}
```

```
mutation {
  deleteMessage(id:1)
}
```
