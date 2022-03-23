const Queue = require('./queue');

function hotPotato(elementsList) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i += 1) {
    queue.addItems(elementsList[i]);
  }

  while (queue.size() > 1) {
    const number = Math.ceil((Math.random() * 10)) + (queue.size() * 2);
    for (let i = 0; i < number; i += 1) {
      queue.addItems(queue.getItem());
    }

    eliminatedList.push(queue.getItem());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.getItem()
  };
}

const players = ["Player_1", "Player_2", "Player_3", "Player_4", "Player_5"];
const result = hotPotato(players);

result.eliminated.forEach((player) => {
  console.log(`${player} was eliminated from the hot potato game.`);
});

console.log(`The winner is ${result.winner}`);
