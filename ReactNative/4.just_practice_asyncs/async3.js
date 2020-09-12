// Promise API를 사용, new Promise(), resolve(), then() 이용
// 각 Pending, Fulfilled, Rejected state에 대응된다.

function getData(callback) {
    return new Promise(function(resolve, reject){
        $.get('url', function(response){
            //익명함수는 그 안에 들어있는 함수를 불러온다라고 읽으면 된다.
            //여기서는 url주소를 받아 response를 arg로 쓰는 resolve 매서드 호출
            resolve(response);
        });
    });
}

//.then은 앞의 함수가 끝나면~ ~~행동을 해라라는 의미
getData().then(function(tableData){
    console.log(tableData);
});