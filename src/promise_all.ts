
import request from 'axios';

export function promiseAll() {

    Promise.all([
        request({ url: 'https://randomuser.me/api/', responseType: 'json' }),
        request({ url: 'http://quotes.rest/qod.json', responseType: 'json' })
    ])
    
    .then((responses) => {
        let user = responses[0].data.results[0];
        let quote = responses[1].data.contents.quotes[0];
        console.log(user.name.first + ' says: ' + quote.quote);
    })
    
    .catch((err) => {
        console.error(err);
    })

}