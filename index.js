const paginationEmbed = async (interaction, pages, emojiList = ['⏪', '⏩'], timeout = 120000) => {

	if (!interaction && !interaction.channel) throw new Error('Le salon est inaccessible.');
	if (!pages) throw new Error('Aucune pages donnée..');
	if (emojiList.length !== 2) throw new Error('Deux émojis sont nécessaires.');

	let page = 0;

	const curPage = await interaction.reply({ embeds: [pages[page].setFooter({ text: `Page ${page + 1} / ${pages.length}` })] });
	for (const emoji of emojiList) await curPage.react(emoji);

	const filter = ((reaction, user) => emojiList.includes(reaction.emoji.name) && !user.bot)
	const reactionCollector = curPage.createReactionCollector({ filter, time: timeout })

	reactionCollector.on('collect', async (reaction) => {

		if (interaction.guild) await reaction.users.remove(interaction.author);

		switch (reaction.emoji.name) {
			case emojiList[0]:
				page = page > 0 ? --page : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? ++page : 0;
				break;
			default:
				break;
		}
		curPage.edit({ embeds: [pages[page].setFooter({ text: `Page ${page + 1} / ${pages.length}` })] });
	});

	reactionCollector.on('end', () => {
		if (!curPage.deleted) {
			curPage.reactions.removeAll()
		}
	});
	return curPage;
};
module.exports = paginationEmbed;
