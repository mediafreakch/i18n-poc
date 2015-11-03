var fs= require('fs'),
    handlebars = require('handlebars'),
    view = fs.readFileSync(__dirname + '/view.hbs', 'utf8'),
    i18n = require('i18njs'),
    template,
    html;

// register Handlebars View Helper. Could be moved to a separate component?!
handlebars.registerHelper('t', function(str, options, context) {
 return (i18n ? i18n(str, options, context) : str);
});

// Precompile (could happen on the ServerSide)
template = handlebars.compile(view);

// adding some translations
// could be moved to separate translation files
i18n.translator.add({
  values: {
    "submit.action": "Absenden",
    "%n comments": [
      [0, 0, "Aucun des respondes"],
      [1, 1, "Une respond"],
      [2, null, "%n respondes"]
    ]
  }
});

// View compilation with a context
html = template({ title: 'bar', comments: [0,1,2] });

console.log(html);
