/**
 * Created by lenovo on 2017/9/5.
 */
const cp = require('child_process');

var child = cp.fork('./child');
child.on('message', function(data, socket) {
    console.log('parentData: ', data);
    child.kill();
})
child.send({name: 'maoruibin'});


