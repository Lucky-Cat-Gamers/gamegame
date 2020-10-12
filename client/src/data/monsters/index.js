import AngryMob from './angryMob';
import Dragon     from './dragon';
import Ghost     from './ghost';
import Goblin     from './goblin';
import Imp        from './imp';
import Lich       from './lich';
import Rat        from './rat';
import StoneGolem from './stone-golem';
import Spider from './spider';
import Zombie from './zombie';


const monsters = {
  dragon: Dragon,
  goblin: Goblin,
  ghost: Ghost,
  imp: Imp,
  lich: Lich,
  rat: Rat,
  spider: Spider,
  angryMob: AngryMob,
  zombie: Zombie,
  'stone-golem': StoneGolem
};

export default monsters;
