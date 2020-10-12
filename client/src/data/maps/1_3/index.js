const tiles = [
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 9, 5, 5, 0, 0, 0, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 4, 5, 5, 5, 4, 0, 5, 5, 5, 5, 0, 5, 5, 5, 0, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 4, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 0, 0, 0, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 4, 0, 3, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5]
];

// grid coordinates are Horizontal then Vertical, count starts at 0 index
// chests: 18 | ghosts: 11 | zombies: 4

const monsters = [
  {
    type: 'ghost',
    position: [1, 10]
  },
  {
    type: 'ghost',
    position: [3, 14]
  },
  {
    type: 'ghost',
    position: [3, 7]
  },
  {
    type: 'ghost',
    position: [4, 10]
  },
  {
    type: 'ghost',
    position: [5, 2]
  },
  {
    type: 'ghost',
    position: [5, 8]
  },
  {
    type: 'ghost',
    position: [7, 5]
  },
  {
    type: 'zombie',
    position: [23, 3]
  },
  {
    type: 'ghost',
    position: [8, 15]
  },
  {
    type: 'ghost',
    position: [12, 4]
  },
  {
    type: 'zombie',
    position: [25, 14]
  },
  {
    type: 'ghost',
    position: [13, 8]
  },
  {
    type: 'ghost',
    position: [18, 7]
  },
  {
    type: 'zombie',
    position: [25, 12]
  },
  {
    type: 'zombie',
    position: [25, 5]
  }
];

const stairs = {
  down: '1_2',
  up: '1_4'
};

const message = {
  title: 'Level 3',
  body: 'Currently empty of everything but ghosts, zombies and jack-o-lanterns for play testing! Going into shop resets the game'
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
