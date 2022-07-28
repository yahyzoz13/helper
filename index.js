const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey there!'))

app.listen(port, () =>
console.log(`Example app listening on port ${port}`)
);

require('dotenv').config();
const { Client, Collection } = require('discord.js');
const { timeout, disable_fetching } = require('./config.json');

const client = new Client({
  intents: 32767,
  disableEveryone: true
});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json');
require('./handler')(client);



client.login("OTE5NjM2NjQ4NDE1ODc5MjE5.GReyqH.Y6xs_GlZ3bT-qkB-sT0nnJl2IhW0niQ_FNWfwc");