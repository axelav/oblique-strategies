const html = require('choo/html')

const mainView = (state, emit) => {
  const handleClick = () => emit('draw')

  return html`
    <body class="sans-serif vh-100 w-100 ma0" onclick=${handleClick}>
      <div class="flex items-center justify-content vh-100">
        <h1 class="f-headline-l f1 tc w-100 ma0 ph4">${state.strategy}</h1>
      </div>
    </body>
  `
}

module.exports = mainView
