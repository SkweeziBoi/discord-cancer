var Discord = require("discord.js")
var cancerturn = require("cancercase")
var cancer = new Discord.Client()
var prefix = "kek."

cancer.on("ready", () => {
	console.log(`Cancerous shit in ${cancer.guilds.size} Server`)
});

cancer.on("message", msg => {
	  let cancerargs = msg.content.split(" ").slice(1);
	if (msg.content.startsWith(prefix + "cancer leet")) {
		var text = cancerargs.join(" ").replace("leet", " ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:" + Cancercase.leetify())
	} 	
	if (msg.content.startsWith(prefix + "cancer caps")) {
		var text = cancerargs.join(" ").replace("caps", " ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:" + Cancercase.cancerify())
	}
	if (msg.content.startsWith(prefix + "help")) {
		msg.channel.send({embed: {
			color: 0xF7FF00,
			description: "Discord Cancer, the most cancerous bot on discord\nCommands are:\n\n| kek.cancer leet <text> **-** Turn text into leet speak\n| kek.cancer <text> **-** Turn text into bad cancer\n| kek.cancertree **-** Turn text into a christmas tree\n| kek.eval <code> **-** Evaluates or \"runs\" javascript code\n\n**All of the current commands are possible by `cancercase`, an npm module**\n\nMore commands are comming so dont kick the bot just cuz of the lack of commands"
		}})
	}
		if (msg.content.startsWith(prefix + "cancertree")) {
		var text = cancerargs.join(" ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:\n```\n" + Cancercase.treeify() + "\n```")
	}
	if (msg.content.startsWith(prefix + "eval")) {
		if (msg.author.id !== "328645619394543627") {
			return msg.channel.send("This command is cancerous.")
		} else {
		  try {
		  	let code = cancerargs.join(" ")
    var evaled = eval(code);
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);
    if (code.includes("msg.delete()")) {
      msg.channel.send("```js\n" + clean(evaled) + "\n```")
    } else {
    msg.channel.send( {embed : {
      color: 0x49FC00,
      description: `Cancerous code has been evaluated:\n\`\`\`js\n${clean(evaled)}\n\`\`\``
    }})
  }
  } catch (err) {
    msg.channel.send("`ERROR` ```js\n" +
      clean(err) +
      "\n```");
  }
	}
}
	if (msg.content.startsWith(prefix + "ping")) {
		msg.channel.send("Shitty Response time:tm:")
	}
});

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}


cancer.login("no shit")
