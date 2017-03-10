
import * as request from 'request';

export function callbackHell() {

    request({ url: 'https://randomuser.me/api/', json: true },

        function(error, response, data) {
            if (error) {
                console.error(error);
            }
            else if (response.statusCode != 200) {
                console.error('Got error code:', response.statusCode);
            }
            else {
                let user = data.results[0];

                request({ url: 'http://quotes.rest/qod.json', json: true },

                    function(error, response, quoteData) {
                        if (error) {
                            console.error(error);
                        }
                        else if (response.statusCode != 200) {
                            console.error('Got error code:', response.statusCode);
                        }
                        else {
                            let quote = quoteData.contents.quotes[0]
                            console.log(user.name.first + ' says: ' + quote.quote);
                        }
                    }
                );
            }
        }
    );

    console.log('Got Here.');

}