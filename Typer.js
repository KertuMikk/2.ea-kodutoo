/* globals Word, structureArrayByWordLength */
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
  this.counter = 10
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

        window.typer.words = structureArrayByWordLength(wordsFromFile)

        window.typer.start()
      }
    }

    xmlhttp.open('GET', './lemmad2013.txt', true)
    xmlhttp.send()
  },
  start: function () {
    this.generateWord()
    this.word.Draw()

    window.addEventListener('keypress', this.keyPressed.bind(this))
    this.startTime = new Date().getTime()
    window.setInterval(this.loop.bind(this), 1)
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

      if (this.word.left.length === 0) {
        this.guessedWords += 1
        document.getElementById('myText').innerHTML = this.guessedWords
        this.generateWord()
      }

      this.word.Draw()
    }
  }
}

window.onload = function () {
  const typer = new TYPER()
  window.typer = typer
}
/* POINTS */
