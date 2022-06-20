<div align="center">
  <p>
    <a href="https://nodei.co/npm/discord.js-v13-pagination
/"><img src="https://nodei.co/npm/discord.js-v13-pagination.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>


# discord.js-v13-pagination
Un simple système de pagination pratique pour la version 13 de discord.js
(Projet traduit et amélioré pour les interactions commandes de [pagination-discord-js-13](https://www.npmjs.com/package/pagination-discord-js-13))

# Installation
* `npm install discord.js-v13-pagination`

# Usage
__Basic Bot Example__
```js
// Importer le package
const paginationEmbed = require('discord.js-v13-pagination');

// Utiliser MessageEmbed et Discord pour crée des embeds
// Faites en sorte de ne pas mettre de .setFooter() sinon ceux si causerons des problème avec le système de pages
const { MessageEmbed, Discord } = require('discord.js');
const embed1 = new MessageEmbed();

// Crée un array avec plusieurs embeds
pages = [
	embed1,
	embed2,
	//....
];

// Appeler la méthode paginationEmbed, les deux premiers arguments sont requis
// emojiList est la valeur par défaut ['⏪', '⏩']
// timeout est le temps jusqu’à ce que les collecteurs de réaction soient actifs, après cela vous ne pouvez pas changer les pages (en ms), par défaut à 120000
paginationEmbed(interaction, pages, emojiList, timeout);
// Et voila maintenant, vous avez votre système de page
```
# Projet de base de saanuregh:
[Page Principal](https://www.npmjs.com/package/pagination-discord-js-13) | [Son Paypal](https://www.paypal.com/paypalme/LuciferSirzechs?locale.x=pl_PL)