import randomInt from 'random-int'

export function mapTimes(n, fn = x => x) {
  return Array(n)
    .fill(null)
    .map((_, index) => fn(index))
}

export function randomShort() {
  return randomInt(0, 255)
}
