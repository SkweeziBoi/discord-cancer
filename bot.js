var Discord = require("discord.js")
var cancerturn = require("cancercase")
var cancer = new Discord.Client()
var prefix = "kek."
var snekfetch = require("snekfetch")

cancer.on("ready", () => {
	console.log(`Cancerous shit in ${cancer.guilds.size} Servers`)
	cancer.user.setPresence({
	  game: {
		name: `kek.help for the most cancerous server on discord | ${cancer.guilds.size} Servers`,
		type: 0
	  }
	});
snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "no-bitch")
   .send({
    server_count: cancer.guilds.size
   })
   .then(console.log("Shit stats have been posted")) // add a thing when its done!
});

cancer.on("message", msg => {
	  let cancerargs = msg.content.split(" ").slice(1);

	if (msg.content.startsWith(prefix + "cancer leet")) {
		if (!cancerargs[1]) {
			msg.channel.send("Maybe a sentence or word? Or try `kek.cancer leet <something>`")
		} else {
		var text = cancerargs.join(" ").replace("leet", " ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:" + Cancercase.leetify())
	}
} 	

	if (msg.content.startsWith(prefix + "cancer caps")) {
		if (!cancerargs[1]) {
			msg.channel.send("Maybe a sentence or word? or try `kek.cancer caps <something>`")
		} else {
		var text = cancerargs.join(" ").replace("caps", " ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:" + Cancercase.cancerify())
	}
}

	if (msg.content.startsWith(prefix + "help")) {
		msg.channel.send({embed: {
			color: 0xF7FF00,
			description: "Discord Cancer, the most cancerous bot on discord" + 
			"\nCommands are:\n\n" + 
			"| kek.cancer leet <text> **---** Turn text into leet speak\n" + 
			"| kek.cancer caps <text> **---** Turn text into bad cancer\n" + 
			"| kek.cancertree <words> **---** Turn text into a christmas tree\n" + 
			"| kek.eval <code> **---** Evaluates or \"runs\" javascript code\n" + 
			"| kek.kek <something or someone> **---** Says kek to someone if they did something retarded or something looks or is stupid\n" +
			"| kek.stats **---** Gets statistics on the bot. Guilds, Users, etc.\n" +
			"| kek.invite **---** invite the bot to your discord server\n" + 
			"\n\n**Most of the current commands are possible by `cancercase`, an node module**" + 
			"\n\nMore commands are comming so dont kick the bot just cuz of the lack of commands"
		}})
	}

		if (msg.content.startsWith(prefix + "cancertree")) {
			if (!cancerargs[1]) {
			msg.channel.send("Maybe a sentence or word? or try `kek.cancertree <something>`")
		} else {
		var text = cancerargs.join(" ")
		let Cancercase = new cancerturn(text)
		msg.channel.send("Your cancer has been cancerified\nHere it is:\n```\n" + Cancercase.treeify() + "\n```")
	}
}

	if (msg.content === prefix + "invite") {
		msg.channel.send("u want to make your server *more cancerous*? Add me u twig :3 *->* https://discordapp.com/oauth2/authorize?client_id=353962657738391562&scope=bot&permissions=154630")
	}

	if (msg.content.startsWith(prefix + "kek")) {
		let keks = ["KEK", "kek", "Kek", "keK", "kEk"]
		msg.channel.send(`${keks[Math.floor(Math.random() * keks.length)]} ${cancerargs.join(" ")}`)
	}

if (msg.content === prefix + "info") {
	msg.channel.send({embed: {
		color: 0xF7FF00,
		description: "Discord Cancer, the most cancerous bot on discord." + "\n" + 
		"My creator is <@328645619394543627> (Skweezi Leekz#2426) and owns other bots aswell!" + "\n" + 
		"To view my stats, do `kek.stats`"
	}})
}
if (msg.content === prefix + "stats") {
	    const uptimeh = Math.floor(process.uptime() / (60 * 60));
  const uptimem = Math.floor(process.uptime() % (60 * 60) / 60);
  const uptimes = Math.floor(process.uptime() % 60);
	msg.channel.send({embed: {
		color: 0x49FC00,
		description: ":books: Library: Discord.JS" + "\n\n" +
		":tools: Creator: Skweezi Leekz#2426" + "\n\n" +
		`:alarm_clock: Uptime: ${uptimeh} Hours ${uptimem} Minutes ${uptimes} Seconds` + "\n\n" +
		`:homes: Servers: ${cancer.guilds.size}` + "\n\n" + 
		`Discord.JS Version: ${Discord.version}`
	}})
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
    msg.channel.send("You cant fucking code. Learn JS\n`ERROR` ```js\n" +
      clean(err) +
      "\n```");
  }
	}
}

	if (msg.content.startsWith(prefix + "ping")) {
		msg.channel.send("Shitty Response time:tm:")
	}
});

cancer.on("guildCreate", guild => {
	console.log(`Joined a shit server called ${guild.name} Owned by ${guild.owner.user.username}. Now in ${cancer.guilds.size} Servers. WEW`)
			   snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "no-bitch")
   .send({
    server_count: cancer.guilds.size
   })
   .then(console.log("Shit stats have been posted")) // add a thing when its done!
});

cancer.on("guildDelete", guild => {
	console.log(`Left the worst server called ${guild.name} Owned by ${guild.owner.user.username}. Now in ${cancer.guilds.size} Servers. WEW`)
			   snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "no-bitch")
   .send({
    server_count: cancer.guilds.size
   })
   .then(console.log("Shit stats have been posted")) // add a thing when its done!

});

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}


cancer.login("kek")
