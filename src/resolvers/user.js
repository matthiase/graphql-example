import uuidv4 from 'uuid/v4'

export default {
  Query: {
    me: (parent, args, { me }) => {
      return me
    },
    users: (parent, args, { models }) => {
      return Object.values(models.users)
    },
    user: (parent, { id }, { models }) => {
      return models.users[id]
    }
  },

  User: {
    messages: (user, args, { models }) => {
      return Object.values(models.messages).filter(
        message => message.userId === user.id
      )
    }
  }
}
