var co = require('co');
var OSS = require('ali-oss');
var client = new OSS({
    region: 'oss-cn-zhangjiakou',
    accessKeyId: 'STS.FzJp4nmx92uRaBNCjibyMyhS8',
    accessKeySecret: 'Km9oNvA6dUu3LQUaYY4T1zVrRBPHQ9K2sq4psQMKTjJ'
});
co(function* () {
    var result = yield client.listBuckets();
    console.log(result);
}).catch(function (err) {
    console.log(err);
});