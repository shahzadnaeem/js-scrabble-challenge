
const scoreTable = [
  { points: 1, letters: 'AEIOULNRST' },
  { points: 2, letters: 'DG' },
  { points: 3, letters: 'BCMP' },
  { points: 4, letters: 'FHVWY' },
  { points: 5, letters: 'K' },
  { points: 8, letters: 'JX' },
  { points: 10, letters: 'QZ' }
]

class Scrabble {
  // Write your implementation here
  constructor (word) {
    this.word = word !== null ? word.toUpperCase() : ''
  }

  scoreForLetter (l) {
    for (let i = 0; i < scoreTable.length; i++) {
      const currCheck = scoreTable[i]

      if (currCheck.letters.indexOf(l) !== -1) {
        return currCheck.points
      }
    }

    return 0
  }

  score () {
    let total = 0

    for (let i = 0; i < this.word.length; i++) {
      total += this.scoreForLetter(this.word[i])
    }

    return total
  }
}

module.exports = Scrabble
