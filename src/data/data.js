const gamesData = [
	{ name: 'zelda1', longName: 'The Legend of Zelda', },
	{ name: 'zelda3', longName: 'The Legend of Zelda: A Link to the Past' },
	{ name: 'metroid1', longName: 'Metroid' },
	{ name: 'metroid3', longName: 'Super Metroid' },
];
const locationsData = [
	{
	    coords: [-205,170],
	    name: 'pedestal',
	    longName: 'Master Sword Pedestal',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['greenpendant', 'redpendant', 'bluependant'],
		notes: ['pedestal'],
	},
	{
	    coords: [-355,500],
	    name: 'mushroom',
	    longName: 'Mushroom',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
	},
	{
	    coords: [-540,775],
	    name: 'foresthideout',
	    longName: 'Forest Hideout',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
	},
	{
	    coords: [-300,1230],
	    name: 'lumberjacktree',
	    longName: 'Lumberjack Tree',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['agahnim', 'boots'],
	},
	{
	    coords: [-1745,95],
	    name: 'kakarikowell',
	    longName: 'Kakariko Well',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
		numItems: 4,
		notes: ['kakarikoWell']
	},
	{
	    coords: [-1720,530],
	    name: 'thieveshut',
	    longName: 'Thieves’ Hut',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
		numItems: 4,
	},
	{
	    coords: [-1905,390],
	    name: 'bottlevendor',
	    longName: 'Bottle Vendor',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
		notes: ['bottleVendor'],
	},
	{
	    coords: [-2440,110],
	    name: 'chickenhouse',
	    longName: 'Chicken House',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
		notes: ['kakarikoWell'],
	},
	{
	    coords: [-2200,640],
	    name: 'bugkid',
	    longName: 'Bug Kid',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['bottle', ],
	},
	{
	    coords: [-2320,655],
	    name: 'tavern',
	    longName: 'Tavern',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
	},
	{
	    coords: [-2935,575],
	    name: 'racegame',
	    longName: 'Race Mini-game',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [],
		notes: ['raceMinigame']
	},
	{
	    coords: [-2695,640],
	    name: 'library',
	    longName: 'Library',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['boots'],
	},
	{
	    coords: [-2710,1210],
	    name: 'burieditem',
	    longName: 'Buried Item',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['shovel', ],
	},
	{
	    coords: [-2300,1330],
	    name: 'madbatter',
	    longName: 'Mad Batter',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['hammer', 'boots', 'powder'],
	},
	{
	    coords: [-3260,305],
	    name: 'desertpalace',
	    longName: 'Desert Palace',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: ['book', 'boots'],
		isDungeon: true,
		boss: 'lanmolas',
		numChests: 2,
	},
	{
	    coords: [-3690,100],
	    name: 'desertwledge',
	    longName: 'Desert West Ledge',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	},
	{
	    coords: [-1215,2460],
	    name: 'kingtomb',
	    longName: 'King’s Tomb',
	    game: 'zelda3',
	    map: 'zelda3-lw',
	    itemRequirements: [ ],
	},

];

export {
	gamesData,
	locationsData,
}
