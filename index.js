const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.API_KEY;

// flushed to sunglasses
bot.on('message', msg => {
	if (msg.author != 745514610018222161) {
		if (msg.content.includes('😳')) {
			var message = msg.content;
			var newMessage = message;
			newMessage = newMessage.replace('😳', '😎');
			msg.channel.send(newMessage);
		}
		else if (msg.content.includes('😎')) {
			var message = msg.content;
			var newMessage = message;
			newMessage = newMessage.replace('😎', '😳');
			msg.channel.send(newMessage);
		}
	}
})

// hi hungry i am dad
bot.on('message', msg => {
	if (msg.author != 745514610018222161) {
		var content = msg.content;
		content = content.toUpperCase();
	
		if (content.includes('I AM')) {
			var indexIAm = content.indexOf('I AM');
			var message = msg.content.slice(indexIAm + 4);
			msg.channel.send('hi' + message + ', i\'m dad');
		}
		else if (content.includes('I\'M')) {
			var indexIM = msg.content.indexOf('I\'m');
			var message = msg.content.slice(indexIM + 4);
			msg.channel.send('hi' + message + ', i\'m dad');
		}
	}
})

bot.on('ready', msg => {
	console.log('hi');
})

bot.login(token);