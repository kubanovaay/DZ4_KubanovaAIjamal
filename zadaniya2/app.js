const request = new XMLHttpRequest();
const url = 'student.json';

request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            console.log(data);
        } else {
            console.error('Error:', request.status);
        }
    }
};

request.open('GET', url);
request.send();
