class Sorter {
  constructor(public collection: number[]) {}
  // above is a shorthand equivalent to below code:
  // collection: number[]
  // constructor(collection: number[]) {
  //   this.collection = collection
  // }

  sort(): void {}
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log(sorter.collection)
