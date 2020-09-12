//비동기: $.get 을 보내고 바로 return tableData 하기 때문에 undefined.

function getData() {
    const tableData="";
    $.get('https://api.themoviedb.org/3/movie/popular?api_key=0d5f97f4ad3ef0c07ab854f29dd0b7ea&language=en-US&page=1', function(response){
        tableData = response;
    });
    return tableData;
}

console.log(getData());