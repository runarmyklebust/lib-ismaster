var bean = __.newBean('me.myklebust.lib.ismaster.IsMasterBean');

exports.isMaster = function () {
    var value = bean.isMaster();
    return __.toNativeObject(value);
};
