
import * as request from 'request';

request({ url: 'https://randomuser.me/api/', json: true },
    function(error, response, data) {
        if (error) {
            console.error(error);
        }
        else if (response.statusCode != 200) {
            console.log('Got error code:', response.statusCode);
        }
        else {
            console.log('Got user data:', data);
        }
    }
);

console.log('Got Here.')