
import * as request from 'request';

request({ url: 'https://randomuser.me/api/', json: true },
    function(error, response, body) {
        if (error) {
            console.error(error);
        }
        else if (response.statusCode != 200) {
            console.log('Got error code:', response.statusCode);
        }
        else {
            console.log('Got user data:', body);
        }
    }
);