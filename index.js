function getTekst() {
$.post('tekst.txt', function(data) {
        console.log(data);
})};

var connect = require('connect');

connect().use(getTekst()).listen(1704);

