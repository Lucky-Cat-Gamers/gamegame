import satchelUpgrade from './other/satchel-upgrade';
import DiamondRing     from './rings/diamond-ring';
import AmethystRing    from './rings/amethyst-ring';
import OldRing         from './rings/old-ring';
import HpPotion        from './other/hp-potion';
import GreatHpPotion   from './other/great-hp-potion';
import skunk           from './weapons/skunk';
import witchGloves from './armor/witch-gloves';
import witchHat from './armor/witch-hat';
import witchBoots from './armor/witch-boots';
import witchCape from './armor/witch-cape';
import staff from './weapons/staff';
import cobweb from './ingredients/cobweb';
import firefly from './ingredients/firefly';
import mugwort from './ingredients/mugwort';
import toadstool from './ingredients/toadstool';
import crowfeather from './ingredients/crowfeather';
import flint from './ingredients/flint';
import button from './ingredients/button';
import butterflyMoth from './ingredients/butterflyMoth';


const items = {
  weapons: {
    // BroadSword,
    // RustySword,
    // SteelSword,
    // DragonsBane,
    // LichBane,
    staff,
    skunk
  },
  armor: {
    // LeatherArmor,
    // LeatherBoots,
    // LeatherCap,
    // LeatherGloves,
    // LeatherPants,
    // SteelArmor,
    // SteelBoots,
    // SteelHelm,
    // SteelGloves,
    // SteelPants
    witchCape,
    witchBoots,
    witchGloves,
    witchHat
  },
  rings: {
    AmethystRing,
    DiamondRing,
    OldRing
  },
  other: {
    HpPotion,
    GreatHpPotion,
    satchelUpgrade
  }
};

export const randomItemsT1 = [
  //butterflyMoth,
  button,
//  cobweb,
//  crowfeather,
//  firefly,
//  flint,
//  mugwort,
  skunk,
//  toadstool,
  witchBoots,
  witchCape,
  witchGloves,
  witchHat
];

export const randomItemsT2 = [
  ...randomItemsT1,
  AmethystRing,
  DiamondRing
];

export default items;
