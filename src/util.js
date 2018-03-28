import randomInt from 'random-int'
import NumberBox from '@lokua/number-box'

export const round = NumberBox.roundToDecimal

export function mapTimes(n, fn = x => x) {
  return Array(n)
    .fill(null)
    .map((_, index) => fn(index))
}

export function randomShort() {
  return randomInt(0, 255)
}
