//all the shit
const discord = require('discord.js');
const token = "haha imagine if i leaked the token lol";
const client = new discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});
const prefix = "c!";

/* reference
help - help command
test - responds hello world
github - gives github link
about - about bot
rockpaperscissors - responds rock paper or scissors
flipcoin - flip a coin
say - says whatever after it
invite - gives invite link
whoami - your username
uppercase - converts text to uppercase
lowercase - converts text to lowercase
*/

//bot itself
client.login(token);
client.once("ready", async () => {
    client.user.setActivity('c!', {type: "LISTENING"});
    console.log(`${client.user.tag} is ONLINE :)`);
});
client.on("messageCreate", function command(message){
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        let command = message.content.replace(prefix, '');
        if (command == "help") {
            message.reply("https://raw.githubusercontent.com/imightexist/bottest1234/main/commands.txt");
        }
        if (command == "test") {
            message.reply("Hello World!");
        }
        if (command == "github"){
            message.reply("https://github.com/imightexist/bottest1234/");
        }
        if (command == "about"){
            message.reply("BotTest1234 by iexist");
        }
        if (command == "rockpaperscissors"){
            random = Math.floor(Math.random() * 3) + 1;
            if (random == 1){
                message.reply("rock");
            } else if (random == 2){
                message.reply("paper");
            } else{
                message.reply("scissors");
            }
        }
        if (command == "flipcoin"){
            random = Math.floor(Math.random() * 2) + 1;
            if (random == 1){
                message.reply("heads");
            } else{
                message.reply("tails");
            }
        }
        if (command == "whoami"){
            message.reply(message.author.username);
        }
        if (command.includes("say ")){
            message.reply(command.replace("say ",""));
        }
        if (command.includes("uppercase ")){
            message.reply(command.replace("uppercase ","").toUpperCase());
        }
        if (command.includes("lowercase ")){
            message.reply(command.replace("lowercase ","").toLowerCase());
        }
        if (command == "invite"){
            message.reply("https://discord.com/api/oauth2/authorize?client_id=860600312170545162&permissions=8&scope=bot");
        }
    }
});
