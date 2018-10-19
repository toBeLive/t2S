window.onload = function() {

    /*конект*/
    function inJSONdata() {
        var xhr = new XMLHttpRequest(),
            loginEl = document.querySelector('#log'),
            pwdEl = document.querySelector('#pass');

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

        xhr.onload = function() {
            console.log("xhr.status = " + xhr.status);
            if (xhr.status != 200) { // 4. Если код ответа сервера не 200, то это ошибка
                console.log('ERROR ' + xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
            } else {
                console.log(xhr.responseText); // responseText -- текст ответа.
                return xhr.responseText;
            }
        };

        xhr.send();
    }

    ////
    /*конект авторизации*/
    document.querySelector('button').addEventListener('click', function() {
        console.log("Click");
        var textAnswer = inJSONdata();
        console.log(textAnswer);
    }, false);

}