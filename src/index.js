const choo = require('choo')
const html = require('choo/html')
const css = require('sheetify')
const mainView = require('./views/main')
const strategyStore = require('./stores/strategy')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(strategyStore)

app.route('/', mainView)

app.mount('body')
