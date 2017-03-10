
import * as request from 'request';

request('https://randomuser.me/api/',
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