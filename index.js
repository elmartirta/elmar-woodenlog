const style = require('ansi-styles');

var logFunction = console.log,
  logColor = 'green',
  warnColor = 'yellow',
  errorColor = 'red';

module.exports = {
  log: function(object) {
    logFunction(style[logColor].open + object + style[logColor].close);
    return true;
  },
  warn: function (object) {
    logFunction(style[warnColor].open + object + style[warnColor].close);
    return true;
  },
  error: function (object) {
    logFunction(style[errorColor].open + object + style[errorColor].close);
    return true;
  },
  configurate: function (loggingFunction, logColorName, warnColorName, errorColorName) {
    if (loggingFunction) logFunction = loggingFunction;
    logColor = logColorName;
    warnColor = warnColorName;
    errorColor = errorColorName;
    return true;
  }
};
