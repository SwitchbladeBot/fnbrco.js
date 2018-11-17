const Client = require('../lib/Client.js')
require('dotenv').config()
const client = new Client(process.env.FNBRCO_API_KEY)

client.getImages('Chomp Sr.').then(console.log)
