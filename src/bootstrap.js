// kick-off app
var _ = require('app'),
    a = require('another-component'),
    b = require('my-component');

a.render();
b.render({
    name: 'Joris',
    lastname: 'Calvat',
    apples: [0,1,2]
});
