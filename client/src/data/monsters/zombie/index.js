import zombieSprite from './zombie.png';
//spiders would damage you for 1 if touched by adjacent square, otherwise
// eslint-disable-next-line to the line before.
const Zombie = {
  hp: 36,
  maxHp: 36,
  damage: 3,
  defence: 6,
  exp: 500,
  type: 'zombie',
  sprite: zombieSprite
};

export default Zombie;