// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDcwNTkxOTY5MTExMDQ4MTkz.DjYjXw.lmXMckefdHp8IztNLZZFmEjk1V0';

const ytdl = require('ytdl-core');

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
	client.login(token);
});

// Create an event listener for messages
client.on('message', msg => {
  if (msg.member.id === '394146948686413825'){
    msg.channel.send("I am the better bob!");
    msg.channel.send(bobrage);
  }

  if (msg.member.id === '231820363212914689'){
    const arg = msg.content.trim().split(/ +/g);
  }
});

// Log our bot in
client.login(token);

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
