//Node.js Javascript bot script for Discord to connect to EasyUO through registry variables
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json'); //Discord bot auth token
const { exec } = require('child_process');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
});

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "vendor") {
        multiplyCommand(arguments, receivedMessage)
    } else if (primaryCommand == "say") {
        sayCommand(arguments, receivedMessage)
    } else if (primaryCommand == "g") {
        gCommand(arguments, receivedMessage)
    } else {
       // receivedMessage.channel.send("I don't understand the command. Try `!help` or `!say`")
       checkCommand(primaryCommand, arguments, receivedMessage)
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("It looks like you might need help with " + arguments)
    } else {
        receivedMessage.channel.send('!say MSG \n Will simply say messages outloud.\n !g MSG\n Will message in the guild chat.\n !say ,MSG\n Will message in General Chat.\n !vendor SEARCH\n Will post a screenshot of the first page of the vendor search.')
    }
}

function checkCommand(primaryCommand, arguments, receivedMessage) {
    let product = ""
    arguments.forEach((value) => {
	product = product + value
    })
    exec("reg add HKCU\\Software\\EasyUO /v *" + primaryCommand + product + " /t REG_SZ /f /d " + "-1" , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
}

function sayCommand(arguments, receivedMessage) {
    let product = ""
    arguments.forEach((value) => {
	product = product + value + " "
    })
    exec("reg add HKCU\\Software\\EasyUO /v *SAY /t REG_SZ /f /d " + '"' + product + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
}

function vsearchCommand(arguments, receivedMessage) {
    receivedMessage.channel.send('Searching vendors for ' + arguments + "...");
    // Provide a path to a local file
    let filePath = "C:\\Users\\jp2\\Desktop\\search.png"
    exec("reg add HKCU\\Software\\EasyUO /v *VENDORSEARCH /t REG_SZ /d -1 /f", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
    let product = ""
    arguments.forEach((value) => {
	product = product + value + " "
    })
    exec("reg add HKCU\\Software\\EasyUO /v *VENDORSEARCHQ /t REG_SZ /f /d " + '"' + product + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
    exec("del " + filePath , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });

    var generalChannel = client.channels.get("000000000000000000000") // Replace with known channel ID    
    
    setTimeout(function(){ //Replace with waitforfile to appear function getFile
       const localFileAttachment = new Discord.Attachment(filePath)
       generalChannel.send(localFileAttachment)
    }, 35000);
}

function getFile(path, timeout) {
    const timeout2 = setInterval(function() {

        const file = path;
        const fileExists = fs.existsSync(file);

        console.log('Checking for: ', file);
        console.log('Exists: ', fileExists);

        if (fileExists) {
	    const localFileAttachment = new Discord.Attachment(path)
            generalChannel.send(localFileAttachment)
            clearInterval(timeout);
        }
    }, timeout);
};
