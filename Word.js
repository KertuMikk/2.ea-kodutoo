
/* WORD */
const Word = function (word, canvas, ctx) {
  this.word = word
  this.left = this.word
  this.canvas = canvas
  this.ctx = ctx
}

Word.prototype = {
  Draw: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.textAlign = 'center'
    this.ctx.font = '140px Courier'
    this.ctx.fillText(this.left, this.canvas.width / 2, this.canvas.height / 2)

    this.ctx.textAlign = 'left'
    this.ctx.font = '140px Courier'
    this.ctx.fillText(window.typer.counter, 100, 100)
  },

  removeFirstLetter: function () {
    this.left = this.left.slice(1)
  }
}
