/**
 * Created by lenovo on 2017/9/5.
 */
process.on('message', function(data) {
    console.log(data);
    process.send({msg: 'hi parent'})
});
