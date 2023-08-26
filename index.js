class backpack {
  constructor(capacity) {
    this.capacity = {
      small: capacity.small,
      medium: capacity.medium,
      big: capacity.big,
    };
    this.items = {
      small: [],
      medium: [],
      big: [],
    };
  }

  pack(size, id) {
    if (this.capacity[size] > 0) {
      this.capacity[size]--;
      this.items[size].push(id);
      return id;
    } else {
      return -1;
    }
  }

  unpack(size) {
    if (this.items[size].length > 0) {
      const id = this.items[size].pop();
      this.capacity[size]++;
      return id;
    } else {
      return -2;
    }
  }
}

class packingService {
  constructor(capacity) {
    this.backpack = new backpack(capacity);
    this.counter = 1;
  }

  performActions(actions) {
    const results = [];

    for (const action of actions) {
      const [type, size] = action;
      if (type === "pack") {
        const result = this.backpack.pack(size, this.counter);
        results.push(result);
        if (result !== -1) {
          this.counter++;
        }
      } else if (type === "unpack") {
        const result = this.backpack.unpack(size);
        results.push(result);
      }
    }

    return results;
  }
}

const backpackCapacity = {
  small: 8,
  medium: 4,
  big: 2,
};

const actions = [
  ["pack", "small"],
  ["pack", "big"],
  ["pack", "big"],
  ["pack", "big"],
  ["unpack", "big"],
  ["pack", "medium"],
];
const service = new packingService(backpackCapacity);
console.log(service.performActions(actions));
