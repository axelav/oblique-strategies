const { draw } = require('oblique-strategies')

const strategyStore = (state, emitter) => {
  state.strategy = draw()

  emitter.on('draw', () => {
    state.strategy = draw()
    emitter.emit('render')
  })
}

module.exports = strategyStore
