import Jett from "../assets/Jett.jpg";
import Phoenix from "../assets/Phoenix.jpg";
import Sage from "../assets/Sage.jpg";
import Sova from "../assets/Sova.jpg";
import Viper from "../assets/Viper.jpg";
import Omen from "../assets/Omen.jpg";

export const agents = [
  {
    id: 1,
    name: "Jett",
    role: "Duelist",
    origin: "South Korea",
    description: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    abilities: [
      { name: "Cloudburst", description: "Throw a cloud of fog that obscures vision" },
      { name: "Updraft", description: "Propel yourself upwards" },
      { name: "Tailwind", description: "Dash a short distance" },
      { name: "Blade Storm", description: "Throw deadly knives that kill on headshot" }
    ],
    image: Jett,
    difficulty: "Medium"
  },
  {
    id: 2,
    name: "Phoenix",
    role: "Duelist",
    origin: "United Kingdom",
    description: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he rushes in to fight on his own terms.",
    abilities: [
      { name: "Blaze", description: "Create a wall of fire" },
      { name: "Curveball", description: "Throw a flashing orb" },
      { name: "Hot Hands", description: "Throw a fireball that explodes" },
      { name: "Run it Back", description: "Mark your location and respawn there if you die" }
    ],
    image: Phoenix,
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Sage",
    role: "Sentinel",
    origin: "China",
    description: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish battlefield.",
    abilities: [
      { name: "Barrier Orb", description: "Create a solid wall" },
      { name: "Slow Orb", description: "Throw an orb that slows enemies" },
      { name: "Healing Orb", description: "Heal yourself or an ally" },
      { name: "Resurrection", description: "Bring a dead ally back to life" }
    ],
    image: Sage,
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Sova",
    role: "Initiator",
    origin: "Russia",
    description: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [
      { name: "Owl Drone", description: "Deploy a drone to scout areas" },
      { name: "Shock Bolt", description: "Fire an arrow that damages on impact" },
      { name: "Recon Bolt", description: "Fire an arrow that reveals enemies" },
      { name: "Hunter's Fury", description: "Fire energy beams across the map" }
    ],
    image: Sova,
    difficulty: "Hard"
  },
  {
    id: 5,
    name: "Viper",
    role: "Controller",
    origin: "United States",
    description: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
    abilities: [
      { name: "Snake Bite", description: "Fire a projectile that creates acid" },
      { name: "Poison Cloud", description: "Deploy a gas emitter" },
      { name: "Toxic Screen", description: "Create a wall of toxic gas" },
      { name: "Viper's Pit", description: "Create a toxic cloud around you" }
    ],
    image: Viper,
    difficulty: "Hard"
  },
  {
    id: 6,
    name: "Omen",
    role: "Controller",
    origin: "Unknown",
    description: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    abilities: [
      { name: "Shrouded Step", description: "Teleport a short distance" },
      { name: "Paranoia", description: "Send out a shadow that blinds enemies" },
      { name: "Dark Cover", description: "Cast a shadow orb that obscures vision" },
      { name: "From the Shadows", description: "Teleport anywhere on the map" }
    ],
    image: Omen,
    difficulty: "Medium"
  },
  
  {
  id: 7,
  name: "Raze",
  role: "Duelist",
  origin: "Brazil",
  description: "An explosive specialist who dominates areas using high-impact utility and chaotic pressure.",
  abilities: [
    { name: "Boom Bot", description: "Deploy a bot that hunts nearby enemies" },
    { name: "Blast Pack", description: "Throw a satchel that propels or damages" },
    { name: "Paint Shells", description: "Launch a grenade that splits into clusters" },
    { name: "Showstopper", description: "Equip a powerful rocket launcher" }
  ],
  image: Raze,
  difficulty: "Medium"
},
{
  id: 8,
  name: "Reyna",
  role: "Duelist",
  origin: "Mexico",
  description: "A lethal duelist who thrives on eliminations and self-sustain in aggressive encounters.",
  abilities: [
    { name: "Leer", description: "Cast an eye that nearsights enemies" },
    { name: "Devour", description: "Consume a soul orb to heal" },
    { name: "Dismiss", description: "Become intangible briefly" },
    { name: "Empress", description: "Enhance combat abilities temporarily" }
  ],
  image: Reyna,
  difficulty: "Hard"
},
{
  id: 9,
  name: "Yoru",
  role: "Duelist",
  origin: "Japan",
  description: "A deceptive infiltrator who manipulates space and misdirection.",
  abilities: [
    { name: "Fakeout", description: "Send forward decoy footsteps" },
    { name: "Blindside", description: "Throw a bouncing flash orb" },
    { name: "Gatecrash", description: "Teleport to placed tether" },
    { name: "Dimensional Drift", description: "Enter an alternate dimension" }
  ],
  image: Yoru,
  difficulty: "Hard"
},
{
  id: 10,
  name: "Neon",
  role: "Duelist",
  origin: "Philippines",
  description: "A speed-focused duelist who overwhelms enemies with electric momentum.",
  abilities: [
    { name: "Relay Bolt", description: "Fire an energy bolt that concusses" },
    { name: "Fast Lane", description: "Create dual walls of electricity" },
    { name: "High Gear", description: "Sprint at extreme speed" },
    { name: "Overdrive", description: "Fire an energy beam while sprinting" }
  ],
  image: Neon,
  difficulty: "Medium"
},
{
  id: 11,
  name: "Iso",
  role: "Duelist",
  origin: "China",
  description: "A calculated combatant who isolates enemies in controlled duels.",
  abilities: [
    { name: "Undercut", description: "Launch a weakening energy wave" },
    { name: "Double Tap", description: "Gain shield after elimination" },
    { name: "Contingency", description: "Deploy a moving shield wall" },
    { name: "Kill Contract", description: "Drag enemy into a 1v1 arena" }
  ],
  image: Iso,
  difficulty: "Hard"
},

// SENTINELS

{
  id: 12,
  name: "Cypher",
  role: "Sentinel",
  origin: "Morocco",
  description: "A surveillance expert who gathers information and locks down territory.",
  abilities: [
    { name: "Trapwire", description: "Set a tripwire trap" },
    { name: "Cyber Cage", description: "Create a vision-blocking zone" },
    { name: "Spycam", description: "Deploy a remote camera" },
    { name: "Neural Theft", description: "Reveal enemy positions" }
  ],
  image: Cypher,
  difficulty: "Medium"
},
{
  id: 13,
  name: "Killjoy",
  role: "Sentinel",
  origin: "Germany",
  description: "A tech genius who uses gadgets to secure and defend areas.",
  abilities: [
    { name: "Alarmbot", description: "Deploy a bot that debuffs enemies" },
    { name: "Turret", description: "Place an automated turret" },
    { name: "Nanoswarm", description: "Throw a hidden damage swarm" },
    { name: "Lockdown", description: "Detain enemies in large radius" }
  ],
  image: Killjoy,
  difficulty: "Medium"
},
{
  id: 14,
  name: "Chamber",
  role: "Sentinel",
  origin: "France",
  description: "A precise marksman who combines firepower with teleportation.",
  abilities: [
    { name: "Trademark", description: "Place a slowing trap" },
    { name: "Headhunter", description: "Equip a powerful pistol" },
    { name: "Rendezvous", description: "Teleport between anchors" },
    { name: "Tour De Force", description: "Equip a custom sniper rifle" }
  ],
  image: Chamber,
  difficulty: "Hard"
},
{
  id: 15,
  name: "Deadlock",
  role: "Sentinel",
  origin: "Norway",
  description: "A tactical defender who controls space with advanced containment tech.",
  abilities: [
    { name: "GravNet", description: "Restrict enemy movement" },
    { name: "Sonic Sensor", description: "Detect loud movements" },
    { name: "Barrier Mesh", description: "Deploy blocking barriers" },
    { name: "Annihilation", description: "Capture and eliminate an enemy" }
  ],
  image: Deadlock,
  difficulty: "Medium"
},

// INITIATORS

{
  id: 16,
  name: "Breach",
  role: "Initiator",
  origin: "Sweden",
  description: "A disruptive initiator who uses seismic blasts to displace enemies.",
  abilities: [
    { name: "Flashpoint", description: "Blind enemies through walls" },
    { name: "Fault Line", description: "Send a concussive quake" },
    { name: "Aftershock", description: "Deal damage through surfaces" },
    { name: "Rolling Thunder", description: "Send massive seismic wave" }
  ],
  image: Breach,
  difficulty: "Medium"
},
{
  id: 17,
  name: "Skye",
  role: "Initiator",
  origin: "Australia",
  description: "A nature-based initiator who scouts and supports allies.",
  abilities: [
    { name: "Guiding Light", description: "Send out controllable hawk flash" },
    { name: "Trailblazer", description: "Control scouting creature" },
    { name: "Regrowth", description: "Heal nearby teammates" },
    { name: "Seekers", description: "Send trackers toward enemies" }
  ],
  image: Skye,
  difficulty: "Medium"
},
{
  id: 18,
  name: "KAY/O",
  role: "Initiator",
  origin: "Unknown",
  description: "A suppression specialist who disrupts enemy abilities.",
  abilities: [
    { name: "FRAG/ment", description: "Throw damaging energy fragment" },
    { name: "FLASH/drive", description: "Throw flash grenade" },
    { name: "ZERO/point", description: "Suppress enemies in radius" },
    { name: "NULL/cmd", description: "Overclock and pulse suppression" }
  ],
  image: KAYO,
  difficulty: "Medium"
},
{
  id: 19,
  name: "Fade",
  role: "Initiator",
  origin: "Turkey",
  description: "A fear-inducing tracker who hunts enemies relentlessly.",
  abilities: [
    { name: "Haunt", description: "Reveal enemy positions" },
    { name: "Seize", description: "Restrict enemy movement" },
    { name: "Prowler", description: "Send out tracking creature" },
    { name: "Nightfall", description: "Unleash wave of terror" }
  ],
  image: Fade,
  difficulty: "Hard"
},
{
  id: 20,
  name: "Gekko",
  role: "Initiator",
  origin: "United States",
  description: "A laid-back initiator who fights alongside creature companions.",
  abilities: [
    { name: "Wingman", description: "Send creature to plant or stun" },
    { name: "Dizzy", description: "Blind enemies with plasma blast" },
    { name: "Mosh Pit", description: "Throw explosive creature" },
    { name: "Thrash", description: "Control creature to detain enemies" }
  ],
  image: Gekko,
  difficulty: "Medium"
},

// CONTROLLERS

{
  id: 21,
  name: "Brimstone",
  role: "Controller",
  origin: "United States",
  description: "A tactical commander who controls zones using orbital utility.",
  abilities: [
    { name: "Stim Beacon", description: "Boost ally fire rate" },
    { name: "Incendiary", description: "Launch fire grenade" },
    { name: "Sky Smoke", description: "Deploy smoke from sky" },
    { name: "Orbital Strike", description: "Call down powerful laser" }
  ],
  image: Brimstone,
  difficulty: "Easy"
},
{
  id: 22,
  name: "Astra",
  role: "Controller",
  origin: "Ghana",
  description: "A cosmic strategist who manipulates space with stars.",
  abilities: [
    { name: "Nova Pulse", description: "Concuss enemies" },
    { name: "Nebula", description: "Create smoke from star" },
    { name: "Gravity Well", description: "Pull enemies inward" },
    { name: "Cosmic Divide", description: "Create sound-blocking wall" }
  ],
  image: Astra,
  difficulty: "Hard"
},
{
  id: 23,
  name: "Harbor",
  role: "Controller",
  origin: "India",
  description: "A controller who commands water to reshape the battlefield.",
  abilities: [
    { name: "Cascade", description: "Send moving water wall" },
    { name: "Cove", description: "Create shielded smoke bubble" },
    { name: "High Tide", description: "Create large curved water wall" },
    { name: "Reckoning", description: "Unleash concussive water strikes" }
  ],
  image: Harbor,
  difficulty: "Medium"
},
{
  id: 24,
  name: "Clove",
  role: "Controller",
  origin: "Scotland",
  description: "An unpredictable controller who disrupts from beyond death.",
  abilities: [
    { name: "Meddle", description: "Decay enemies temporarily" },
    { name: "Pick Me Up", description: "Gain health and speed on kill" },
    { name: "Ruse", description: "Place smokes even after death" },
    { name: "Not Dead Yet", description: "Revive briefly after death" }
  ],
  image: Clove,
  difficulty: "Medium"
}

  ];
