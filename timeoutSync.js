function setTimeoutSync(callback,n) {
    var initial = Date.now();
    while(Date.now()<=initial+n) {};
    callback();
}
function callback(){
    console.log("This is the callback function");
}
setTimeoutSync(callback,1000);