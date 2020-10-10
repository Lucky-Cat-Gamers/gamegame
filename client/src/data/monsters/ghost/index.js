import ghostSprite from './ghost.png';
//spiders would damage you for 1 if touched by adjacent square, otherwise
// eslint-disable-next-line to the line before.
const Ghost = {
  hp: 24,
  maxHp: 24,
  damage: 2,
  defence: 4,
  exp: 400,
  type: 'ghost',
  sprite: ghostSprite
};

export default Ghost;