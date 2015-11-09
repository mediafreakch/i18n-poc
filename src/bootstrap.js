// kick-off app
var _ = require('app'),
    a = require('another-component'),
    b = require('my-component');

a.render();
b.render({
    name: 'John',
    lastname: 'Hero',
    apples: [0]
});
