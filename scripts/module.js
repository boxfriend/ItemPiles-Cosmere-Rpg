Hooks.once('item-piles-ready', async function() {
    const config = {
		"VERSION": "1.0.0",
        "ACTOR_CLASS_TYPE": "adversary",
        "ITEM_CLASS_LOOT_TYPE": "loot",
        "ITEM_CLASS_WEAPON_TYPE": "weapon",
        "ITEM_CLASS_EQUIPMENT_TYPE": "equipment",
        "ITEM_QUANTITY_ATTRIBUTE": "system.quantity",
        "ITEM_PRICE_ATTRIBUTE": "system.price.value",
        "ITEM_SIMILARITIES": ["name", "type"],
        "CURRENCIES": [
            {
                type: "attribute",
                name: game.i18n.localize("STORMLIGHT.Currency.Spheres"),
				img: "systems/cosmere-rpg/assets/icons/stormlight/items/spheres/sphere_diamond_mark.webp",
                abbreviation: "{#}mk",
                data: {
                    path: "system.currency.spheres.total.derived"
                },
                primary: true,
                exchangeRate: 1
            }
        ],
        "ITEM_FILTERS": [
            {
                "path": "type",
                "filters": "action,ancestry,connection,culture,goal,injury,path,power,specialty,talent"
            }
        ],
		"UNSTACKABLE_ITEM_TYPES": ["weapon", "armor"],
    };
    game.itempiles.API.addSystemIntegration(config, 'latest')
});
