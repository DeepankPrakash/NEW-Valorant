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
  }
];