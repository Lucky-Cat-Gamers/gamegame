const tiles = [
  [0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [20, 0, 0, 4, 5, 5, 0, 0, 5, 5, 5, 0, 3, 0, 0, 0, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [0, 4, 0, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0],
  [5, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
];

const monsters = [
  {
    type: 'spider',
    position: [6, 5]
  },
  {
    type: 'spider',
    position: [7, 11]
  },
  {
    type: 'spider',
    position: [12, 13]
  },
  {
    type: 'spider',
    position: [15, 10]
  },
  {
    type: 'spider',
    position: [14, 4]
  }
];

const stairs = {
  up: '1_2'
};

const message = {
  title: 'As you enter the dungeon, you start coughing from the putrid scent...',
  body: `You try to ignore the smell as you recall your quest: Speak with the Old Spirit at his resting place.`
};

export default {
  tiles,
  monsters,
  stairs,
  message
};
