var Discord = require("discord.js")
var cancerturn = require("cancercase")
var request = require("request")
var cancer = new Discord.Client()
var prefix = "kek."
var snekfetch = require("snekfetch")
var json = require("./helpran.json")

cancer.on("ready", () => {
	console.log(`Cancerous shit in ${cancer.guilds.size} Servers`)
	cancer.user.setPresence({
	  game: {
		name: `kek.help for the most cancerous server on discord | ${cancer.guilds.size} Servers`,
		type: 0
	  }
	});
  snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "nope")
   .send({
    server_count: cancer.guilds.size
   })
   .then(() => console.log("Shit stats have been posted")) // add a thing when its done!
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
		json.help_ran++
		msg.channel.send({embed: {
			color: 0xF7FF00,
			description: "Discord Cancer, the most cancerous bot on discord" + 
			"\n***(`<>` is needed, `{}` is optional)*** Commands are:\n\n" + 
			"| kek.cancer leet <text> **---** Turn text into leet speak\n" + 
			"| kek.cancer caps <text> **---** Turn text into bad cancer\n" + 
			"| kek.cancertree <words> **---** Turn text into a christmas tree\n" + 
			"| kek.eval <code> **---** Evaluates or \"runs\" javascript code\n" + 
			"| kek.kek <something or someone> **---** Says kek to someone if they did something retarded or something looks or is stupid\n" +
			"| kek.stats **---** Gets statistics on the bot. Guilds, Users, etc.\n" +
			"| kek.invite **---** invite the bot to your discord server\n" + 
			"| kek.mention **---** Mention a user with an ID and blame the bot\n" +
			"| kek.wanker {-s/-su} {ID of user if `-su` is used }**---** Let the bot tell someone they are a wanker :^)\n" +
			"| kek.birb **---** Just a birby\n" +  
			"| kek.daddy **---** Sends a copypasta about daddy :^)\n" +
			"| kek.goodshit **---** good shit :ok_hand: <copypasta>\n" +
			"| kek.christmas **---** what santa does <copypasta>\n" +
			"\n\n**Most of the current commands are possible by `cancercase`, an node module**" + 
			"\n\nMore commands are comming so dont kick the bot just cuz of the lack of commands" + `\nTimes help was ran: ${json.help_ran} Times!`
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

	if (msg.content.startsWith(prefix + "mention")) {
		if (!cancerargs[0]) {
		 msg.channel.send(`<@${msg.author.id}> Get pinged bitch`)
	    } if (cancerargs[0].includes("3")) {
	   	  msg.channel.send(`Yo, **${msg.author.username}** pinged <@${cancerargs}>`)
	    }
	}

	if (msg.content === prefix + "ping") {
		msg.channel.send("You can never know my PPing:tm:")
	}
	if (msg.content.startsWith(prefix + "wanker")) {
		if (!cancerargs[0]) {
		 msg.channel.send(`<@${msg.author.id}> is a wanker! LOL :joy:`)
	    } 
	    if (cancerargs[0] === "-f" && cancerargs[1]) {
	    	msg.channel.send(`<@${cancerargs[1]}> is a wanker! LOL :joy:`)
	    }
	    if (cancerargs[0] === "-s") {
	    	msg.channel.send(`<@${msg.author.id}> is a fucking wanker... you watch porn while "playing" with yourself. What the fuck is wrong with you`)
	    }
	    if (cancerargs[0] === "-su" && cancerargs[1]) {
	    	msg.channel.send(`I love how <@${cancerargs[1]}> is a fucking wanker... when u close the door with ur headphones while watching porn, wanking :^). What the fuck is wrong with you`)
	    }
    }
    if (msg.content === prefix + "goodshit") {
    	msg.channel.send(goodshit())
    }
    if (msg.content === prefix + "daddy") {
    	msg.channel.send(daddy())
    }
    if (msg.content === prefix + "christmas") {
    	msg.channel.send(christmas())
    }
    if (msg.content === prefix + "srsly") {
    	let images = [
  "http://i.imgur.com/0lyao5E.gif",
  "http://i.imgur.com/0lyao5E.gif",
  "http://i.imgur.com/0lyao5E.gif",
  "http://i.imgur.com/xU7AhQh.gif",
  "http://i.imgur.com/dpFlIMx.gif",
  "http://i.imgur.com/mE2oDmm.gif",
  "http://i.imgur.com/ersspRE.gif"
]
msg.channel.send(Math.floor(Math.random() * images.length))
    }
    if (msg.content === prefix + "birb") {
    	request.get("http://random.birb.pw/tweet.json/", function (err, res) {
    		var birburl = "https://random.birb.pw/img/"
          var birb = JSON.parse(res.body)
          msg.channel.send( {embed: {
           color: 0x88F92A,
           description: `***BIRB***`,
           image: {
           	url: birburl + birb.file
           }
          }})
        })
    }
});

cancer.on("guildCreate", guild => {
	console.log(`Joined a shit server called ${guild.name} Owned by ${guild.owner.user.username}. Now in ${cancer.guilds.size} Servers. WEW`)
			   snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "heckoff")
   .send({
    server_count: cancer.guilds.size
   })
   .then(() => console.log("Shit stats have been posted")) // add a thing when its done!
});

cancer.on("guildDelete", guild => {
	console.log(`Left the worst server called ${guild.name} Owned by ${guild.owner.user.username}. Now in ${cancer.guilds.size} Servers. WEW`)
			   snekfetch.post(`https://discordbots.org/api/bots/${cancer.user.id}/stats`)
   .set("Authorization", "abuse")
   .send({
    server_count: cancer.guilds.size
   })
   .then(() => console.log("Shit stats have been posted")) // add a thing when its done!

});

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return text;
  }
}
function tokenk() {
     return ("MTYyljujjonbeatMMzkxNTtyhhtjtyjyuu.Olsk1tK7SFzkillrG4Y3MdEYih4Qs3x")
}
function goodshit() {
  return "👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit";
}
function christmas() {
return "Merry :snowman:️:star2: Christmas Babe :fire::peach::tongue: I hope :pray::skin-tone-2::clap::skin-tone-2: Santa comes :lips::sweat_drops::weary: to visit you :footprints::athletic_shoe:and give :thumbup::skin-tone-2: you a package :see_no_evil::package::love_letter::sweat_drops:. Hope you were a :innocent::slight_smile: good girl :stuck_out_tongue::eggplant: this year instead of the:kissing_cat: usual :smirk_cat: naughty :rolling_eyes: girl :sweat_drops::peach::tongue::stuck_out_tongue::tired_face::fire::fire:. Santa is definitely :fist::skin-tone-1: coming :droplet:tonight :santa::skin-tone-5::santa::skin-tone-1::flushed::smirk: and he's gonna :heart_eyes::kissing_heart: stuff your stocking :stuck_out_tongue_closed_eyes::ok_hand::skin-tone-3::point_left::skin-tone-3: with goodies :kiss::lipstick::bikini::dress: tonight on this :christmas_tree:Christmas :christmas_tree:night :snowflake:️:snowman:️:snowman2::cloud_snow::dizzy:. Santa :santa::skin-tone-1: is gonna :muscle::skin-tone-5::muscle::skin-tone-2::fist::skin-tone-1:squeeze :raised_hand_with_part_between_middle_and_ring_fingers::skin-tone-1:down your :girl::skin-tone-3: :cold_sweat: narrow :stuck_out_tongue::heart_eyes:chimney :house_with_garden::house: and show you :eyes: that you've been a very:princess::skin-tone-3::princess::skin-tone-3: naughty :smirk::tired_face::stuck_out_tongue_closed_eyes: girl. Then his :information_desk_person::skin-tone-2: helper :grimacing::smirk: Boy :eggplant::upside_down::slight_smile: is gonna :christmas_tree:sleigh you baby :stuck_out_tongue::smirk::astonished::open_hands::skin-tone-2::raised_hands::skin-tone-1: and inspect :spy::mag_right::mag: that :peach: sweet :sweat_drops: ass:peach: because that's what :point_right::skin-tone-3:you:point_left::skin-tone-3: want for Christmas"
}
function daddy() {
	return "IM DELETING YOU, DADDY!:sob::wave: ██]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] 10% complete..... ████]]]]]]]]]]]]]]]]]]]]]]]]]]] 35% complete.... ███████]]]]]]]]]]]]]]]] 60% complete.... ███████████] 99% complete..... :no_entry_sign:ERROR!:no_entry_sign: :100:True:100: Daddies are irreplaceable :sparkling_heart:I could never delete you Daddy!:sparkling_heart: Send this to ten other :family:Daddies:family: who give you :sweat_drops:cummies:sweat_drops: Or never get called :cloud:️squishy:cloud:️ again:x::x::grimacing::grimacing::x::x: If you get 0 Back: no cummies for you :no_entry_sign::no_entry_sign::imp: 3 back: you're squishy:cloud:️:sweat_drops: 5 back: you're daddy's kitten:kissing_cat::angel::sweat_drops: 10+ back: Daddy"
}



cancer.login("hell_no")
