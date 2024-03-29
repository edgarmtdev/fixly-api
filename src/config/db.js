const mongoose = require('mongoose')
const {
  dbUsername, dbPassword, dbHost, dbName
} = require('.')

const connection = async () => {
  const connect = await mongoose.connect(
    `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`,
  )

  // eslint-disable-next-line no-console
  console.log(`MongoDB connected: ${connect.connection.host}`)
}

module.exports = {
  connection,
  mongoose,
}
