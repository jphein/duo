//Node.js Javascript bot script for Discord to connect to EasyUO through registry variables.

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

    switch(primaryCommand) {		
	case "help":echo %username%
    		helpCommand(arguments, receivedMessage) //A simple text only response. No need to bother easyuo.
    	break;
	case "vendor":
    		vsearchCommand(arguments, receivedMessage) //A more complex function needing it's own entry. 
		    					   //It will run a EasyUO script, and then post a screenshot.
    	break;
	//case "etc..."
		    //add more here
		    //etcCommand()
	//break;	    
  	default:
    	//If not in the above list then simply pass it along as a registry variable.
       	//If there are any arguments, use them as the value to the registry variable. 
	//If not then set the reg variable to #true (-1). //The Say example for instance.
	//There is no need to make it it's own entry. If you use the "!say this is my message".
	//It will put "this is my message" in the registry variable *SAY
	// The EasyUO say script say.txt can look like this:
	//	while *SAY <> #false
	//	{
  	//		msg *SAY $
 	//		set *SAY #false
	//	}    
       	checkCommand(primaryCommand, arguments, receivedMessage)
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
	if (arguments = "say") {
		receivedMessage.channel.send('!say MSG\n Will simply say messages outloud.\n'+
					     '!say \\MSG\n Will message in the guild chat.\n' +
					     '!say /MSG\n Will message in the party chat.\n' +
					     '!say ,MSG\n Will message in the general chat.\n')
	}
    } else {
        receivedMessage.channel.send('!help Will display this message. "!help say" will tell more about the say command.\n'+				     
				     '!vendor SEARCH ITEM\n Will post a screenshot of the first page of the vendor search.')
    }
}

function vsearchCommand(arguments, receivedMessage) {
    receivedMessage.channel.send('Searching vendors for ' + arguments + "...");
    // Provide a path to a local file
    let filePath = "C:\\Users\\%username%\\Desktop\\duo\\search.png"
    
    exec("reg add HKCU\\Software\\EasyUO /v *VENDOR /t REG_SZ /f /d " + '"' + product + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
    //delete existing screenshotecho %username%
    exec("del " + filePath , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    }); 
    //Post screenshot
    setTimeout(function(){ //Replace with waitforfile to appear function getFile
       const localFileAttachment = new Discord.Attachment(filePath)
       receivedMessage.channel.send(localFileAttachment)
    }, 35000); //Static timeout of 35 seconds is used until I can figure out how to detect the file exists.
}

//not yet integrated for dyanmic timing of upload 
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
}

function checkCommand(primaryCommand, arguments, receivedMessage) {
    let product = ""
    arguments.forEach((value) => {
	product = product + value
    })
    exec("reg add HKCU\\Software\\EasyUO /v *" + primaryCommand + " /t REG_SZ /f /d " + '"' + product + '"' , (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    });
}
