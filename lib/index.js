
/**
 * Module dependencies.
 */

var express = require('express')
  , http    = require('http')
  , path    = require('path')
  , app     = express()
  , server  = http.createServer(app);

var spells = [];


(function(){

	var httpPort = 8000;

	exports.set = function set(key,value) {

		switch(key)
		{
			case 'httpPort':
				httpPort = value;
				break;
		}

		return this;

	}

	spells.push({
		name: "Create Water",
		save: "No Save",
		SR: "No SR",
		action: "1 Standard Action",
		range: "Close (25 ft + 5ft/2 levels)",
		components: "Verbal - Somatic",
		target: "Up to 2 gallons of water/level",
		duration: "Instantaneous",
		description : [
		"This spell generates wholesome, drinkable water, just like clean rain water. Water can be created in an area as small as will actually contain the liquid, or in an area three times as large -- possibly creating a downpour or filling many small receptacles. This water disappears after 1 day if not consumed.","Note: Conjuration spells can't create substances or objects within a creature. Water weighs about 8 pounds per gallon. One cubic foot of water contains roughly 8 gallons and weighs about 60 pounds."
		],
		school : "conjuration (creation) [water]",
		level : "0"
	});

	spells.push({
		name: "Stabilize",
		save: "15 Will",
		SR: "SR",
		action: "1 Standard Action",
		range: "Close (25 ft + 5ft/2 levels)",
		components: "Verbal - Somatic",
		target: "one living creature",
		duration: "Instantaneous",
		description : [
		"Upon casting this spell, you target a living creature that has –1 or fewer hit points. That creature is automatically stabilized and does not lose any further hit points. If the creature later takes damage, it continues dying normally."
		],
		school : "conjuration (healing)",
		level : "0"
	});

	spells.push({
		name: "Light",
		save: "No Save",
		SR: "No SR",
		action: "1 Standard Action",
		range: "touch",
		components: "Verbal ▪ Divine Focus",
		target: "object touched",
		duration: "10 min/level",
		description : [
		"This spell causes a touched object to glow like a torch, shedding normal light in a 20-foot radius from the point touched, and increasing the light level for an additional 20 feet by one step, up to normal light (darkness -> dim light, and dim light -> normal light). In an area of normal or bright light, this spell has no effect.", "You can only have one non-permanent light spell active at any one time. If you cast this spell while another casting is still in effect, the previous casting is dispelled. Light can be used to counter or dispel any darkness spell of equal or lower spell level."
		],
		school : "evocation [light]",
		level : "0"
	});

	spells.push({
		name: "Shield of Faith",
		save: "16 Will",
		SR: "SR",
		action: "1 Standard Action",
		range: "touch",
		components: "Verbal ▪ Somatic ▪ Material",
		target: "creature touched",
		duration: "1 min./level",
		description : [
		"This spell creates a shimmering, magical field around the target that averts and deflects attacks. The spell grants the subject a +2 deflection bonus to AC, with an additional +1 to the bonus for every six levels you have (maximum +5 deflection bonus at 18th level)."
		],
		school : "abjuration",
		level : "1"
	});

	spells.push({
		name: "Cure Light Wounds",
		save: "16 Will Half",
		SR: "SR",
		action: "1 Standard Action",
		range: "touch",
		components: "Verbal ▪ Somatic",
		target: "creature touched",
		duration: "Instantaneous",
		description : [
		"When laying your hand upon a living creature, you channel positive energy that cures 1d8 points of damage +1 point per caster level (maximum +5). Since undead are powered by negative energy, this spell deals damage to them instead of curing their wounds. An undead creature can apply Spell Resistance, and can attempt a Will save to take half damage."
		],
		school : "conjuration (healing)",
		level : "1"
	});

	spells.push({
		name: "Blessing of the Watch",
		save: "No Save",
		SR: "SR",
		action: "1 Standard Action",
		range: "Centered on Self",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "all allies within a 50-ft. burst",
		duration: "1 hr/level",
		description : [
		"Bless fills your allies with courage. Each ally gains a +1 morale bonus on attack rolls and on saving throws against fear effects.", "Bless counters and dispels bane.", "Bonuses only apply in jurisdiction of RHC."
		],
		school : "enchantment (compulsion) [mind-affecting]",
		level : "1"
	});

	spells.push({
		name: "Detect Evil",
		save: "No Save",
		SR: "No SR",
		action: "1 Standard Action",
		range: "60 ft.",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "cone-shaped emanation",
		duration: "Concentration, up to 10 min./ level (D)",
		description : [
		"You can sense the presence of evil. ","1st Round: Presence or absence of evil.","2nd Round: Number of evil auras (creatures, objects, or spells) in the area and the power of the most potent evil aura present. If the strongest evil aura's power is overwhelming (see below), and the HD or level of the aura's source is at least twice your character level, you are stunned for 1 round and the spell ends.","3rd Round: The power and location of each aura. If an aura is outside your line of sight, then you discern its direction but not its exact location."
		],
		school : "divination",
		level : "1"
	});

	spells.push({
		name: "Divine Favor",
		save: "No Save",
		SR: "No SR",
		action: "1 Standard Action",
		range: "personal",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "you",
		duration: "1 Minute",
		description : [
		"Calling upon the strength and wisdom of a deity, you gain a +1 luck bonus on attack and weapon damage rolls for every three caster levels you have (at least +1, maximum +3). The bonus doesn't apply to spell damage."
		],
		school : "evocation",
		level : "1"
	});

	spells.push({
		name: "Magic Weapon",
		save: "16 Will",
		SR: "SR",
		action: "1 Standard Action",
		range: "touch",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "weapon touched",
		duration: "1 min./level",
		description : [
		"Magic weapon gives a weapon a +1 enhancement bonus on attack and damage rolls. An enhancement bonus does not stack with a masterwork weapon's +1 bonus on attack rolls.","You can't cast this spell on a natural weapon, such as an unarmed strike (instead, see magic fang). A monk's unarmed strike is considered a weapon, and thus it can be enhanced by this spell."
		],
		school : "transmutation",
		level : "1"
	});

	spells.push({
		name: "Resistance",
		save: "15 Will",
		SR: "SR",
		action: "1 standard action",
		range: "touch",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "creature touched",
		duration: "1 Minute",
		description : [
		"You imbue the subject with magical energy that protects it from harm, granting it a +1 resistance bonus on saves.","Resistance can be made permanent with a permanency spell."
		],
		school : "abjuration",
		level : "0"
	});

	spells.push({
		name: "Virtue",
		save: "No Save",
		SR: "SR",
		action: "1 standard action",
		range: "touch",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "creature touched",
		duration: "1 Minute",
		description : [
		"With a touch, you infuse a creature with a tiny surge of life, granting the subject 1 temporary hit point."
		],
		school : "transmutation",
		level : "0"
	});

	spells.push({
		name: "Cure Moderate Wounds",
		save: "17 Will Half",
		SR: "SR",
		action: "1 Standard Action",
		range: "touch",
		components: "Verbal ▪ Somatic",
		target: "creature touched",
		duration: "Instantaneous",
		description : [
		"When laying your hand upon a living creature, you channel positive energy that cures 2d8 points of damage +1 point per caster level (maximum +10). Since undead are powered by negative energy, this spell deals damage to them instead of curing their wounds. An undead creature can apply Spell Resistance, and can attempt a Will save to take half damage."
		],
		school : "conjuration (healing)",
		level : "2"
	});

	spells.push({
		name: "Shatter",
		save: "17 Will (Fort Half if Creature)",
		SR: "SR",
		action: "1 Standard Action",
		range: "close (25 ft. + 5 ft./2 levels)",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "See Text",
		duration: "Instantaneous",
		description : [
		"Used as an area attack, shatter destroys non-magical objects of crystal, glass, ceramic, or porcelain. All such unattended objects within a 5-foot radius of the point of origin are smashed into dozens of pieces by the spell. Objects weighing more than 1 pound per your level are not affected, but all other objects of the appropriate composition are shattered.", "If targeted against a single solid non-magical object weighing up to 10 pounds per caster level, regardless of composition, shatter destroys. Targeted against a crystalline creature, shatter deals 1d6 points of sonic damage per caster level (maximum 10d6)."
		],
		school : "evocation [sonic]",
		level : "2"
	});

	spells.push({
		name: "Sound Burst",
		save: "17 Fort Partial",
		SR: "SR",
		action: "1 Standard Action",
		range: "close (25 ft. + 5 ft./2 levels)",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "10-ft.-radius spread",
		duration: "Instantaneous",
		description : [
		"You blast an area with a tremendous cacophony. Every creature in the area takes 1d8 points of sonic damage and must succeed on a Fortitude save to avoid being stunned for 1 round. Creatures that cannot hear are not stunned but are still damaged."
		],
		school : "evocation [sonic]",
		level : "2"
	});

	spells.push({
		name: "Lesser Restoration",
		save: "17 Will",
		SR: "SR",
		action: "3 rounds ",
		range: "touch",
		components: "Verbal ▪ Somatic",
		target: "creature touched",
		duration: "Instantaneous",
		description : [
		"Lesser restoration dispels any magical effects reducing one of the subject's ability scores or cures 1d4 points of temporary ability damage to one of the subject's ability scores. It also eliminates any fatigue suffered by the character, and improves an exhausted condition to fatigued. It does not restore permanent ability drain."
		],
		school : "conjuration (healing)",
		level : "2"
	});

	spells.push({
		name: "Silence",
		save: "17 Will (if targeted)",
		SR: "SR",
		action: "1 rounds",
		range: "long (400 ft. + 40 ft./level)",
		components: "Verbal ▪ Somatic",
		target: "20-ft.-radius emanation centered on a creature, object, or point in space",
		duration: "1 round/level (D)",
		description : [
		"Upon the casting of this spell, complete silence prevails in the affected area. All sound is stopped: Conversation is impossible, spells with verbal components cannot be cast, and no noise whatsoever issues from, enters, or passes through the area. The effect is stationary unless cast on a mobile target. Items in a creature's possession or magic items that emit sound receive the benefits of saves and Spell Resistance, but unattended objects and points in space do not. Creatures in an area of a silence spell are immune to sonic or language-based attacks, spells, and effects."
		],
		school : "illusion (glamor)",
		level : "2"
	});

	spells.push({
		name: "Spiritual Weapon",
		save: "No Save",
		SR: "SR",
		action: "1 Standard Action",
		range: "medium (100 ft. + 10 ft./level)",
		components: "Verbal ▪ Somatic ▪ Divine Focus",
		target: "magic weapon of force",
		duration: "1 round/level (D)",
		description : [
		"A Bastard Sword of force appears and attacks foes as directed, dealing 1d8 force damage + 1 per 3 caster levels max +5). Attacks as caster's Base Attack Bonus + Wisdom modifer.  Does not qualify for flanking or feats. Move action to redirect.  SR only applies the first time (dispelling the spell if SR check fails.)  Immune to damage.  "
		],
		school : "evocation (force)",
		level : "2"
	});

	exports.start = function start() {

		console.log("Loading configs!");
		app.configure(function(){
			app.set('port', process.env.PORT || httpPort );
			app.set('views', __dirname + '/views');
			app.set('view engine', 'jade');
			app.locals.basedir = __dirname + '/views';
			app.use(express.favicon(__dirname + '/public/img/favicon.ico', { maxAge: 2592000000 }));
			app.use(express.logger('dev'));
			app.use(express.bodyParser());
			app.use(express.methodOverride());
			app.use(express.cookieParser('the most secret phrase'));
			app.use(express.session({secret:'fudge monkeys'}));
			app.use(app.routes);
			app.use(express.static(path.join(__dirname, 'public')));
		});

		console.log("Loading Dev Error Logger");
		app.configure('development', function(){
			app.use(express.errorHandler());
		});

		console.log("Loading routes...");
	
		app.all("*", function(req, res){res.render('cards', {
				"spells" : spells
			}
		);})
		
		app.listen(httpPort);

		console.log("Ready to Go!");
			
		//});
	}

})();