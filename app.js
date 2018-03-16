/* TYPER */
const TYPER = function () {
  if (TYPER.instance_) {
    return TYPER.instance_
  }
  TYPER.instance_ = this

  this.WIDTH = window.innerWidth
  this.HEIGHT = window.innerHeight
  this.canvas = null
  this.ctx = null

  this.words = []
  this.word = null
  this.wordMinLength = 5
  this.guessedWords = 0
  this.counter = 0
  this.points = 0
  this.init()
}

window.TYPER = TYPER

TYPER.prototype = {
  init: function () {
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.ctx = this.canvas.getContext('2d')

    this.canvas.style.width = this.WIDTH + 'px'
    this.canvas.style.height = this.HEIGHT + 'px'

    this.canvas.width = this.WIDTH * 2
    this.canvas.height = this.HEIGHT * 2

    this.loadWords()
  },

  loadWords: function () {
    const xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 0)) {
        const response = xmlhttp.responseText
        const wordsFromFile = response.split('\n')

        typer.words = structureArrayByWordLength(wordsFromFile)

        typer.start()
      }
    }

    xmlhttp.open('GET', 'lemmad2013.txt', true)
    xmlhttp.send()
  },

  start: function () {
    this.generateWord()
    this.word.Draw()

    window.addEventListener('keypress', this.keyPressed.bind(this))
    this.startTime = new Date().getTime()
    window.setInterval(this.loop.bind(this), 100)
  },
  loop: function () {
    this.word.Draw()

    const currentTime = new Date().getTime()

    this.counter = currentTime - this.startTime
  },

  generateWord: function () {
    const generatedWordLength = this.wordMinLength + parseInt(this.guessedWords / 5)
    const randomIndex = (Math.random() * (this.words[generatedWordLength].length - 1)).toFixed()
    const wordFromArray = this.words[generatedWordLength][randomIndex]

    this.word = new Word(wordFromArray, this.canvas, this.ctx)
  },

  keyPressed: function (event) {
    const letter = String.fromCharCode(event.which)

    if (letter === this.word.left.charAt(0)) {
      this.word.removeFirstLetter()
      // this.points += 1 A point for every letter (not needed)
      if (this.word.left.length === 0) {
        this.guessedWords += 1

        if (this.counter > (this.wordMinLength + parseInt(this.guessedWords / 5)) * 1000) {
          this.points -= 5
        } else if (this.counter < (this.wordMinLength + parseInt(this.guessedWords / 5)) * 1000) {
          this.points += 10 // adding points
        }
        this.counter = 0
        this.startTime = new Date().getTime()
        this.generateWord()
      }
    } else {
      this.points -= 1 // taking off points for wrong letter
    }

    this.word.Draw()
  }
}

/* WORD */
const Word = function (word, canvas, ctx) {
  this.word = word
  this.left = this.word
  this.canvas = canvas
  this.ctx = ctx
}

// night mode (semi-broken for now)
function day () {
  this.body.className = 'day'
  console.log('day mode')
}
function night () {
  console.log('night mode')
  this.body.className = 'night'
}

Word.prototype = {
  Draw: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.textAlign = 'center'
    this.ctx.font = '140px Courier'
    /* if (this.body.className === 'day') {
      this.ctx.fillStyle = '#FFFFFF' // change text color
    } else {
      this.ctx.fillStyle = '#000000'
    } */
    this.ctx.fillText(this.left, this.canvas.width / 2, this.canvas.height / 2)
    this.ctx.textAlign = 'left'
    this.ctx.font = 'Bold 64px Courier'
    this.ctx.fillText('Punktid: ' + window.TYPER.instance_.points, 600, 90) // showing points

    this.ctx.textAlign = 'left'
    this.ctx.font = '140px Courier'
    this.ctx.fillText(window.typer.counter, 600, 200) // counter
  },

  removeFirstLetter: function () {
    this.left = this.left.slice(1)
  }
}

/* HELPERS */
function structureArrayByWordLength (words) {
  let tempArray = []

  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length
    if (tempArray[wordLength] === undefined) tempArray[wordLength] = []

    tempArray[wordLength].push(words[i])
  }

  return tempArray
}

window.onload = function () {
  const typer = new TYPER()
  window.typer = typer
}
