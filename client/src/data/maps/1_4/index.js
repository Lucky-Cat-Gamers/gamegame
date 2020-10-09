const tiles = [
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 4, 5, 5, 0, 0, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 4, 5, 5, 5, 4, 0, 5, 5, 5, 5, 0, 5, 5, 5, 0, 5, 4, 0, 4, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 3, 0, 0, 4, 0, 0, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 4, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 0, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 0, 0, 2, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 4, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5]
];

// grid coordinates are Horizontal then Vertical, count starts at 0 index
// chests: 19 | goblins: 11 | stone-golems: 4

const monsters = [
  {
    type: 'goblin',
    position: [1, 10]
  },
  {
    type: 'goblin',
    position: [3, 14]
  },
  {
    type: 'goblin',
    position: [3, 7]
  },
  {
    type: 'goblin',
    position: [4, 10]
  },
  {
    type: 'goblin',
    position: [5, 2]
  },
  {
    type: 'goblin',
    position: [6, 8]
  },
  {
    type: 'goblin',
    position: [7, 5]
  },
  {
    type: 'stone-golem',
    position: [23, 3]
  },
  {
    type: 'goblin',
    position: [8, 15]
  },
  {
    type: 'goblin',
    position: [12, 4]
  },
  {
    type: 'stone-golem',
    position: [26, 14]
  },
  {
    type: 'goblin',
    position: [13, 8]
  },
  {
    type: 'goblin',
    position: [18, 7]
  },
  {
    type: 'stone-golem',
    position: [25, 12]
  },
  {
    type: 'stone-golem',
    position: [25, 6]
  }
];

const stairs = {
  down: '1_3',
  up: '1_5'
};

const message = {
  title: 'Level 4',
  body: 'Currently empty of everything but goblins, stone-golems and jack-o-lanterns for play testing!'
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
