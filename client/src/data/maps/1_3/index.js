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
// chests: 18 | spiders: 7 | goblins: 8

const monsters = [
  {
    type: 'spider',
    position: [1, 10]
  },
  {
    type: 'goblin',
    position: [3, 14]
  },
  {
    type: 'spider',
    position: [3, 7]
  },
  {
    type: 'goblin',
    position: [4, 10]
  },
  {
    type: 'spider',
    position: [5, 2]
  },
  {
    type: 'goblin',
    position: [6, 8]
  },
  {
    type: 'spider',
    position: [7, 5]
  },
  {
    type: 'goblin',
    position: [23, 3]
  },
  {
    type: 'spider',
    position: [8, 15]
  },
  {
    type: 'goblin',
    position: [12, 4]
  },
  {
    type: 'spider',
    position: [26, 14]
  },
  {
    type: 'goblin',
    position: [13, 8]
  },
  {
    type: 'spider',
    position: [18, 7]
  },
  {
    type: 'goblin',
    position: [25, 12]
  },
  {
    type: 'goblin',
    position: [25, 6]
  }
];

const stairs = {
  down: '1_2',
  up: '1_4'
};

const message = {
  title: 'Level 3',
  body: 'Currently empty of everything but spiders, goblins and jack-o-lanterns for play testing! Going into shop resets the game'
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
