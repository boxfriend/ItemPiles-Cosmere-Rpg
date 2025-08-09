Hooks.once('item-piles-ready', async function() {

	const denoms = new Map([
		["Chip", 0.2],
		["Mark", 1],
		["Broam", 4]
	]);
	const toItems = (gems, baseValue) => {
		const items = [];
		for(const gem of gems) {
			denoms.forEach((value, key) => {
				const name = `${gem} ${key}`;
				const img = `systems/cosmere-rpg/assets/icons/stormlight/items/spheres/sphere_${gem.toLowerCase()}_${key.toLowerCase()}.webp`;
				const val = value * baseValue;
				items.push({
					type: "item",
					name: name,
					img: img,
					abbreviation: "{#}mk",
					data: {
						item: {
							"name": name,
							"type": "loot",
							"img": img,
							"system": {
								"quantity": 1,
								"isMoney": true,
								"price": {
									"value": val,
									"currency": "spheres",
									"denomination": {
										"primary": "mark",
										"secondary": "none"
									},
									"unit": "spheres.mark",
									"baseValue": val
								}
							}
						}
					},
					primary: false,
					exchangeRate: val
				});
			});
		}
		return items;
	};
	const currencies = toItems(["Diamond"], 1)
		.concat(toItems(["Garnet", "Heliodor", "Topaz"], 5))
		.concat(toItems(["Ruby", "Smokestone", "Zircon"], 10))
		.concat(toItems(["Amethyst", "Sapphire"], 25))
		.concat(toItems(["Emerald"], 50));

	currencies.find(value => value.name === "Diamond Mark").primary = true;

    const config = {
		"VERSION": "1.1.1",
        "ACTOR_CLASS_TYPE": "adversary",
        "ITEM_CLASS_LOOT_TYPE": "loot",
        "ITEM_CLASS_WEAPON_TYPE": "weapon",
        "ITEM_CLASS_EQUIPMENT_TYPE": "equipment",
        "ITEM_QUANTITY_ATTRIBUTE": "system.quantity",
        "ITEM_PRICE_ATTRIBUTE": "system.price.value",
        "ITEM_SIMILARITIES": ["name", "type"],
		"CURRENCIES": currencies,
        "ITEM_FILTERS": [
            {
                "path": "type",
                "filters": "action,ancestry,connection,culture,goal,injury,path,power,specialty,talent,trait,talent_tree"
            }
        ],
		"UNSTACKABLE_ITEM_TYPES": ["weapon", "armor"],
    };
    game.itempiles.API.addSystemIntegration(config, 'latest')
});
