// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const ytdl = require('ytdl-core');

const neuralnetwork = require('./neuralnetwork.js');
const network = new neuralnetwork();

const Token = require('./token.js');
const token = new Token();
const tokenNo = token.returnToken();

//custom emotes
const bobrage = "<:bobrage:464489494570074112>";
const estus = "<:estus:470297656854446081>";

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('deep learning bot is ready');
});

client.on("error", function () {
  console.log("error!");
	client.login(tokenNo);
});

// Create an event listener for messages
client.on('message', msg => {
  if (msg.member.id === '394146948686413825'){
    msg.channel.send("I am the better bob!");
    msg.channel.send(bobrage);
  }

  else if (msg.member.id === '231820363212914689'){
    const discordMessage = msg.content.trim().split(/ +/g);
    network.bagOfWords(discordMessage);
  }
});

// Log our bot in
client.login(tokenNo);

//JUST SOME RANDOM INHERITANCE STUFF
/*class ABC {
  constructor(){

  }

  a(z) {
    console.log(z);
  }
}

class DEF extends ABC{
  constructor(){
    super();
  }
}

let orenamae = new DEF();
orenamae.a("helloworld");*/
