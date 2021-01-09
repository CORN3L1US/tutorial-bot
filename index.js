/*
──────────────────────────────────────────────────────────────────────────────────────────────
--██████████-███████████-████████--███████---██-███████--██------████-██-----██--████████-----
--███--------███-----███-██----███-██---██---██-------██-██-----██-██-██-----██--██-----██----
--██---------██-------██-██----██--██---██--███--------█-██--------██-██-----██--██-----------
--██---------██-------██-███████---██---██--██------████-██--------██-██-----██----███--------
--███--------███-----███-██---███--██---█████--██------█-███-------██-███----██-██----███-----
--██████████-███████████-███--████-██---████----████████-█████████-██-████████---████████-----
────────────────────────────────────────────────────────────────────────────────────────────── 
 Tutorial Discord Bot by CORN3L1US 
 Discord: CORN3L1US#9999
 Feel free to use it as you wish :)


 Wanna upgrade the bot? Visit this website to learn Discord.js: https://discord.js.org/#/



*/


// Just a bunch of necessary variables for the bot to work properly:

const Discord = require("discord.js"); // Variable that defines the Discord.js framework

var bot = new Discord.Client(); // Defines a new discord client (A bot).

const token = "TOKEN HERE"; // copypaste Your token here. Get your token here: https://discord.com/developers/applications


const prefix = "PREFIX HERE";  // Choose your prefix here



bot.on("ready", () => {

 console.log(`${bot.user.tag} is up and running!`); //  Makes you sure that your bot is online in the console





  bot.user.setPresence({ //  Gives your bot an custom status on discord

    activity: { name: `I'm wating for a status`, type: "WATCHING" }, // Choose: WATCHING, LISTENING or PLAYING for the status

    status: "online",

  });

});


// A basic command handler for your commands. 
//IF you know what you are doing, then you can make a more advanced and manageable command handler with multiple files.
bot.on("message", (message) => {

  if(!message.content.startsWith(prefix) || message.author.bot) return; // Basically just tells the bot that if your command dose not start with your prefix, then it will not work.
                            
  const args = message.content.slice(prefix.length).split(/ +/); // Makes us able to make commands with gaps

  const command = args.shift().toLowerCase();

  if(command === 'hey'){ // An if statement. So if you write "!HEY" it will reply with "Whats Up!"."
    message.reply("whats up!") // replys
    
  } else if (command === 'multiple') { // Make multiple commands with an else if statement. Works the same way as the command above.
    message.channel.send("Yes, multiple :O") // Sends a message to the channel instead of replying

  } else if (command === 'embed') { // An embed is a box with text formed in a really nice way.

    // You can change a lot of different things in embeds, to match your style

    const embed = new Discord.MessageEmbed() // A local variable that defines an embed

	.setColor('#00ff00') // An colour for your embed. right now it's green. you can find more colours here: https://www.w3schools.com/colors/colors_picker.asp
	.setTitle(`I'm a title`) // A title for your embed
	.setDescription(`I'm a description`) // A description for your embed
	.setThumbnail('https://cdn.discordapp.com/attachments/752934115791339615/796741239055581184/corn2.png') // A little picture for your embed
	.addField('Inline field title', 'Some value here', true) // Makes a filed with text. You can ad more if you wan't to.
	.setTimestamp() // Sets a timestamp in your embed.

// This was just a few features for an embed. you find alot more information about embeds here: https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor

    message.channel.send(embed) // Sends the variable "embed"
  } 

});






bot.login(token); // Logs your bot with your token
