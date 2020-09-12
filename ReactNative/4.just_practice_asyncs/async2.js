//이러한 형태로 call back 지옥, 계속 callback이 꼬리를 무는 형태가 나오게 된다.

function getData(callbackFunc) {
    $.get('url', function(response){
        callbackFunc(response);
    });
}

// tableData를 console.log하는 익명함수를 callbackFunc로 쓰겠다.
getData(function(tableData){
    console.log(tableData);
});